import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { getProfile } from "./loaders/appLoaders";
import { PageLoader } from "../helpers/elements";
import React from "react";
import {useSelector, useDispatch} from 'react-redux';

export async function loader() {
    const me = await getProfile();
    return { me };
}

export default function Root() {
    const navigation = useNavigation();
//    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    return (
        // <ErrorBoundary fallbackComponent={ErrorFallback}>
        <>
            {navigation.state === "loading" && <PageLoader />}
            <ScrollRestoration
                getKey={(location, matches) => {
                    return location.pathname;
                }}
            />
            <Outlet />
        </>
        // </ErrorBoundary>
    )
}