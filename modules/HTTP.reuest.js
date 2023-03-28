import axios from "axios";

export async function getData(resource) {
	const res = await axios.get(
		import.meta.env.VITE_BASE_URL + resource);

	const data = await res.data;

	return data;
}

export async function getCurrencies() {
	console.log(
		import.meta.env.VITE_API_KEY);
	const res = await axios.get("https://apilayer.com/marketplace/currency_data-api?live_demo=show", {
		redirect: 'follow',
		headers: {
			apikey: import.meta.env.VITE_API_KEY
		}
	})

	return res
}

export const postData = async (path, body) => {
	const res = await axios.post(import.meta.env.VITE_BASE_URL + path, body)

	return res
}


export const editData = async (path, body) => {
	const res = await axios.patch(import.meta.env.VITE_BASE_URL + path, body)


	return res
}