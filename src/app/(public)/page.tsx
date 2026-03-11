import styles from "./page.module.css"
import Home from "@/app/(public)/Home"

export default function HomeServer() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Home />
      </main>
    </div>
  )
}
