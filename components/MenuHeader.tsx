import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const MenuHeader = () => {
	return (
		<div className="w-full text-center">
			<ul className="menu-list font-semibold text-lg flex gap-3 justify-center">
				<li>
					<Link href={'/'}> Home</Link>
				</li>
				<li>|</li>
				<li>
					<Link href={'/product/create'}>New Product</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuHeader;
