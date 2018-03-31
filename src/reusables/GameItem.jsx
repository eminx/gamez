import React from 'react';

const GameItem = (props) => (
	<div onClick={props.onClick} className="games-item">
		<h2>{props.name}</h2>
		
	</div>
);

export default GameItem;