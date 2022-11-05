import sepahSVG from './icons/sepahBank';
import mountainsSVG from './icons/mountain';

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