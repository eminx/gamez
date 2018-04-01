import React from 'react';
import PropTypes from 'prop-types';

const backupLink = 'https://nodal-gatherings.s3-eu-central-1.amazonaws.com/hugi@hugi.se/download.png';

const GameItem = (props) => {
	const game = props.game.attributes;

	const coverStyle = {
		backgroundImage: `url('${game.img_card_bg}')`,
		backgroundSize: 'cover',
		backgroundColor: game.img_card_avg_color, 
		padding: 10,
		height: 220,
		textAlign: 'center',
		cursor: 'pointer'
	}

	if (game) {
		return (
			<div onClick={props.onClick} className="games-item" style={{padding: 10, textAlign: 'center'}}>
				<div style={coverStyle} /> 
				<h2>{game.name}</h2>
			</div>
		);
	} else {
		return null;
	}
};

GameItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  game: React.PropTypes.object.isRequired,
}


export default GameItem;