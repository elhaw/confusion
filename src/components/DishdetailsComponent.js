import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
class DishDetails extends Component {


    render() {
        let dish = this.props.selectedDish;
        if (dish != null) {
            let getdishComments = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p><span>{`-- ${comment.author}, `}</span>
                            {new Date(comment.date).toDateString()}
                        </p>
                    </li>
                )
            })
            return (
                <div className="container">
                    <div className="row">
                        <div className="cardWrapper col-12 col-md-6 text-left">
                            <Card className="bg-dark text-light" >
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
                        <Card className="cardWrapper col-12 col-md-6 text-left p-3 commentsSection">
                            <ul className="list-unstyled">
                                <h4>Comments</h4>
                                {getdishComments}
                            </ul>
                        </Card>
                    </div>
                </div>
            )
        }
        else {
            return (
                <Fragment></Fragment>
            )
        }
    }
}
export default DishDetails;