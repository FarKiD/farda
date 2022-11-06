import classes from '../../styles/pages/index.module.scss';

export default () => {
    // Scroll to projects section when you click the 'our projects' button
    const anchor = document.getElementById("projectsAnchor");
    const target = document.getElementById("projects");
    const svgFilterElement = document.querySelector(`.${classes.filterIconsContainer}`);

    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      target.scrollIntoView();
    });

    // svgFilterElement.addEventListener("click", (event) => {
    //     let element = event.target.closest('div');

    //     console.log('yes');
    //     element.classList.add(classes.svgActive);
    // });

    // $(`.${classes.filterIconsContainer} div`).click((event) => {
        
        
    //     console.log(element.classList.contains('col'));

    //     if(elementId.hasClass(classes.svgActive)) {
    //         elementId.removeClass(classes.svgActive);
    //     } else {
    //         elementId.addClass(classes.svgActive);
    //     }
    // });
};



/*

import $ from 'jquery';
import classes from '../../styles/pages/index.module.scss';

export default () => {
    var $container = $(`.${classes.drone_container}`);
    var $drone = $(`.${classes.drone}`);
    // var $menuItem = $(`.${classes.menu_item}`);
    var droneCenter = {
        x: $drone.width() / 2,
        y: $drone.height() / 2
    };

    var containerCenter = {
        x: $container.width() / 2,
        y: $container.height() / 2
    };

    $drone.css('transform', `translate3d(${containerCenter.x - 10}px, ${containerCenter.y - 10}px, 0)`);

    $container.on('mousemove', function(event) {
        $drone.css('transform', `translate3d(${event.offsetX - droneCenter.x}px, ${event.offsetY - droneCenter.y}px, 0)`);
    });


    $container.on('mouseout', function(event) {
        $drone.css('transform', `translate3d(${containerCenter.x}px, ${containerCenter.y}px, 0)`);
    });
}

*/