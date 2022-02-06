import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthToken from './auth/authToken';
import Auth from "./auth/Auth";
import Home from "./pages/Home";

const URL = "http://localhost:2500/";

const App = () => {
    const {token, setToken} = AuthToken();

    const toastStyling = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    return (
        <div className="container-fluid">
            <Router>
                <Switch>
                    <Route exact path="/">
                    {
                        token?
                        <Home />:
                        <Auth
                            setToken={setToken}
                            devApi={`${URL}api/`}
                            toastStyling={toastStyling}
                        />
                    }
                    </Route>
                    <Route path="/auth">
                    {
                        token?
                        <Redirect to="/" />:
                        <Auth
                            setToken={setToken}
                            devApi={`${URL}api/`}
                            toastStyling={toastStyling}
                        />
                    }
                    </Route>
                </Switch>
            </Router>            
        </div>

    )
}

export default App;