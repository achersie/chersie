import React from 'react'

const productItem = (props) => {

  return (
    <div>
      <img src={ props.url } alt={ props.name }/>
      <h3>{ props.name }</h3>
      <h4>$ { props.price }</h4>
      <button onClick={ props.addToCart }>Add to Cart</button>
      
      <style jsx>{`
        div {
            float: left;
            width: 25%;
            height: 300px;
            box-shadow: 0px 0px 1px 0px #444444;
            text-align: center;
            vertical-align: middle;
            margin: 40px;
            padding: 10px
        }
        img {
            width: 225px;
        }
        h3 {
            font-weight: normal;
            margin: 10px 0px;
        }
        h4 {
            color: #800000;
            margin: 10px 0px;
        }
        button {
            border: 1px solid #444444;
            background-color: #444444;
            color: #fff;
            padding: 10px 60px;
            font-size: 12px
        }
      `} </style>
      <style global jsx>{`
        body {
            margin: 0px;
        }
      `} </style>
    </div>
  )
}

export default productItem;
