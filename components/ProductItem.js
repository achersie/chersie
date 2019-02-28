import React from 'react'

import '../style.css'

const productItem = (props) => {

  return (
    <div className='prodItem-cont'>
      <img className='prodItem-img' src={ props.url } alt={ props.name }/>
      <h3 className='prodItem-name'>{ props.name }</h3>
      <h4 className='prodItem-price'>$ { props.price }</h4>
      <button className='addToCart' onClick={ props.addToCart }>Add to Cart</button>
    </div>
  )
}

export default productItem;
