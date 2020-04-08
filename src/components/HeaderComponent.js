import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'react-bootstrap'
class HeaderComponent extends Component {
    render() {
        return (
            <Fragment>
                {/* <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 text-left">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Fragment>

        )
    }
}


export default HeaderComponent