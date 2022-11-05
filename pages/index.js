import React, { useState } from 'react';

import Head from 'next/head';

import classes from '../styles/pages/index.module.scss';

import LogoSlideshow from '../components/LogoSlideshow';
import ResumeProjects from '../components/ResumeProjects';
import Icons from "../assets/images/icons.js";

export default function Home() {
  const [state, setState] = useState({
    query: '',
    list: []
  });
  const [fetchedData, setFetchedData] = useState([]);

  fetch('/dummyData.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const fetchedData = data.brand;
    setFetchedData(fetchedData);
    return fetchedData;
  })
  .catch(err => {
    console.log(err);
  });

  const handleInputSearchFilter = (e) => {
    e.preventDefault();
    const input = e.target.value;

    const results = dummyData.filter(data => {
      if(input === "") { return data };
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setState({
      query: input,
      list: results
    }); 
  }

  return (
    <main>
      <Head>
        <title>همراه صهبا | رزومه</title>
      </Head>
      {/* SECTION 1 --- INTRO */}
      <section className={classes.intro_container}>
        <div className={classes.intro}>
          <div className={classes.intro_titles}>
            <h1 className={classes.title}>همراه صهبا</h1>
            <h2>به رزومه ما خوش آمدید</h2>
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
          <div className="col">چرا ما؟</div>
          <div className="col">چرا ما؟</div>
          <div className="col">چرا ما؟</div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className={classes.section4}>
        <div>
          <h2 className={classes.section4title}>پروژه های ما</h2>
          <input
            type="search"
            onChange={handleInputSearchFilter}
            value={state.query}
            className={classes.searchInput}
          />
          <ResumeProjects state={state} data={fetchedData} />
        </div>
      </section>
    </main>
  );
}
