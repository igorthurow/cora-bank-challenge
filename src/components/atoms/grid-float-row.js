import React from 'react'
import PropTypes from 'prop-types'

import './grid-float-row.scss'

export const GridFloatRow = ({
	amountTotal,
	date
}) => (
	<tr className='grid-float-row'>
		<th className='grid-float-row__date'>{date}</th>
		<th>{amountTotal}</th>
	</tr>
)

GridFloatRow.propTypes = {
	amountTotal: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired
}