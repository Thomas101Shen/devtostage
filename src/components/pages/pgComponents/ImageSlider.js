import {useState} from 'react'
import React from 'react'
import Items from './demoPictures'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css'
import { Image,
		Slider,
		} from './ImageSliderStyle'
const ImageSlider = ({ slides }) => {
		
		const [display, setDisplay] = useState(0);
		const length = slides.length;

		const nextSlide = () => {
				(display === length - 1 ? setDisplay(0) : setDisplay(display + 1))
			}

		const prevSlide = () => {
				(display === 0 ? setDisplay(length - 1) : setDisplay(display - 1))
			}

		 if (!Array.isArray(slides) || slides.length <= 0) {
    		return null;
  		}
	return (
		<Slider>

		<FaArrowAltCircleLeft className='arrow left' onClick={prevSlide} />
      	<FaArrowAltCircleRight className='arrow right' onClick={nextSlide} />
		
		{Items.map((slide, index) => {
				return( 
					<div
						className={index === display ? 'slide active' : 'slide' }
						key ={index}
					>
						{index === display&& (
							<Image src={slide.image} alt='sample photo'/>
						)}
					</div>)
		})}
		</Slider>
		)}


export default ImageSlider