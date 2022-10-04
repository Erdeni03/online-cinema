import { FC } from 'react'

import SlideArrow from '@/ui/slider/SlideArrow/SlideArrow'
import SlideItem from '@/ui/slider/SlideItem'
import { ISlide } from '@/ui/slider/slider.interface'
import { useSlider } from '@/ui/slider/useSlider'

import styles from './Slider.module.scss'

interface ISlider {
  buttonTitle?: string
  slides: ISlide[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
  const { handleClick, index, isNext, isPrev, slideIn } = useSlider(slides.length)

  return (
    <div className={styles.slider}>
      {isPrev && <SlideArrow variant="left" clickHandler={() => handleClick('prev')} />}
      {/*<CSSTransition in={slideIn} timeout={300} classNames="slide-animation" unmountOnExit>*/}
      <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
      {/*</CSSTransition>*/}
      {isNext && <SlideArrow variant="right" clickHandler={() => handleClick('next')} />}
    </div>
  )
}

export default Slider
