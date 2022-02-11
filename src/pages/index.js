import React from 'react'

import './index.scss'
import 'reset-css'

import { GridRow, GridFloatRow, Default } from '../components'
import { buildGridItems } from '../utils'
import { useFilter, useSearch, useApi } from '../hooks'

const IndexPage = () => {
	const { data, loading } = useApi('/statements')
	const { filteredData, setActiveFilter, active, filterItems } = useFilter(data)
	const { searchedData, setSearchTems, searchTem } = useSearch(filteredData)
	const { gridItems, gridHead } = buildGridItems(searchedData)

	return (
		<Default
			className='statements'
			header={{
				pageTitle: 'Extrato'
			}}
			filter={{
				active,
				onClick: setActiveFilter,
				filterItems
			}}
			search={{
				onChange: setSearchTems,
				value: searchTem
			}}
			grid={{
				loading,
				GridFloatRow,
				GridRow,
				gridHead,
				gridItems
			}}
		/>
	)
}

export default IndexPage
