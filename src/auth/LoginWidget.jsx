import {useOktaAuth} from "@okta/okta-react";
import {SpinnerLoading} from "../layouts/Utils/SpinnerLoading";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../properties";
import OktaSignInWidget from "./OktaSignInWidget";

const LoginWidget = ({config}) => {
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (error) => {
        console.log("Sign in error: ", error);
    }

    if (!authState) {
        return <SpinnerLoading/>
    }

    return authState.isAuthenticated ? <Navigate to={ROUTES.BASE}/> :
        <OktaSignInWidget config={config} onError={onError} onSuccess={onSuccess}/>
}

export default LoginWidget;