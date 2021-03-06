import type { NextPage } from 'next'
import Head from 'next/head'

import HomePokedex from './home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800" />
      </Head>

      <main>
        <HomePokedex />
      </main>
    </div>
  )
}

export default Home
