import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'


function RenderDish({ dish }) {

    if (dish != null) {
        return (

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
        )
    }
    else {
        return (
            <Fragment>
            </Fragment>
        )
    }
}

function RenderComments({ dish }) {
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
            <Fragment>
            </Fragment>
        )
    }
}

function DishDetails({ selectedDish }) {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <RenderDish dish={selectedDish} />
                    <RenderComments dish={selectedDish} />
                </div>
            </div>
        </Fragment>

    )

}
export default DishDetails;