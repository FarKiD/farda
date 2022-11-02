import Icons from '../assets/images/icons';

import classes from '../styles/components/LogoSlideshow.module.scss';

const LogoSlideshow = () => {
    let key = 1;

    const logos = [
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank,
        Icons.sepahBank
    ];

    const renderLogos = logos.map((logo) => {
        key++;
        return (
            <li key={key + 'slideShowListItemKey'}>
                {logo(`${classes.icon} img-fluid`)}
            </li>
        );
    });

    return(
        <ul className={classes.slideshow}>
            {renderLogos}
        </ul>
    );
};

export default LogoSlideshow;