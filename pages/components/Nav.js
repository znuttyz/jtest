import React from 'react';
import Link from 'next/link';


const Nav = () => {

	return (
		<ul className="navigation">
			<li className="body-dropdown">
				<Link href="/product?name=bathbody&lang=th" ><a>BATH & BODY</a></Link>
				<div className="body-drop">
					<p><Link href="/product?name=body1&lang=th" ><a style={{padding: 0}}>Body 1</a></Link></p>
					<p><Link href="/product?name=body2&lang=th" ><a style={{padding: 0}}>Body 2</a></Link></p>
					<p><Link href="/product?name=body3&lang=th" ><a style={{padding: 0}}>Body 3</a></Link></p>
				</div>
			</li>
  			<li><Link href="/product?name=lipsbalm&lang=th" ><a>LIPS BALM</a></Link></li>
		</ul>
	);
}

export { Nav }
				// <PostLink id="Product" title="BATH & BODY"/>

				// <Link href="/Product">BATH & BODY</Link>
