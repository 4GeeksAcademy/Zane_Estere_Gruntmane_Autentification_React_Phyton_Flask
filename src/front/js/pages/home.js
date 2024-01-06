import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card  shadow-sm p-3 mb-5 bg-body-tertiary rounded">
			<img src="https://img.freepik.com/premium-photo/calm-waters-warm-sun_905683-38397.jpg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h1 className="card-title">Stories are wild creatures</h1>
				<p className="card-text"> ..be part of the story-making</p>
				<div className="buttons text-center">
					<a href="#" className="button btn btn-primary me-2">Signup
						<i className="fa-solid fa-pen-to-square ms-2"></i> </a>
					<a href="#" className="button btn btn-primary me-2">Login
						<i className="fa-solid fa-right-to-bracket ms-2"></i></a>
				</div>
			</div>
		</div>
	);

};
