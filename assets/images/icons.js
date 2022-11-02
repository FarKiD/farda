import sepahSVG from './svg/sepahBank';
import mountainsSVG from './svg/mountain';

const Icons = {
    mountains(classes) {
        return(
            mountainsSVG(classes)
        )
    },
    sepahBank() {
        return(
            sepahSVG()
        );
    }
    
}

export default Icons;