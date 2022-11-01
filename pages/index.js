import classes from '../styles/pages/index.module.scss';
import Icons from "../assets/images/mountains.js";

export default function Home() {
  return (
    <main>
      <section className={classes.intro_container}>
        <div className={classes.intro}>
          <div className={classes.intro_titles}>
            <h1>
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
        <div>
        {Icons.mountains('img-fluid')}
        </div>
      </section>
      <section>
        This is section two
      </section>
    </main>
  )
}
