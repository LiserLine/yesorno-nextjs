import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

const Home = () => {

  const [imageUrl, setImageUrl] = useState('https://media.giphy.com/media/GwRBmXyEOvFtK/giphy.gif');
  const [answer, setAnswer] = useState('-');
  const [isGettingAnswer, setIsGettingAnswer] = useState(false);

  function getAnswer() {

    const options = ['YES', 'NO'];

    let answer = options[(Math.floor(Math.random() * 2))];

    let url = `https://api.giphy.com/v1/gifs/search?q=${answer}&rating=g&api_key=${process.env.GIPHY_API_KEY}&offset=${getRandomIntInclusive(0, 50)}&limit=50`;
    fetch(url)
      .then((resp) => resp.json())
      .then(function (d) {
        let randomGifUrl = d.data[getRandomIntInclusive(0, 49)].images.original.url;
        setAnswer(answer);
        setImageUrl(randomGifUrl);
      });

  }

  useEffect(() => {
    setIsGettingAnswer(false);
  })

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
      

      <div className={answer === '-' ? styles.noneContainer : (answer === 'YES' ? styles.yesContainer : styles.noContainer)}>
      
        <main className={styles.main}>
          <h1 className={styles.title}>
            YES OR NO?
        </h1>
        <a href="/about">About</a>

          <p className={styles.description}>
            Press the button to get your answer!
        </p>

          <div>
            <button className={styles.btn} onClick={getAnswer}>GET MY ANSWER!</button>
          </div>

          <div>
            <h2>
              {answer}
            </h2>
          </div>

          <div className={styles.grid}>
            <img className={styles.animatedGif} src={imageUrl}></img>
          </div>

        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>

        <a href="https://github.com/LiserLine/yesorno-nextjs" target="_blank" className={styles.btn}>View on Github</a>
      </footer>
    </div>
  )
}

export default Home;