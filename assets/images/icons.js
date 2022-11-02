import sepahSVG from './svg/sepahBank';
import mountainsSVG from './svg/mountain';

const Icons = {
    mountains(classes) {
        return(
            mountainsSVG(classes)
        )
    },
    sepahBank(classes) {
        return(
            sepahSVG(classes)
        );
    }
    
}

export default Icons;