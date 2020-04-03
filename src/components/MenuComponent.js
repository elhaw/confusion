import React from 'react'
import { Card } from 'react-bootstrap'



function Menu(props) {


    function onCardClickEvt(evt) {
        props.onCardClick(evt);
    }

    const menu = props.dishes.map((dish) => {
        return (
            <div id={dish.id} onClick={onCardClickEvt} key={dish.id} className=" mb-4 justify-content-around cardWrapper col-12 col-md-6"  >
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


export default Menu