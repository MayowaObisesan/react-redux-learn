import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


// export const Logout = () => {
//     const navigate = useNavigate();
//     localStorage.removeItem("nine_login");
//     console.log("User Logged out.")
//     // setIsLoggedIn(false);
//     // Refresh the page to delete stale states and data
//     navigate(0);
// }

export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const logoutURL = `${process.env.REACT_APP_BASE_URL}/logout/`;
                const {data} = await axios.post(
                    logoutURL,
                    {
                        refresh_token: localStorage.getItem('refresh_token')
                    },
                    {
                        headers: {'Content-Type': 'application/json'}
                    },
                    {
                        withCredentials: true
                    }
                );
                localStorage.removeItem('nine_login')
                axios.defaults.headers.common['Authorization'] = null
                navigate('/login')
            } catch (err) {
                console.log('logout not working', err)
            }
        })();
    }, [])
    return <></>
}

// export default Logout.bind(this);