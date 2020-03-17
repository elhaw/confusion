import React, { Component } from 'react'
import { Media } from 'react-bootstrap'

class Menu extends Component {

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Media className = "text-left my-3 p-4 dishWrapper" as="li" key={dish.id}>
                    <img

                        className="mr-3"
                        src={dish.image}
                        alt={dish.name}
                    />
                    <Media.Body>
                        <h5>{dish.name}</h5>
                        <p>
                            {dish.description}
                        </p>
                    </Media.Body>
                </Media>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <ul className="list-unstyled">
                        {menu}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Menu