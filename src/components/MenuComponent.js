import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }

        this.onCardClick = this.onCardClick.bind(this)
        this.onDishSelect = this.onDishSelect.bind(this)
        this.renderDish = this.renderDish.bind(this)
    }
    componentDidMount() {
        // console.log('Menu component is mounted')
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

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <Card.Img className="img-fluid" src={dish.image} alt={dish.name} />
                    <Card.Body>
                        <Card.Title>
                            {dish.title}
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div id={dish.id} onClick={this.onCardClick} key={dish.id} className="  m-3 cardWrapper col-12 col-md-5"  >
                    <Card className="bg-dark"  >
                        <Card.Img className="img-fluid" src={dish.image} alt={dish.name} />
                        <Card.ImgOverlay>
                            <Card.Title className="text-left" >{dish.name}</Card.Title>
                            {/* <Card.Text>
                                {dish.description}
                            </Card.Text> */}
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
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}


export default Menu