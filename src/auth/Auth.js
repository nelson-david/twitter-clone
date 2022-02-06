import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Auth = ({ devApi, setToken, toastStyling }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-xl-6">
                <br /><br /><br />
                <Switch>
                        <Route path={`/auth/register`}>
                            <Register
                                toastStyling={toastStyling}
                                devApi={devApi}
                            />
                        </Route>
                        <Route path={`/auth/login`}>
                            <Login
                                setToken={setToken}
                                toastStyling={toastStyling}
                                devApi={devApi}
                            />
                        </Route>
                        <Route>
                            <Login
                                setToken={setToken}
                                toastStyling={toastStyling}
                                devApi={devApi}
                            />
                        </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Auth;