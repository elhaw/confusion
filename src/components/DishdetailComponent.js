import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class DishdetailComponent extends Component {

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <Card>
                    <Card.Img src={dish.image} alt={dish.name} />
                    <Card.Body>
                        <Card.Title>
                            {dish.name}
                        </Card.Title>
                        <Card.Text>
                            {dish.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}



export default DishdetailComponent