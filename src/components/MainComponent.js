import React, { Component, Fragment } from 'react';
import '../App.css';
import { Navbar, NavbarBrand, Card } from 'react-bootstrap'
import { DISHES } from '../shared/dishes'
import Menu from './MenuComponent'
import DishDetails from './DishdetailsComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }

    this.onCardClick = this.onCardClick.bind(this)
  }


  onCardClick(evt) {
    let dishId = parseInt(evt.target.id)
    let selectedDish = this.state.dishes.find((dish) => {
      return dish.id === dishId
    })
    this.setState({
      selectedDish: selectedDish
    })
  }

  RenderComments(dish) {

    dish = this.state.selectedDish;
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
        <Fragment></Fragment>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" >
          <div className="container">
            <NavbarBrand href="/">
              Ristorante con fusion
                </NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onCardClick={this.onCardClick} />
        <DishDetails selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}


export default MainComponent;
