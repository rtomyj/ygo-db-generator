import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import copy from 'copy-to-clipboard'

const template = `
	, (
		'CARD_ID', @xyzCardColor, 'CARD_NAME', 'CARD_ATTRIBUTE',
		"CARD_EFFECT"
		, 'CARD_TYPE', CARD_ATK, CARD_DEF, 'CARD_ASSOCIATION'
	)`

export const Xyz = () =>
{
	const [modifiedTemplate, setModifiedTemplate] = useState(template)
	const [cardId, setCardId] = useState('CARD_ID')
	const [cardName, setCardName] = useState('CARD_NAME')
	const [cardAttribute, setCardAttribute] = useState('CARD_ATTRIBUTE')
	const [cardEffect, setCardEffect] = useState('CARD_EFFECT')
	const [cardType, setCardType] = useState('CARD_TYPE')
	const [cardAtk, setCardAtk] = useState('CARD_ATK')
	const [cardDef, setCardDef] = useState('CARD_DEF')
	const [cardAssociation, setCardAssociation] = useState('CARD_ASSOCIATION')


	useEffect( () => {
		setModifiedTemplate(template
			.replace('CARD_ID', cardId)
			.replace('CARD_NAME', cardName)
			.replace('CARD_ATTRIBUTE', cardAttribute)
			.replace('CARD_EFFECT', cardEffect.replace(/"/g, '""'))
			.replace('CARD_TYPE', cardType)
			.replace('CARD_ATK', cardAtk)
			.replace('CARD_DEF', cardDef)
			.replace('CARD_ASSOCIATION', `Rank ${cardAssociation}`))
	}, [cardId, cardName, cardAttribute, cardEffect, cardType, cardAtk, cardDef, cardAssociation])

	function onChange(event, setter) {
		setter(event.target.value)
	}


	return(
		<div>
			<Paper style = {{ padding: '20px' }} >
				<TextField label='Card ID' onChange={ (event) => { onChange(event, setCardId) } } />
				<TextField label='Card Name' onChange={ (event) => { onChange(event, setCardName) } } />
				<TextField label='Card Attribute' onChange={ (event) => { onChange(event, setCardAttribute) } } />
				<TextField rows='4' fullWidth multiline label='Card Effect' onChange={ (event) => { onChange(event, setCardEffect) } } />
				<TextField label='Card Type' onChange={ (event) => { onChange(event, setCardType) } } />
				<TextField label='Card Atk' onChange={ (event) => { onChange(event, setCardAtk) } } />
				<TextField label='Card Def' onChange={ (event) => { onChange(event, setCardDef) } } />
				<TextField label='Card Association' onChange={ (event) => { onChange(event, setCardAssociation) } } />
			</Paper>

			<br /><br /><br />

			<Paper style = {{ padding: '20px' }} >
				<TextField rows='6' fullWidth multiline value={ modifiedTemplate } />
				<Button onClick={ () => copy(modifiedTemplate) } >Copy To Clipboard</Button>

			</Paper>
		</div>
	)
}