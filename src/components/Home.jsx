import React from 'react'
import NavBar from './NavBar'
import Card from './Card'
import { homeStyle } from './HomeStyle'

const Home = () => {

    let pizzas = [
        { id: 1, tipo: 'Tropical', precio: '$ 8.000', img: 'https://totospizza.com.co/wp-content/uploads/2018/03/Tropical.jpg' },
        { id: 2, tipo: 'Mexicana', precio: '$ 9.000', img: 'https://www.sargento.com/assets/Uploads/Recipe/Image/702-Pizza_Mexicana__FillWzExNzAsNTgzXQ.jpg' },
        { id: 3, tipo: 'Napolitana', precio: '$ 7.500', img: 'https://cdn0.recetasgratis.net/es/posts/5/2/6/pizza_napolitana_32625_orig.jpg' },
        { id: 4, tipo: 'Pollo Champignon', precio: '$ 9.500', img: 'http://cdn.shopify.com/s/files/1/0571/4136/2868/articles/recette_four_a_pizza_giuliz_champignons_1200x1200.jpg?v=1637231266' },
        { id: 5, tipo: 'Pepperoni', precio: '$ 10.000', img: 'https://tupizzaiolo.com/wp-content/uploads/2021/07/Diseno-sin-titulo-1-min.jpg' }
    ]

    return (
        <div>
            <NavBar />
            <h1>Welcome to Pizzeria C 3</h1>
            <div style={homeStyle}>
                {
                    pizzas.map((pizza) => <Card pizza={pizza} />)
                }
            </div>
        </div>
    )
}

export default Home