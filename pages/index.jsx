import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>Go Together</title>
        <meta name="description" content="Design by Rubiyet Fardous" />
        <link rel="icon" href="/11.png" />
      </Head>

      <Login />

    </div>
  )
}
