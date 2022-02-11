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
						<th key={columnTitle} className='grid__header-column'>
							{columnTitle}
						</th>
					))}
				</tr>
			</thead>
			{gridItems.map(({ float, body }, index) => (
				<React.Fragment key={`fragment-${index}`}>
					{float && (
						<tbody className='grid__float-body' key={`float-${index}`}>
							<GridFloatRow {...float} />
						</tbody>
					)}
					{body && (
						<tbody className='grid__body' key={`body-${index}`}>
							{body.map((props, index) => {
								return <GridRow {...props} key={`body-row-${index}`} />
							})}
						</tbody>
					)}
				</React.Fragment>
			))}
		</table>
	)
}

Grid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			float: PropTypes.object,
			body: PropTypes.array
		})
	),
	gridHead: PropTypes.arrayOf(PropTypes.string),
	GridFloatRow: PropTypes.elementType.isRequired,
	GridRow: PropTypes.elementType.isRequired,
	loading: PropTypes.bool
}
