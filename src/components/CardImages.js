import logo from '../images/quote.png';
import leftBottom from '../images/leftBottom.png';
import rightTop from '../images/rightTop.png';

const CardImages = () => {
    return (
        <>
            <img src={logo} className="quote-logo" alt="" />
            <img src={leftBottom} alt="" className="left-bottom" />
            <img src={rightTop} alt="" className="right-top" />
        </>
    );
}

export default CardImages;