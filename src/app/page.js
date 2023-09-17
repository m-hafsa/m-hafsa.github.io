import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className={styles.main}>
          CS-PARADIGMS
        </h1>
	<h2>
	  <Link href="/about">hello</Link>
	</h2>
      </div>
    </main>
  )
}
