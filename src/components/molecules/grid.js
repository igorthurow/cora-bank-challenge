import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/pt-br'

import { GridRow } from '../../components'
import { ReceivedIcon, PendingIcon, RefundedIcon } from '../../icons'

import './grid.scss'

//TODO: Isso vai vir de page

const config = {
	completed: {
		debit: {
			icon: PendingIcon,
			theme: 'debit',
			texts: {
				prefix: '- R$',
				payment: 'Pagamento Realizado',
				transfer: 'Transferência Realizada'
			}
		},
		credit: {
			icon: ReceivedIcon,
			theme: 'credit',
			texts: {
				prefix: '+ R$',
				payment: 'Pagamento Recebido',
				transfer: 'Transferência Recebida'
			}
		}
	},
	refunded: {
		credit: {
			icon: RefundedIcon,
			theme: 'refunded',
			texts: {
				prefix: 'R$',
				payment: 'Pagamento Estornado',
				transfer: 'Transferência Estornada'
			}
		}
	},
	pending: {
		debit: {
			icon: PendingIcon,
			theme: 'debit',
			texts: {
				prefix: '- R$',
				payment: 'Pagamento Agendado',
				transfer: 'Transferência Agendada'
			}
		}
	}
}

const buildRowProps = ({ status, entry, source, dateEvent, amount }) => {
	const [statusLwc, entryLwc, sourceLwc] = [status, entry, source].map((text) =>
		text.toLowerCase()
	)
	const dateFormat = 'DD MMM YYYY - HH:mm'
	const locale = 'pt-BR'

	const { icon, texts, theme } = config[statusLwc][entryLwc]
	const { prefix, [sourceLwc]: text } = texts
	const formattedDate = moment(dateEvent).format(dateFormat)
	const value = new Intl.NumberFormat(locale, {
		minimumFractionDigits: 2
	}).format(amount)

	return {
		theme,
		formattedDate,
		prefix,
		icon,
		text,
		value
	}
}

const buldGridRows = (items) =>
	items.map(({ status, actor, amount, entry, source, dateEvent }, index) => {
		const { prefix, icon, text, formattedDate, theme, value } = buildRowProps({
			status,
			entry,
			source,
			dateEvent,
			amount
		})

		return (
			<GridRow
				icon={icon}
				key={index}
				text={text}
				theme={theme}
				actor={actor}
				formattedDate={formattedDate}
				amount={{
					value,
					prefix
				}}
			/>
		)
	})

export const Grid = ({ items: { results }, gridHead }) => {
	return (
		<table className='grid'>
			<thead className='grid__header'>
				<tr className='grid__header-row'>
					{gridHead.map((columnTitle) => (
						<th className='grid__header-column'>{columnTitle}</th>
					))}
				</tr>
			</thead>
			{results.map(({ date, amountTotal, items }) => (
				<>
					<tbody className="grid__float-body">
						<tr className="grid__float-row">
							<th className="grid__float-column">{date}</th>
							<th >{amountTotal}</th>
						</tr>
					</tbody>
					<tbody className="grid__body">{buldGridRows(items)}</tbody>
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
