import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://colin-m-thompson.com" target="_blank">Colin's</a> <a href="https://reactjs.org" target="_blank">React</a> Playground
        </h1>


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/dropdown" target="_blank" className={styles.card}>
            <h3>Dropdown &rarr;</h3>
            <p>Example of an accessible dropdown</p>
          </a>
          <a href="/search" target="_blank" className={styles.card}>
            <h3>Product Search &rarr;</h3>
            <p>How to think in React</p>
          </a>
          <a href="/containment" target="_blank" className={styles.card}>
            <h3>Containment &rarr;</h3>
            <p>Components can display arbitrary children</p>
          </a>
          <a href="/temperature" target="_blank" className={styles.card}>
            <h3>Temperature &rarr;</h3>
            <p>Demonstrates lifting state</p>
          </a>
          <a href="/map" target="_blank" className={styles.card}>
            <h3>Map &rarr;</h3>
            <p>Displays information in an array</p>
          </a>
          <a href="/events" target="_blank" className={styles.card}>
            <h3>Events &rarr;</h3>
            <p>Toggle button using events</p>
          </a>
          <a href="/clock" target="_blank" className={styles.card}>
            <h3>Clock &rarr;</h3>
            <p>Showing Mount and Unmount Methods</p>
          </a>
          <a href="/tictactoe" target="_blank" className={styles.card}>
            <h3>Tic Tac Toe &rarr;</h3>
            <p>A React Starter Project</p>
          </a>
        
          <a href="https://nextjs.org/docs" target="_blank" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" target="_blank" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            target="_blank" className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank" className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
