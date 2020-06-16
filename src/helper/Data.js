import axios from "axios"

const baseUrl = 'http://localhost:9999'

const getMonsterTypesByCardColor = (cardColor, stateMethod) =>
{
	axios.get(`${baseUrl}/api/v1/card/stats/monster_type/${cardColor}`)
			.then(res => {
				stateMethod(Object.keys(res.data.monsterTypes))
			})
}


const getAllCardsInDb = (cardContentStateMethod, isFetchingStateMethod) =>
{
	axios.get(`${baseUrl}/api/v1/card/search`)
	.then(res => {
		let cardNames = []

		res.data.forEach(item => {
			cardNames.push(item.cardName)
		})
		cardContentStateMethod(cardNames)
		isFetchingStateMethod(false)
		console.log(cardNames)
	})
}


export {
	getMonsterTypesByCardColor
	, getAllCardsInDb
}