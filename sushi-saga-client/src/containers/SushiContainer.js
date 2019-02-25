import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // console.log(props.belt)

  let showSushi = (sushi) => {
    return sushi.map(sushi => {
      return <Sushi sushi={sushi} eatenSushi={props.eatenSushi} eatSushi={props.eatSushi}/>
    })
  }
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          showSushi(props.belt)
        }
        <MoreButton onClick={props.moveBelt}/> //qtf!!!!!!!!!!!!!
      </div>
    </Fragment>
  )
}

export default SushiContainer
