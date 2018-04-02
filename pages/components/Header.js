import React from 'react';

const Header = ({ lang, onHandle }) => {

	const langBar = () => {
		if(lang === "en") {
			return (
				<ul className="language">
					<li><a onClick={() => onHandle('th')}>th</a></li>
					<li><a><strong>en</strong></a></li>
				</ul>
			)
		} else if(lang === "th") {
			return (
				<ul className="language">
					<li><a><strong>th</strong></a></li>
					<li><a onClick={() => onHandle('en')}>en</a></li>
				</ul>
			)
		}
	}

	return (
		<div className="headerContainer">
			<div className="headerBox"></div>
			<div className="headerBox">
				<a href="/">GEMS & JEWELRY</a>
			</div>
			<div className="headerBox">
				{langBar()}
			</div>
		</div>
	);
}

export { Header };
