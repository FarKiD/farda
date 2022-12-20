import classes from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>
          تمامی حقوق وبسایت آزاد می‌باشد و هرگونه کپی برداری از آن بلامانع است.
          <span>
            وبسایت از سجاد استادابراهیم
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;