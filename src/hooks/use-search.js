import { useState, useEffect } from 'react'
import { filterResults } from '../utils'

export const useSearch = (data) => {
	const [searchedData, setSearchedData] = useState(data)
	const [searchTem, setSearchTems] = useState('')

	useEffect(() => {
		setSearchedData(filterResults(data, 'search', searchTem))
	}, [searchTem, data])

	return {
		setSearchTems,
		searchedData,
		searchTem
	}
}