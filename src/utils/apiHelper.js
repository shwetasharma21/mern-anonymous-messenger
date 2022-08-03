import axios from "axios";

import { config } from "../config/config";

const apiURL = config.apiURL;

const apiCaller = async (apiConfig) => {
	try {
		const result = await axios(apiConfig);
		if (result) {
			return result.data;
		}
	} catch (err) {
		if (err.response) {
			return err.response.data;
		}
	}
};

const loginRequest = async (email, pass) => {
	const result = await apiCaller({
		method: "post",
		url: `${apiURL}/auth/login`,
		data: {
			email,
			pass,
		},
	});
	return result;
};

const registerRequest = async (name, email, pass, cpass) => {
	const result = await apiCaller({
		method: "post",
		url: `${apiURL}/auth/register`,
		data: {
			name,
			email,
			pass,
			cpass,
		},
	});
	return result;
};

export { loginRequest, registerRequest };
