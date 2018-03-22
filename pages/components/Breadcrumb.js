import React from 'react';

const Breadcrumb = ({ name }) => {
	return (
		<div className="breadcrumb" align="right">
			<p style={{color: 'rgba(117,117,117 ,1)', fontSize: '13px'}}>
				<a href="/">Home</a><span style={{margin: '0 7px'}}>/</span><a>{name}</a>
			</p>
		</div>
	);
}

export { Breadcrumb };