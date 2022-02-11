import React from 'react'
import PropTypes from 'prop-types'

import './default.scss'

import { Header, Filter, Search, Grid } from '../../components'

export const Default = ({
	header: { pageTitle },
	grid: { GridFloatRow, GridRow, gridItems, gridHead, loading },
	search: { onChange, value },
	filter: { active, onClick, filterItems }
}) => {
	return (
		<div className='default-template'>
			<div className='default-template__header'>
				<Header>{pageTitle}</Header>
			</div>
			<main className='default-template__grid'>
				<div className='default-template__grid-boxed'>
					<div className='default-template__grid-filters'>
						<Filter
							active={active}
							onClick={onClick}
							filterItems={filterItems}
						/>
						<Search value={value} onChange={onChange} />
					</div>
					<Grid
						GridFloatRow={GridFloatRow}
						GridRow={GridRow}
						gridItems={gridItems}
						gridHead={gridHead}
						loading={loading}
					/>
				</div>
			</main>
		</div>
	)
}
