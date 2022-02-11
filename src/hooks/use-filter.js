import { useState, useEffect } from 'react'
import { filterResults } from '../utils'

const initialFilter = { label: 'Tudo', value: 'all' }

const filterItems = [
	initialFilter,
	{ label: 'Entrada', value: 'credit' },
	{ label: 'Saída', value: 'debit' },
	{ label: 'Futuro', value: 'scheduled' }
]

export const useFilter = (data) => {
	const [{ value }, setActiveFilter] = useState(initialFilter)
	const [filteredData, setFilteredData] = useState(data)

	useEffect(() => {
		setFilteredData(filterResults(data, value))
	}, [value, data])

	return {
		filteredData,
		setActiveFilter,
		active: value,
		filterItems
	}
}
