import { useDeferredValue } from "react";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user_email: undefined,
		},
		actions: {
			signupUser: async ({ email, password }) => {
				console.log(email, password)
				const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email,
						password
					})
				})
			},

			loginUser: async ({ email, password }) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email,
						password
					})
				});

				const jsonResponse = await resp.json();

				if (jsonResponse["token"]) {
					localStorage.setItem("userToken", jsonResponse["token"]);
					return true;
				}
				return false;
			}

			getUserToken: async () => {
				const url = process.env.BACKEND_URL;
				const tokenRequirement = "/api/private";

				try {
					const response = await fetch(url + tokenRequirement, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${localStorage.getItem("userToken")}`
						}
					});

					if (response.status !== 200) {
						throw new Error(`Error: ${response.status}`);
					}

					const jsonResponse = await response.json();

					return jsonResponse;

				} catch (error) {
					console.error("An error occurred: ", error);
				}
			},


		}
	}
};
export default getState;