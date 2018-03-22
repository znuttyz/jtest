import React from 'react';

const Nav2 = ({ items }) => {
	return (
		<ul className="navigation">
			{items.map(item => <li key={Object.values(item)}><a>{Object.values(item)}</a></li>)}
		</ul>
	);
}

export { Nav2 }

