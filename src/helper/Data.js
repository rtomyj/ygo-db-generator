import axios from "axios"

const baseUrl = 'http://localhost:9999'

const getMonsterTypesByCardColor = (cardColor, stateMethod) =>
{
	axios.get(`${baseUrl}/api/v1/card/stats/monster_type/${cardColor}`)
			.then(res => {
				stateMethod(Object.keys(res.data.monsterTypes))
			})
}


export {
	getMonsterTypesByCardColor
}