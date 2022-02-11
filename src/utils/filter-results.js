const handleFilterByEntry =
	(value) =>
		({ entry }) =>
			entry.toLowerCase() === value

const handleFilterByScheduled = ({ scheduled }) => scheduled

const handleNoFilter = (data) => data

const handleFilterBySearchTerm = (payload) => ({ actor, amount }) => {
	const whitelist = [actor, amount]
	return whitelist.some((value) => String(value).toLocaleLowerCase().includes(payload.toLowerCase()))
}

const filterCriteriaCallback = (value, payload) => {
	return (
		{
			debit: handleFilterByEntry(value),
			credit: handleFilterByEntry(value),
			scheduled: handleFilterByScheduled,
			search: handleFilterBySearchTerm(payload),
			all: handleNoFilter
		}[value] || filterCriteriaCallback('all')
	)
}

export const filterResults = (data, value, payload) => {
	const { results } = data || {}

	if (!results) return {}

	const filteredResults = results.reduce((prev, { items, ...restResult }) => {
		const filteredItems = items.filter(filterCriteriaCallback(value, payload))

		if (!filteredItems.length) return prev

		return [
			...prev,
			{
				...restResult,
				items: filteredItems
			}
		]
	}, [])

	return {
		...data,
		results: filteredResults
	}
}
