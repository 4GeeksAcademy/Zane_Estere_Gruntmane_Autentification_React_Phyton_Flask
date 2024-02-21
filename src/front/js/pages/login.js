import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
		actions.loginUser({
			email,
			password
		})
	}

	return (
		<div className="container">
			<img src="https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="frontimage img-fluid rounded mx-auto d-block" alt="Responsive Image" />
			<form className="row justify-content-center rounded-pill py-5">
				<div className="col-4 mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email" onChange={(e) => setEmail(e.target.value)} />
					<div id="emailHelp" className="form-text">Welcome back, storyteller!</div>
				</div>
				<div className="col-4 mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="your password" onChange={(e) => setPassword(e.target.value)} />
				</div>

				<button type="submit" className="button btn btn-primary col-8" onClick={e => login(e)}>Login</button>
			</form>

		</div>
	);
};
