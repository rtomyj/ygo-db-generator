import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import copy from 'copy-to-clipboard'

import { formatEffect } from '../helper/Formatter'
import { attributes } from './helper/Attributes'


const template = `
	, (
		'CARD_ID', @pendulumCardColor, 'CARD_NAME', 'CARD_ATTRIBUTE',
		"CARD_EFFECT",
		'CARD_TYPE', CARD_ATK, CARD_DEF, 'CARD_LEVEL'
	)`

export const PendulumEffect = () =>
{
	const [modifiedTemplate, setModifiedTemplate] = useState(template)
	const [cardId, setCardId] = useState('CARD_ID')
	const [cardName, setCardName] = useState('CARD_NAME')
	const [cardAttribute, setCardAttribute] = useState('CARD_ATTRIBUTE')
	const [cardEffect, setCardEffect] = useState('CARD_EFFECT')
	const [cardType, setCardType] = useState('CARD_TYPE')
	const [cardAtk, setCardAtk] = useState('CARD_ATK')
	const [cardDef, setCardDef] = useState('CARD_DEF')
	const [cardLevel, setCardLevel] = useState('CARD_LEVEL')
	const [leftScale, setLeftScale] = useState('LEFT_SCALE')
	const [rightScale, setRightScale] = useState('RIGHT_SCALE')


	useEffect( () => {
		setModifiedTemplate(template
			.replace('CARD_ID', cardId)
			.replace('CARD_NAME', cardName)
			.replace('CARD_ATTRIBUTE', cardAttribute)
			.replace('CARD_EFFECT', formatEffect(cardEffect))
			.replace('CARD_TYPE', cardType)
			.replace('CARD_ATK', cardAtk)
			.replace('CARD_DEF', cardDef)
			.replace('CARD_LEVEL', `Level ${cardLevel} : LS=${leftScale} : RS=${rightScale}`))
	}, [cardId, cardName, cardAttribute, cardEffect, cardType, cardAtk, cardDef, cardLevel, leftScale, rightScale])


	function onChange(value, setter) {
		setter(value)
	}


	return(
		<div>
			<Paper style = {{ padding: '20px' }} >
				<TextField label='Card ID' onChange={ (event) => { onChange(event.target.value, setCardId) } } />
				<TextField label='Card Name' onChange={ (event) => { onChange(event.target.value, setCardName) } } />
				<Autocomplete
					label='Card Attribute'
					options={ attributes }
					getOptionLabel={ (option) => option }
					renderInput={ (params) => <TextField {...params} label="Card Attribute" /> }
					autoSelect
					autoHighlight
					onChange={ (event, value) => { onChange(value, setCardAttribute) } }
				/>
				<TextField
					rows='4'
					fullWidth
					multiline
					label='Card Effect'
					onChange={ (event) => { onChange(event.target.value, setCardEffect) } }
				/>
				<TextField label='Card Type' onChange={ (event) => { onChange(event.target.value, setCardType) } } />
				<TextField label='Card Atk' onChange={ (event) => { onChange(event.target.value, setCardAtk) } } />
				<TextField label='Card Def' onChange={ (event) => { onChange(event.target.value, setCardDef) } } />
				<TextField label='Card Level' onChange={ (event) => { onChange(event.target.value, setCardLevel) } } />
				<TextField label='Left Scale' onChange={ (event) => { onChange(event.target.value, setLeftScale) } } />
				<TextField label='Right Scale' onChange={ (event) => { onChange(event.target.value, setRightScale) } } />
			</Paper>

			<br /><br /><br />

			<Paper style = {{ padding: '20px' }} >
				<TextField rows='6' fullWidth multiline value={ modifiedTemplate } />
				<Button onClick={ () => copy(modifiedTemplate) } >Copy To Clipboard</Button>

			</Paper>
		</div>
	)
}