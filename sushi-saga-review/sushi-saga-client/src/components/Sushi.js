import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.id, props.price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi


// eating sushi strategies
// changing sushi to a class so it has state { eaten: false } onClick if/else change it to true
// in App had a conditional 