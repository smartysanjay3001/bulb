import { Component }  from 'react'
import './bulb.css'
import off from'./images/off.png'
import on from './images/on.png'






class Bulb extends Component{
     constructor(){
      super()
      this.state={status:off}
      this.on=this.bulbOn.bind(this)
      this.off=this.componentDidMount.bind(this)

     }
     bulbOn(){
        this.setState({status:on})
     }
     componentDidMount(){
        this.setState({status:off})
     }



    render(){
      

        return(

            <>
            <div className='container'>
              <div className="box">
                <div className="light">
                    <img src={this.state.status} alt="" />
                </div>
              <div className="button">
                <button onClick={this.on}>ON</button>
                <button onClick={this.off}>OFF</button>
              </div>
              </div>

            </div>

            </>
        )
    }
}
export default Bulb;