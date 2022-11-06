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


export default function Home() {
  const [state, setState] = useState({
    query: '',
    list: []
  });
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    indexScript();
  })

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

    const results = fetchedData.filter(data => {
      if(input === "") { return data };
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setState({
      query: input,
      list: results
    }); 
  }

  // ? consider turning each section into seperate components
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
              همراه صهبا با 23  سال سابقه، مطمئن ترین شرکت در زمینه امنیت می‌باشد
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
          />
          <div className='row'>
            <div className='col'>1</div>
            <div className='col'>2</div>
            <div className='col'>3</div>
            <div className='col'>4</div>
            <div className='col'>5</div>
            <div className='col'>6</div>
          </div>
          <div className='row'>
            <div className='col'>1</div>
            <div className='col'>2</div>
            <div className='col'>3</div>
            <div className='col'>4</div>
            <div className='col'>5</div>
            <div className='col'>6</div>
          </div>
          <ResumeProjects state={state} data={fetchedData} />
        </div>
      </section>
      {/* SECTION 5 --- OUTRO */}
      <section className={classes.section5}>
        <div className={`${classes.infoContainer} row`}>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <LocationOnOutlinedIcon />
            </div>
            <div>
              <h5>
                آدرس
              </h5>
              <p>
                تهران، خیابان سهرودی شمالی، چهارراه میرزایی زینالی شرقی، پلاک ۵۴، واحد ۹، طبقه سوم  
              </p>
            </div>
          </div>
          <div className={`${classes.info} col`}>
            <div className={classes.infoIconContainer}>
              <EmailOutlinedIcon />
            </div>
            <div>
              <h5>
                ایمیل
              </h5>
              <p>
                <a href='mailto:info@sahba.shop'>
                  info@sahba.shop
                </a>
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
                021 - 22255495
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
}
