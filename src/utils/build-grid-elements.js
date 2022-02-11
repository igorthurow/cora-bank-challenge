import moment from 'moment'
import 'moment/locale/pt-br'

import { ReceivedIcon, PendingIcon, RefundedIcon } from '../icons'

const DEFAULT_DATE_FORMAT = 'DD [de] MMMM'
const DEFAULT_MINIMUM_FRACTION_DIGITS = 2
const DEFAULT_LOCALE = 'pt-BR'

const GRID_ROW_CONFIG = {
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

const buildRealCurrency = (value) =>
	new Intl.NumberFormat(DEFAULT_LOCALE, {
		minimumFractionDigits: DEFAULT_MINIMUM_FRACTION_DIGITS
	}).format(value)

const buildRowProps = ({
	status,
	entry,
	source,
	dateEvent,
	amount,
	...props
}) => {
	const [statusLwc, entryLwc, sourceLwc] = [status, entry, source].map((text) =>
		text.toLowerCase()
	)
	const dateFormat = 'DD MMM YYYY - HH:mm'

	const { icon, texts, theme } = GRID_ROW_CONFIG[statusLwc][entryLwc]
	const { prefix, [sourceLwc]: text } = texts
	const formattedDate = moment(dateEvent).format(dateFormat)
	const value = buildRealCurrency(amount)

	return {
		...props,
		theme,
		formattedDate,
		amount: {
			prefix,
			value
		},
		icon,
		text
	}
}

const buildGridHead = (date) => {
	const formattedDate = moment(date).format(DEFAULT_DATE_FORMAT)

	return [formattedDate, 'Tipo de transação', 'Data', 'Valor']
}

const buildFloatRowProps = ({ date, amountTotal }) => {
	const formattedDate = moment(date).format(DEFAULT_DATE_FORMAT)
	const formattedValue = buildRealCurrency(amountTotal)

	return {
		date: formattedDate,
		amount: {
			prefix: 'Saldo do dia',
			value: `R$ ${formattedValue}`
		}
	}
}

const buildResultsForGridItem = (results) =>
	results.reduce((prev, { items, date, amountTotal }, index) => {
		const gridItems = [
			...(prev.gridItems || []),
			{
				...(index && {
					float: buildFloatRowProps({ amountTotal, date })
				}),
				body: items.map(buildRowProps)
			}
		]

		return {
			gridItems,
			gridHead: prev.gridHead || buildGridHead(date)
		}
	}, {
		gridItems: [],
	})

export const buildGridItems = (data) => {
	const { results } = data || {}

	if (!results) return {}

	const { gridItems, gridHead } = buildResultsForGridItem(results)

	return {
		gridItems,
		gridHead
	}
}
