import axios from "axios";
let refresh = false;

// Request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config
}, function (error) {
    // Do something with request error
    // console.log(error);
    console.log("ERROR AXIOS");
    return Promise.reject(error)
})

// Response interceptor
axios.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        const refreshTokenURL = `${process.env.REACT_APP_BASE_URL}/token/refresh/`;
        const response = await axios.post(
            refreshTokenURL,
            {
                refresh: localStorage.getItem('nine_refresh')
            },
            {
                headers: { 'Content-Type': 'application/json' }
            },
            {
                withCredentials: true
            });
        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`
            localStorage.setItem('nine_login', response.data.access)
            localStorage.setItem('nine_refresh', response.data.refresh);
            return axios(error.config)
        }
    }
    refresh = false;
    return error;
})