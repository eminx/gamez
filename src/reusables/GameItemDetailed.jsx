import React from 'react';

const style = {
	position: 'fixed',
	top: 20,
	left: 20,
	right:20,
	backgroundColor: '#030303',
	height: '100%',
	color: '#fff'
}

const GameItemDetailed = ({item}) => (
	<div style={style}>
		<h2>{item.attributes.name}</h2>
		<div dangerouslySetInnerHTML={{__html: item.attributes.description}}></div>
	</div>
);

export default GameItemDetailed;