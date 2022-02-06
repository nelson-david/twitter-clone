
const Login = ({setToken}) => {

    const loginUser = (e) => {
        e.preventDefault();
        setToken("123456");
    }

    return (
        <>
            <form onSubmit={loginUser}>
                <input
                    type="text"
                    className="form-control mb-3"
                    required={true}
                    placeholder="Enter Username"
                    name="twitterclone-username"
                />
                <input
                    type="password"
                    className="form-control mb-3"
                    required={true}
                    placeholder="Enter Password"
                    name="twitterclone-password"
                />
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default Login;