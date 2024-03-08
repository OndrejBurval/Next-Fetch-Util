import styles from "./page.module.css";
import List from "@/components/List";
import { Suspense } from "react";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Suspense fallback={<div>Loading...</div>}>
					<List />
				</Suspense>
			</div>
		</main>
	);
}
