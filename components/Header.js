import classes from '../styles/components/Header.module.scss';

const Header = () => {
  return(
    <header className={classes.header}>
      <ul>
        <li>
          <a href="#">
            فروشگاه
          </a>
        </li>
        <li>
          <a href="#">
            مناقصات
          </a>
        </li>
        <li>
          <a href="#">
            درباره ما
          </a>
        </li>
        <li>
          <a target='_blank' href="https://ostadportfolio.iran.liara.run/">
            تماس با ما
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;