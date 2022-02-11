import useFetch from 'use-http'

export const useClient = (endpoint) => {
	const url = `${process.env.API_URL}${endpoint}`

	return useFetch(url, [])
}