import React from 'react';

const styles = {
	imgStyle: {
		width: '100%'
	},
	absoluteStyle: {
		position: 'absolute',
		top: '14%',
		left: '34%',
		color: 'white',
		fontSize: '4vw',
		fontWeight: 'bold'
	},
	absoluteStyle2: {
		position: 'absolute',
		top: '29%',
		left: '40%',
		fontSize: '1.5vw',
		color: 'white'
	}
}

const Banner = (props) => {
	return (
		<div style={{'position':'relative'}}>
			<img src={props.source} style={styles.imgStyle} alt="banner"/>
			<p style={styles.absoluteStyle}>Natural & Organic</p>
			<p style={styles.absoluteStyle2}>We Care About Our Ingredients</p>
		</div>
	);
}

export { Banner }