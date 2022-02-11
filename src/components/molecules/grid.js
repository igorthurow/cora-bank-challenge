import React from 'react'
import PropTypes from 'prop-types'

import './grid.scss'

export const Grid = ({
	gridItems,
	gridHead,
	GridFloatRow,
	GridRow,
	loading
}) => {
	if (loading) return <p>Carregando...</p>
	if (!gridItems || !gridItems.length)
		return <p>Não encontramos nenhum resultado...</p>

	return (
		<table className='grid'>
			<thead className='grid__header'>
				<tr className='grid__header-row'>
					{gridHead.map((columnTitle) => (
						<th key={columnTitle} className='grid__header-column'>{columnTitle}</th>
					))}
				</tr>
			</thead>
			{gridItems.map(({ float, body }, index) => (
				<>
					{float && (
						<tbody className='grid__float-body'>
							<GridFloatRow {...float} key={index} />
						</tbody>
					)}
					{body && (
						<tbody className='grid__body'>
							{body.map((props, index) => {
								return <GridRow {...props} key={index} />
							})}
						</tbody>
					)}
				</>
			))}
		</table>
	)
}

Grid.propTypes = {
	items: PropTypes.shape({
		itemsTotal: PropTypes.number.isRequired,
		results: PropTypes.arrayOf(
			PropTypes.shape({
				date: PropTypes.string.isRequired,
				amountTotal: PropTypes.number.isRequired,
				items: PropTypes.arrayOf(
					PropTypes.shape({
						status: PropTypes.string.isRequired,
						actor: PropTypes.string.isRequired,
						amount: PropTypes.number.isRequired,
						entry: PropTypes.string.isRequired,
						source: PropTypes.string.isRequired,
						dateEvent: PropTypes.string.isRequired
					})
				).isRequired
			})
		).isRequired
	}).isRequired
}
