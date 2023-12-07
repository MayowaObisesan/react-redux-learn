import { useEffect } from "react";

const GenerateAccessToken = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/token/refresh/`;
    useEffect(() => {
        const refreshToken = localStorage.getItem("nine_refresh");
        const fetchInit = {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                // 'Origin': '*'
            },
            mode: 'cors',
            body: { "refresh": refreshToken }
        }
        fetch(url, fetchInit)
            .then((res) => res.json())
            .then((data) => localStorage.setItem("nine_login", data))
            .catch((err) => null);
    }, [url]);
}