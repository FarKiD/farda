import classes from '../styles/components/Header.module.scss';

const Header = () => {
  return(
    <header className={classes.header}>
      <ul>
        <li>
          <a href="#">
            Test 1
          </a>
        </li>
        <li>
          <a href="#">
            Test 2
          </a>
        </li>
        <li>
          <a href="#">
            Test 3
          </a>
        </li>
        <li>
          <a href="#">
            Test 4
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;