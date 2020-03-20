import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }

        this.onCardClick = this.onCardClick.bind(this)
        this.onDishSelect = this.onDishSelect.bind(this)
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    onCardClick(evt) {
        let dishId = parseInt(evt.target.id)
        let selectedDish = this.props.dishes.find((dish) => {
            return dish.id === dishId
        })

        this.onDishSelect(selectedDish)
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div id={dish.id} onClick={this.onCardClick} key={dish.id} className="  m-3 cardWrapper col-12 col-md-5"  >
                    <Card className="bg-dark"  >
                        <Card.Img className="img-fluid" src={dish.image} alt={dish.name} />
                        <Card.ImgOverlay>
                            <Card.Title className="text-left" >{dish.name}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            )
        })
        return (
            <div className="container" >
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="m-3 cardWrapper col-12 col-md-5 text-left" >
                       <DishDetail dish  = {this.state.selectedDish} />
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu