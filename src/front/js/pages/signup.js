import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signUp = () => {
		actions.signupUser({
			user_email,
			password
		})

	return (
		<div className="container">
			<img src="https://images.pexels.com/photos/355328/pexels-photo-355328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="frontimage img-fluid rounded mx-auto d-block" alt="Responsive Image" />

			<form className="row justify-content-center rounded-pill py-5">
				<div className="col-4 mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
					<div id="emailHelp" className="form-text">No worries, your personal data is well secured! </div>
				</div>
				<div className="col-4 mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="enter password"  onChange={(e) => setPassword(e.target.value)} />
				</div>

				<button type="submit" className="button btn btn-primary col-8" onClick={signUp}>Signup</button>
			</form>

		</div>

	);
};
