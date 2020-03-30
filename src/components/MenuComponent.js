import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.onCardClickEvt = this.onCardClickEvt.bind(this)
    }

    onCardClickEvt(evt) {
        this.props.onCardClick(evt)
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div id={dish.id} onClick={this.onCardClickEvt} key={dish.id} className=" mb-4 justify-content-around cardWrapper col-12 col-md-6"  >
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
            </div>
        )
    }
}


export default Menu