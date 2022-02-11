import React from 'react'
import PropTypes from 'prop-types'

import './grid-float-row.scss'

export const GridFloatRow = ({ amount: { prefix, value }, date }) => (
	<tr className='grid-float-row'>
		<td className='grid-float-row__date'>{date}</td>
		<td className='grid-float-row__value'>
			<span>{prefix}</span>{' '}
			<span className='grid-float-row__amount'>{value}</span>
		</td>
	</tr>
)

GridFloatRow.propTypes = {
	amount: PropTypes.shape({
		prefix: PropTypes.string,
		value: PropTypes.string
	}).isRequired,
	date: PropTypes.string.isRequired
}
