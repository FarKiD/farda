import classes from "../../styles/components/LogoSlideshow.module.scss";

export default () => {
  // Scroll to projects section when you click the 'our projects' button
  const anchor = document.getElementById("projectsAnchor");
  const target = document.getElementById("projects");

  const scrollTarget = document.querySelector('body');
  const logoSlideShow = document.querySelector(`.${classes.slideshow}`);

  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    target.scrollIntoView();
  });

  scrollTarget.addEventListener('scroll', (e) => {
    let scrollPositionY = scrollTarget.scrollTop;
    logoSlideShow.style.transform = `translateX(${(scrollPositionY / 5) - 300}px)`;
  });
};
