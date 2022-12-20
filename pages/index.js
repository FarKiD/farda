import path from 'path';
import fs from 'fs/promises';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import LogoSlideshow from '../components/LogoSlideshow';
import ResumeProjects from '../components/ResumeProjects';

import classes from '../styles/pages/index.module.scss';

import indexScript from '../assets/js/index';
import Icons from "../assets/images/icons.js";
import PenPaperSVG from '../assets/images/svg/resume/penPaper.svg';
import PhoneSVG from '../assets/images/svg/resume/phone.svg';
import HeartSVG from '../assets/images/svg/resume/heart.svg';

export default function Home({ data }) {
  const [state, setState] = useState({
    query: '',
    list: []
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    indexScript();
    setFetchedData(data.brand);
  }, []);


  const handleInputSearchFilter = (e) => {
    e.preventDefault();
    const input = e.target.value;

    const getNames = fetchedData.filter(data => {
      if(input === "") { return data };
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setState({
      query: input,
      list: getNames
    }); 
  }

  // ? consider turning each section into seperate components
  return (
    <main className='main'>
      <Head>
        <title>همراه فردا | رزومه</title>
      </Head>
      {/* SECTION 1 --- INTRO */}
      <section className={classes.intro_container}>
        <div className={classes.intro}>
          <div className={classes.intro_titles}>
            <h1 className={classes.title}>همراه فردا</h1>
            <h2>مکانی که در آن...</h2>
          </div>
          <div className={classes.intro_content}>
            <p>
              ...تمامی نیاز های امنیتی شما اعم از دوربین های مدار بسته،
              <br />
              نصب و راه اندازی آنها و فروش تمامی تجهیزات مرتبط با آن ها را
              <br />
              به آسانی برای شما فراهم می‌نماییم.
            </p>
            <div className={`h3 ${classes.intro_buttons}`}>
              {/* TODO: change to next/link */}
              <a>فروشگاه</a> 
              <a id='projectsAnchor'>پروژه های ما</a>
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
          <div className="col">
            <h4>متعهد <HeartSVG /></h4>
            <p>
              همراه فردا با بیش از 20 سال سابقه، مطمئن ترین شرکت در زمینه امنیت می‌باشد
            </p>
          </div>
          <div className="col">
            <h4>گارانتی بلاشرط <PenPaperSVG /></h4>
            <p>
              تهیه گارانتی های 12،  ماهه، 24 ماهه و 24 ماهه بلاشرط
            </p>
          </div>
          <div className="col">
            <h4>خرید آسان <PhoneSVG /></h4>
            <p>
              ما خرید ابزار های امنیتی را برای مشتریان خود آسان کرده ایم
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section id='projects' className={classes.section4}>
        <div>
          <h2 className={classes.section4title}>پروژه های ما</h2>
          <input
            type="search"
            onChange={handleInputSearchFilter}
            value={state.query}
            className={classes.searchInput}
            placeholder="جستجو کنید"
          />
          <ResumeProjects state={state} data={fetchedData} category={category} />
        </div>
      </section>
      {/* SECTION 5 --- OUTRO */}
      <section className={classes.section5}>
        <div className={`${classes.infoContainer} row`}>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <EmailOutlinedIcon />
            </div>
            <div>
              <h5>
                ایمیل
              </h5>
              <p>
                <a href='mailto:sajjad.ostadebrahim@gmail.com'>
                  sajjad.ostadebrahim@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <LocationOnOutlinedIcon />
            </div>
            <div>
              <h5>
                آدرس
              </h5>
              <p>
                تهران، خیابان شمالی، چهارراه شرقی، پلاک 99، واحد 0، طبقه 2
              </p>
            </div>
          </div>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <PhoneCallbackOutlinedIcon />
            </div>
            <div className={classes.telephone}>
              <h5>
                تلفن
              </h5>
              <p>
                021 - 99999999
              </p>
            </div>
          </div>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <CalendarMonthOutlinedIcon />
            </div>
            <div>
              <h5>
                ساعات کاری
              </h5>
              <p>
                شنبه تا چهارشنبه، 9 الی 16
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  // Fetch data from the database
  // const res = await fetch('http://localhost:3000/dummyData.json');
  const filePath = path.join(process.cwd(), 'assets', 'data', 'dummyData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      data
    }
  };
};
