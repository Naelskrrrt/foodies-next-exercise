// Date: 03/20/2021

import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
	const meals = await getMeals();

	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious Meals, created
					<span className={classes.highlight}> by you</span>
				</h1>
			</header>
			<p>
				Choose your favorite recipe and cook it yourself. It ease and
				fun
			</p>
			<p className={classes.cta}>
				<Link href="/meals/share">Share your favorite recipe</Link>
			</p>
			<main className={classes.main}>
				<MealsGrid meals={meals} />
			</main>
		</>
	);
}
