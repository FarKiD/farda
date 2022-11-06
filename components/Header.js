import classes from '../styles/components/Header.module.scss';

const Header = () => {
  return(
    <header className={classes.header}>
      <ul>
        <li>
          <a href="https://sahba.shop">
            فروشگاه
          </a>
        </li>
        <li>
          <a href="https://sahba.shop/tenders/">
            مناقصات
          </a>
        </li>
        <li>
          <a href="https://sahba.shop/about/">
            درباره ما
          </a>
        </li>
        <li>
          <a href="https://sahba.shop/contact/">
            تماس با ما
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;