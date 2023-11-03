import { useState,useEffect } from "react";
import './slider.css'
const slides = [
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=497)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=291)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=786)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=768)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=726)',
    },
    {
      eachSlide: 'url(https://unsplash.it/1900/1024/?image=821)',
    }
];

const Slider = () => {
    const [active, setActive] = useState(0);
    const autoplay=1;
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });


    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * -80;
        
        return {
          width: ( slides.length *80 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
        </div> 
    ));

    const renderDots = () => slides.map((silde, index) => ( // check index
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

  

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
           
            <ul className='dots-container'>
                { renderDots() }
            </ul>
           
        </section>
    );
};

export default Slider;
