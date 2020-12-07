import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

const Home = () => {

  const [imageUrl, setImageUrl] = useState('https://media.giphy.com/media/GwRBmXyEOvFtK/giphy.gif');
  const [answer, setAnswer] = useState('-');

  function getAnswer(){
    
    const options = ['YES', 'NO'];
    const errorGifUrl = 'https://media.giphy.com/media/fV1yHo8YyoKjzvMCKr/giphy.gif'; //ERROR GIF

    let answer = options[(Math.floor(Math.random() * 2))];

    let url = `https://api.giphy.com/v1/gifs/search?q=${answer}&rating=g&api_key=${process.env.GIPHY_API_KEY}&offset=${getRandomIntInclusive(0, 50)}&limit=50`;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (d) {
            let randomGifUrl = d.data[getRandomIntInclusive(0,49)].images.original.url;
            setAnswer(answer);
            setImageUrl(randomGifUrl);
        });
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  return (
    <div className={styles.container}>
      <Head>
        <title>YES OR NO?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          YES OR NO?
        </h1>

        <p className={styles.description}>
          Press the button to get your answer!
        </p>

        <div>
          <button onClick={getAnswer}>GET MY ANSWER!</button>
        </div>

        <div>
          <p>
            {answer}
          </p>
        </div>

        <div className={styles.grid}>
          <img src={imageUrl}></img>
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

export default Home;