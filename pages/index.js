import Head from 'next/head';

import classes from '../styles/pages/index.module.scss';

import LogoSlideshow from '../components/LogoSlideshow';
import Icons from "../assets/images/icons.js";

export default function Home() {
  return (
    <main>
      <Head>
        <title>همراه صهبا | رزومه</title>
      </Head>
      {/* SECTION 1 --- INTRO */}
      <section className={classes.intro_container}>
        <div className={classes.intro}>
          <div className={classes.intro_titles}>
            <h1 className={classes.title}>
              همراه صهبا
            </h1>
            <h2>
              به رزومه ما خوش آمدید
            </h2>
          </div>
          <div className={classes.intro_content}>
            <p>
            رزومه وبسیات صهبا رزومه وبسیات صهبا رزومه وبسیات صهبا رزومه
            <br />
            وبسیات صهبا رزومه وبسیات صهبا
            <br />
            رزومه وبسیات صهبا رزومه وبسیات صهبا رزومه وبسیات صهبا  
            </p>
            <div className={`h3 ${classes.intro_buttons}`}>
              <a>Click Here</a>
              <a>Click Here</a>
            </div>
          </div>
        </div>
        <div className={`${classes.mountains}`}>
          {Icons.mountains(`img-fluid`)}
        </div>
      </section>
      {/* SECTION 2 --- SLIDESHOW */}
      <section className={classes.section2}>
          <LogoSlideshow />
      </section>
      {/* SECTION 3 */}
      <section className={classes.section3}>
        <div className={`${classes.whyUs} row`}>
          <div className='col'>چرا ما؟</div>
          <div className='col'>چرا ما؟</div>
          <div className='col'>چرا ما؟</div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section>
        <h1>SECTION 4</h1>
      </section>
    </main>
  )
}
