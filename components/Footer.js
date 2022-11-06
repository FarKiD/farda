import classes from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>
          تمامی حقوق وبسایت محفوظ می‌باشد و هرگونه کپی برداری از آن مشمول برخورد
          قضایی می‌گردد.
          <span>
            تیم توسعه همراه صهبا
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;