import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'

class DishDetail extends Component {

    RenderDish(dish) {
        if (dish != null) {
            return (
                <div className="cardWrapper col-12 col-md-6 text-left">
                    <Card className = "bg-dark text-light" >
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
                </div>
            )
        }
        else {
            return (
                <Fragment></Fragment>
            )
        }
    }
    RenderComments(dish) {
        if (dish != null) {

            let getdishComments = dish.comments.map((comment) => {
                return (
                    <li key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p><span>{comment.owner}</span> {comment.date} </p>
                    </li>
                )
            })
            return (
                <Card className="cardWrapper col-12 col-md-6 text-left p-3 commentsSection">
                    <ul className="list-unstyled">
                        <h4>Comments</h4>
                        {getdishComments}
                    </ul>
                </Card>
            )
        }
        else {
            return (
                <Fragment></Fragment>
            )
        }
    }
    render() {
        return (
            <Fragment>
                {this.RenderDish(this.props.dish)}
                {this.RenderComments(this.props.dish)}
            </Fragment>
        )
    }
}

export default DishDetail