import {useOktaAuth} from "@okta/okta-react";
import {SpinnerLoading} from "../layouts/Utils/SpinnerLoading";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../properties";

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

    return authState.isAuthenticated ? <Navigate to={ROUTES.BASE}/> : <div></div>
}

export default LoginWidget;