import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import copy from 'copy-to-clipboard'

import { attributes } from './helper/Attributes'

const template = `
	, (
		'CARD_ID', @linkCardColor, 'CARD_NAME', 'CARD_ATTRIBUTE',
		"CARD_EFFECT",
		'CARD_TYPE', CARD_ATK
	)`

export const Link = () =>
{
	const [modifiedTemplate, setModifiedTemplate] = useState(template)
	const [cardId, setCardId] = useState('CARD_ID')
	const [cardName, setCardName] = useState('CARD_NAME')
	const [cardAttribute, setCardAttribute] = useState('CARD_ATTRIBUTE')
	const [cardEffect, setCardEffect] = useState('CARD_EFFECT')
	const [cardType, setCardType] = useState('CARD_TYPE')
	const [cardAtk, setCardAtk] = useState('CARD_ATK')


	useEffect( () => {
		setModifiedTemplate(template
			.replace('CARD_ID', cardId)
			.replace('CARD_NAME', cardName)
			.replace('CARD_ATTRIBUTE', cardAttribute)
			.replace('CARD_EFFECT', cardEffect.replace(/"/g, '""'))
			.replace('CARD_TYPE', cardType)
			.replace('CARD_ATK', cardAtk))
	}, [cardId, cardName, cardAttribute, cardEffect, cardType, cardAtk])


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
				<TextField rows='4' fullWidth multiline label='Card Effect' onChange={ (event) => { onChange(event.target.value, setCardEffect) } } />
				<TextField label='Card Type' onChange={ (event) => { onChange(event.target.value, setCardType) } } />
				<TextField label='Card Atk' onChange={ (event) => { onChange(event.target.value, setCardAtk) } } />
			</Paper>

			<br /><br /><br />

			<Paper style = {{ padding: '20px' }} >
				<TextField rows='6' fullWidth multiline value={ modifiedTemplate } />
				<Button onClick={ () => copy(modifiedTemplate) } >Copy To Clipboard</Button>

			</Paper>
		</div>
	)
}