import React from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import './index.scss'
import 'reset-css'

import { Helmet } from 'react-helmet'

import {
	FilterItem,
	Filter,
	Header,
	Search,
	GridRow,
	GridFloatRow,
	Grid
} from '../components'

import { ReceivedIcon, PendingIcon, RefundedIcon } from '../icons'

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
	const locale = 'pt-BR'

	const { icon, texts, theme } = config[statusLwc][entryLwc]
	const { prefix, [sourceLwc]: text } = texts
	const formattedDate = moment(dateEvent).format(dateFormat)
	const value = new Intl.NumberFormat(locale, {
		minimumFractionDigits: 2
	}).format(amount)

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
	const dateFormat = 'DD [de] MMMM'
	const formattedDate = moment(date).format(dateFormat)

	return [formattedDate, 'Tipo de transação', 'Data', 'Valor']
}

const data = {
	itemsTotal: 22,
	results: [
		{
			date: '2021-01-06',
			amountTotal: 128000,
			items: [
				{
					status: 'COMPLETED',
					actor: 'José Marques',
					amount: 13920,
					source: 'PAYMENT',
					type: 'BANKSLIP',
					entry: 'CREDIT',
					scheduled: false,
					dateEvent: '2021-01-06T21:00:00Z'
				}
			]
		},
		{
			date: '2021-01-15',
			amountTotal: 114080,
			items: [
				{
					status: 'COMPLETED',
					actor: 'Alexandre da Silva',
					amount: 20000,
					source: 'TRANSFER',
					type: 'EXTERNAL',
					entry: 'DEBIT',
					scheduled: false,
					dateEvent: '2021-01-15T00:00:00Z'
				}
			]
		},
		{
			date: '2021-01-17',
			amountTotal: 94080,
			items: [
				{
					status: 'COMPLETED',
					actor: 'Lelo Desenv Ltda',
					amount: 56000,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					scheduled: false,
					dateEvent: '2021-01-17T00:00:00Z'
				},
				{
					status: 'COMPLETED',
					actor: 'Lola Camisaria',
					amount: 12000,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					scheduled: false,
					dateEvent: '2020-01-17T00:00:00Z'
				},
				{
					status: 'REFUNDED',
					actor: 'Lelo Desenv Ltda',
					amount: 56000,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'CREDIT',
					scheduled: false,
					dateEvent: '2020-01-17T00:00:00Z'
				},
				{
					status: 'COMPLETED',
					actor: 'Tereza da Silva',
					amount: 1000,
					source: 'PAYMENT',
					type: 'BANKSLIP',
					entry: 'CREDIT',
					scheduled: false,
					dateEvent: '2020-01-17T21:00:00Z'
				}
			]
		},
		{
			date: '2020-04-20',
			amountTotal: 83080,
			items: [
				{
					status: 'COMPLETED',
					actor: 'Giovanna Bezerra',
					amount: 1000,
					source: 'TRANSFER',
					type: 'EXTERNAL',
					entry: 'DEBIT',
					scheduled: false,
					dateEvent: '2020-04-20T00:00:00Z'
				},
				{
					status: 'COMPLETED',
					actor: 'Felipe Garcia',
					amount: 50000,
					source: 'PAYMENT',
					type: 'BANKSLIP',
					entry: 'CREDIT',
					scheduled: false,
					dateEvent: '2020-04-20T21:00:00Z'
				}
			]
		},
		{
			date: '2020-04-24',
			amountTotal: 132080,
			items: [
				{
					status: 'COMPLETED',
					actor: 'Lola Camisaria',
					amount: 13580,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					scheduled: false,
					dateEvent: '2020-04-24T00:00:00Z'
				},
				{
					status: 'REFUNDED',
					actor: 'Felipe',
					amount: 2500,
					source: 'TRANSFER',
					type: 'EXTERNAL',
					entry: 'CREDIT',
					scheduled: false,
					dateEvent: '2020-04-24T00:00:00Z'
				}
			]
		},
		{
			date: '2020-05-28',
			amountTotal: 121000,
			items: [
				{
					status: 'PENDING',
					actor: 'Lola Camisaria',
					amount: 33850,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					dateEvent: '2020-01-28T00:00:00Z',
					scheduled: true
				},
				{
					status: 'PENDING',
					actor: 'Lelo Desenv Ltda',
					amount: 50000,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					dateEvent: '2020-01-28T00:00:00Z',
					scheduled: true
				}
			]
		},
		{
			date: '2020-06-30',
			amountTotal: 37150,
			items: [
				{
					status: 'PENDING',
					actor: 'Lelo Desenv Ltda',
					amount: 28050,
					source: 'TRANSFER',
					type: 'INTERNAL',
					entry: 'DEBIT',
					dateEvent: '2020-01-30T00:00:00Z',
					scheduled: true
				}
			]
		}
	]
}

const buildGridItems = (data) => {
	const { results } = data
	const { gridItems, gridHead } = results.reduce(
		(prev, { items, date, amountTotal }) => {
			const gridItems = [
				...(prev.gridItems || []),
				{
					float: {
						date,
						amountTotal
					},
					body: items.map(buildRowProps)
				}
			]

			return {
				gridItems,
				gridHead: prev.gridHead || buildGridHead(date)
			}
		},
		{}
	)

	return {
		gridItems,
		gridHead
	}
}

const IndexPage = () => {
	const { gridItems, gridHead } = buildGridItems(data)

	return (
		<Grid
			GridFloatRow={GridFloatRow}
			GridRow={GridRow}
			gridItems={gridItems}
			gridHead={gridHead}
		/>
	)
}

export default IndexPage
