import React from 'react';

const Footer = (footers) => {
	return (
		<div className="pageBreak">
			<div className="footer">

				<div className="footerContainer">
					<img src="/static/img/bonn-logo.png" width="130" alt="logo"/>
				</div>

				<div className="footerContainer">
					<div className="footerIcon">
						<a href="https://www.facebook.com/nuttapon.phannurat" target="_blank" rel="noopener noreferrer"><img src="/static/img/icon/fb.jpeg" alt="social"/></a>
					</div>
					<div className="footerIcon">
						<a href="https://www.instagram.com/znuttyz" target="_blank" rel="noopener noreferrer"><img src="/static/img/icon/ig.jpeg" alt="social"/></a>
					</div>

					<div className="footerIcon">
						<a href="mailto:n.phannurat@gmail.com"><img src="/static/img/icon/mail.jpg" alt="social"/></a>
					</div>
				</div>

				<div className="footerContainer">
					<ul className="footerNav">	
						{footers.footers.map(item => <li key={item}><a>{item}</a></li>)}
					</ul>
				</div>

				<div className="footerContainer">
					<p>&copy; PHANNURAT Gems & Jewelry. All Rights Reserved.</p>
				</div>

			</div>
		</div>
	);
}

export { Footer }
