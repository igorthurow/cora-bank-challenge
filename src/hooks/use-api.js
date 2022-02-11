import { useClient } from '../api/client'

export const useApi = (endpoint) => {
	const { loading, error, data } = useClient(endpoint)

	return {
		loading,
		error,
		data
	}
}
