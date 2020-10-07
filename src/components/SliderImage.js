import React from 'react'

const SliderImage = (props) => {
  return (
    <img-comparison-slider className="image-slider">
      <img className="custom-cover-image" slot="before" src={ props.img_before } alt="img" />
      <img className="custom-cover-image" slot="after" src={ props.img_after } alt="img" />
    </img-comparison-slider>
  )
}

export default SliderImage