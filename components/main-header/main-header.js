

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {


	return (
		<>
			<MainHeaderBackground />

			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image
						src={logoImg}
						alt="Foodies"
						width={150}
						height={150}
						priority
						quality={100}
					/>
					NextLevel Foodies
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>

						<li>
							<NavLink href="/community">Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
