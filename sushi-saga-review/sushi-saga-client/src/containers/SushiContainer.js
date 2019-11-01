import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startPoint: 0 
  }
  
  renderSushi = () => {
    return this.props.sushis.map((sushi, i) => <Sushi eatSushi={this.props.eatSushi} key={i} {...sushi}/>)
    // <Sushi key={i} {...sushi}/> means each Sushi component will have props name, img_url, price  (every key that exists on a sushi)
    // <Sushi key={i} sushiProp={sushi}/> each Sushi component only gets one prop ==> sushiProp
  }

  moreSushi = () => {
    this.setState({
      startPoint: this.state.startPoint + 4
    })
  }

  render(){
    let allSushis = this.renderSushi() 
    let currentPage = allSushis.slice(this.state.startPoint, this.state.startPoint + 4)
    return (
      <Fragment>
        <div className="belt">
          { //Render Sushi components here!
            currentPage
          }
          <MoreButton moreSushi={this.moreSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer


// sushiContainer class has a state { startPoint: 0 }. When button is clicked, it adds 4 to startPoint. Slice props.sushis before map
// 
// function in sushicontainer moreSushi setState startpoint + 4. pass func down to morebutton as prop. onclick call function 