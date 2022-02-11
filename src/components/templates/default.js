import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './default.scss'

import { Header, Filter, Search, Grid } from '../../components'
import classNames from 'classnames'

export const Default = ({
	header: { pageTitle },
	grid: { GridFloatRow, GridRow, gridItems, gridHead, loading },
	search: { onChange, value },
	filter: { active, onClick, filterItems },
	className
}) => {
	return (
		<div className={classNames('default-template', className)}>
			<Helmet
				htmlAttributes={{
					lang: 'pt-br'
				}}
			>
				<title>Cora Bank Challenge :)</title>
				<meta name='description' content='Hey hacker ;)'></meta>
			</Helmet>
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

Default.propTypes = {
	header: PropTypes.shape({
		pageTitle: PropTypes.string.isRequired
	}).isRequired,
	grid: PropTypes.shape({
		GridFloatRow: PropTypes.elementType.isRequired,
		GridRow: PropTypes.elementType.isRequired,
		gridItems: PropTypes.array,
		gridHead: PropTypes.array,
		loading: PropTypes.bool.isRequired
	}).isRequired,
	search: PropTypes.shape({
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired
	}).isRequired,
	filter: PropTypes.shape({
		active: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		filterItems: PropTypes.array.isRequired
	}).isRequired,
	className: PropTypes.string
}

