import React, { useCallback, useEffect, useState } from 'react';
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
import ApartmentSVG from '../assets/images/svg/resume/apartment.svg';
import BuildingSVG from '../assets/images/svg/resume/building.svg';
import ChainSVG from '../assets/images/svg/resume/chain.svg';
import CoalSVG from '../assets/images/svg/resume/coal.svg';
import FactorySVG from '../assets/images/svg/resume/factory.svg';
import GraduationSVG from '../assets/images/svg/resume/graduation.svg';
import HealthcareSVG from '../assets/images/svg/resume/healthcare.svg';
import MosqueSVG from '../assets/images/svg/resume/mosque.svg';
import MuseumSVG from '../assets/images/svg/resume/museum.svg';
import OtherSVG from '../assets/images/svg/resume/other.svg';
import TraySVG from '../assets/images/svg/resume/tray.svg';
import VaultSVG from '../assets/images/svg/resume/vault.svg';

export default function Home() {
  const [state, setState] = useState({
    query: '',
    list: []
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    indexScript();
  }, []);
  
  // Fetch data from the database
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

  // Handles what happens when you click the categories
  const handleCategories = useCallback(async (event) => {
    let element = event.target.closest("div");
    let elementId = element.id;
   
    const getCategories = fetchedData.filter(data => {
      if(category.length < 0) { return data };
      return(data.category.includes(elementId));
    });

    const joinedArray = state.list.concat(getCategories);
    const searchBar = document.querySelector(`.${classes.searchInput}`);

    if (element.classList.contains(classes.svgActive)) {
      element.classList.remove(classes.svgActive);

      const newArr = state.list.filter(e => e.category !== elementId);
      setState({
        query: 'Remove active filters to use the search bar',
        list: newArr
      });

      if(state.list.length < 2) {
        searchBar.disabled = false;
        setState({
          query: '',
          list: []
        });
      }
    } else {
      element.classList.add(classes.svgActive);
      searchBar.setAttribute("disabled", "true");

      setState({
        query: 'Remove active filters to use the search bar',
        list: joinedArray
      })
    }
  });

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
          <div className={`${classes.filterIconsContainer1} ${classes.filterIconsContainer} row`}>
            <div id='corporations' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <ApartmentSVG />
            </div>
            <div id='mines' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <CoalSVG />
            </div>
            <div id='factories' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <FactorySVG />
            </div>
            <div id='universities' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <GraduationSVG />
            </div>
            <div id='healthcare' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <HealthcareSVG />
            </div>
            <div id='buildings' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <BuildingSVG />
            </div>
          </div>
          <div className={`${classes.filterIconsContainer2} ${classes.filterIconsContainer} row`}>
            <div id='mosques' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <MosqueSVG />
            </div>
            <div id='government' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <MuseumSVG />
            </div>
            <div id='foodIndustry' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <TraySVG />
            </div>
            <div id='banks' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <VaultSVG />
            </div>
            <div id='chainProjects' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <ChainSVG />
            </div>
            <div id='otherProjects' className={`${classes.svgFilters} col`} onClick={handleCategories}>
              <OtherSVG />
            </div>
          </div>
          <ResumeProjects state={state} data={fetchedData} category={category} />
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
