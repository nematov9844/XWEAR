/** @format */

import axios from "axios";

export const fetchUsers = async () => {
	const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
	return data;
};
/** @format */


export const useAxios = () => {
	const response = ({ url, method = "GET", body, params, headers }) => {
		return axios({
			url: `https://api.escuelajs.co/api/v1/${url}`,
			method,
			data: body,
			params: { ...params },
			headers: { ...headers },
		}).then((res) => res.data);
	};

	return response;
};

export const useSignLeData = () => {
	const response = ({ url, method = "GET", body, params, headers }) => {
		return axios({
			url: `http://localhost:3000/${url}`,
			method,
			data: body,
			params: { ...params },
			headers: { ...headers },
		}).then((res) => res.data);
	};

	return response;
}
