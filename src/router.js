import Home, { appLoader } from './pages/Home';
import { loader as meLoader } from "./pages/Root";


import { ErrorBoundary, ErrorFallback } from "./helpers/utils";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import CreatePage from './pages/CreatePage';
import NoPage from './pages/NoPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id={"root"} path="/" element={<Root />} errorElement={<ErrorPage />} loader={meLoader}>
            <Route index element={<Home />} loader={appLoader} />
            <Route id={"createApp"} path="new" element={<CreatePage />} />
            <Route id={"search"} path="search" element={<Search />} />
            {/*<Route id={"userDetail"} path="user/:id" element={<UserDetail />} render={props => <UserDetail {...props.match.params} />} loader={userDetailLoader} />*/}
            <Route id={"noPage"} path="*" element={<NoPage />} />
        </Route>
    )
)

export default function NineRoutes() {
    return (
        <ErrorBoundary fallbackComponent={ErrorFallback}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
}