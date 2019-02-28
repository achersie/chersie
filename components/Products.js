import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

import { incrementCartCount} from '../store'


class Products extends Component {

    state = {
        products: [
            { id: 1234, name: 'Nike Mesh Running Shoes', imageUrl: '/static/nike/nike_1.jpg', price: 123 },
            { id: 1908, name: 'Nike Flyknit Lunar 2', imageUrl: '/static/nike/nike_2.jpg', price: 116 },
            { id: 1222, name: 'Nike Flyknit Lunar 2s', imageUrl: '/static/nike/nike_3.jpg', price: 110 },
            { id: 6976, name: 'Nike Air Max 1 Ultra 2.0', imageUrl: '/static/nike/nike_4.jpg', price: 140 },
            { id: 2443, name: 'Adidas Adizero Ubersonic 3 Clay Coral', imageUrl: '/static/adidas/adidas_1.jpg', price: 113 },
            { id: 9560, name: 'Adidas Women GSG9 Trail', imageUrl: '/static/adidas/adidas_2.jpg', price: 179 },
            { id: 8246, name: 'Adidas Terrex Agravic Trail', imageUrl: '/static/adidas/adidas_3.jpg', price: 121 },
            { id: 7832, name: 'Adidas Women Terrex Skychaser', imageUrl: '/static/adidas/adidas_4.jpg', price: 168 },
        ]
    }

    increment = (product) => {
        const { dispatch } = this.props
        dispatch (incrementCartCount(product))
    }

    render() {
        let products = this.state.products.map( product => {
            return <ProductItem key = { product.id } 
                                name = { product.name } 
                                url = { product.imageUrl } 
                                price = { product.price } 
                                addToCart = { () => this.increment(product) }/>
        });

        return (
            <div>
                <div className="container">
                    { products }  
                </div>
        
                <style jsx>{`
                .container {
                padding: 50px;
                text-align: center;
                }
                `}</style>
            </div>
        )
    }
}

export default connect()(Products);
