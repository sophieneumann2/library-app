import {Navigate} from "react-router-dom";
import React from "react";
import {useOktaAuth} from "@okta/okta-react";
import {SpinnerLoading} from "./SpinnerLoading";

export const ProtectedRoute: React.FC<{ redirectTo: string, children: any }> = (props) => {
    const {authState} = useOktaAuth();

    if (!authState) {
        return <SpinnerLoading/>
    }

    return authState.isAuthenticated ? props.children : <Navigate to={props.redirectTo}/>;
}
