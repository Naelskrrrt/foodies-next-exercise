"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./main-header.module.css"

const NavLink = ({ href, children }) => {
	let pathname = usePathname();
	return (
		<>
			<Link
				href={href}
				className={pathname.startsWith(href) ? classes.active : undefined}
			>
				{children}
			</Link>
		</>
	);
};

export default NavLink;
