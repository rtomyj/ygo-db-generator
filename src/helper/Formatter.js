let formatEffect = (effect) => {
	return effect.replace(/"/g, '""')
			.replace(/●/g, '&bull;')
}


export { formatEffect }