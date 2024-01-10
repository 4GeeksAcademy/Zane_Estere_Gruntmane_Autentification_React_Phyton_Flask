import { useDeferredValue } from "react";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_email: undefined,
		},
		actions: {
			signupUser: async ({ user_email, password }) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						user_email,
						password
					})
				})
			},

			loginUser: async ({ user_email, password }) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						user_email,
						password
					})
				});

				const jsonResponse = await resp.json();

				if (jsonResponse["access_token"]) {
					localStorage.setItem("userToken", jsonResponse["access_token"]);
					return true;
				}
				return false;
			}

		}
	}
};
export default getState;