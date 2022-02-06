
const Register = () => {
	return (
		<div className="card auth__card">
			<div className="authcard__header">
			</div>
			<div className="authcard__body">
	            <form>
	            	<legend>Create your account</legend>
	            	<div className="row">
	            		<div className="form-group col-lg-6">
			                <input
			                    type="text"
			                    className="form-control auth__input"
			                    required={true}
			                    placeholder="Full Name"
			                    name="twitterclone-name"
			                />
						</div>
						<div className="form-group col-lg-6">
			                <input
			                    type="email"
			                    className="form-control auth__input"
			                    required={true}
			                    placeholder="Email"
			                    name="twitterclone-email"
			                />
						</div>
	                </div>
	                <button type="submit">Sign Up</button>
	            </form>
            </div>
		</div>
	)
}

export default Register;