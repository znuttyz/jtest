import React from 'react';

const Title = ({name}) => {
	return (
		<div className="titleContainer">
			<h2 className="titleHeader">{name}</h2>
			<div className="titleUnderline"></div>
		</div>
	);
}

export { Title }