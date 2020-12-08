import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const About = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.noneContainer}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            About
          </h1>
          <a href="/">Home</a>

          <p className={styles.description}>
            Tired of picking the wrong choice? Tired of humans giving you the answer? Tired of having to take off heads or tails?
            <br />
            <strong>Then, this app is your solution!</strong>
            <br/>
            <img src="https://media.giphy.com/media/DffShiJ47fPqM/giphy.gif" />

            <br />
            Here the power of the <em>randomness</em> will help you in your decisions using the most advanced technology.
            <br/>
            We guarantee that you are going to have a true 50% chance of a YES and a true 50% chance of a NO!
            <br/> 
            We also provide this service for free, beign available 365 days per year without interruption*!
            <br />
            <br />
            <strong><em>Stop having problems caused by human decisions. Go with "YES OR NO?"!</em></strong>
          </p>

          <h6><em>*For tech people, this is equal to 100% SLA</em></h6>

          <a href="/">I WANT MY ANSWER!</a>

        </main>
      </div>

    </div>
  );
}

export default About;