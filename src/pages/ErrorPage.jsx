import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div>Oops</div>
            <div>Sorry, an unexpected error has occurred</div>
            <p>
                <i>{error.statusText || error.message}</i>
                <div>{console.log(error.message)}</div>
            </p>
        </div>
    );
}