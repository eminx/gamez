import React from 'react';
import PropTypes from 'prop-types';

const GameItemDetailed = ({item, onClose}) => {
	let modalOverlay = 'modal-overlay ';
	if (item) {
		modalOverlay += 'isActive'
	}

	const style = {
		backgroundImage: item ? `url('${item.attributes.img_card_bg}')` : null,
		height: 240,
		backgroundSize: 'contain',
	}

	return (
		<div className={modalOverlay} >
			<div className="modal clearfix" style={{backgroundColor: item ? item.attributes.img_card_avg_color : null,}}>
				{item 
					?
						<div>
							<span onClick={onClose} style={{position: 'absolute', top: 40, right: 40, cursor: 'pointer'}}>X</span>
							<div style={style} />
							<h2>{item.attributes.name}</h2>
							<div dangerouslySetInnerHTML={{__html: item.attributes.description}}></div>
							<div style={{display: 'flex', justifyContent: 'center'}}>
								<video width="400" controls>
								  <source src={item.attributes.video_sources[0]} type="video/webm" />
								  <source src={item.attributes.video_sources[1]} type="video/mp4" />
								  <p>Your browser does not support HTML5 video.</p>
								</video>
							</div>
						</div>
					: null
				}
			</div>
		</div>
	);
}

GameItemDetailed.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
}

export default GameItemDetailed;