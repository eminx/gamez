import React from 'react';

const GameItemDetailed = ({item, onClose}) => {
	const style = {
		position: 'fixed',
		top: 20,
		left: 20,
		right:20,
		backgroundColor: item.attributes.img_card_avg_color,
		height: '100%',
		color: '#fff'
	};

	return (
		<div style={style}>
			<span onClick={onClose} style={{position: 'absolute', top: 40, right: 40}}>close</span>
			<h2>{item.attributes.name}</h2>
			<div dangerouslySetInnerHTML={{__html: item.attributes.description}}></div>
		</div>
	);
};

export default GameItemDetailed;