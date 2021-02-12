// import React, { Component } from 'react'

// export default class App extends Component {
// state ={
//   count: 0 ,
//   name:"rafik"
// }
// increment = () =>
//  {
//   this.setState({count :this.state.count += 1})
//  }

//  decrement = () =>{

//   this.setState({count :this.state.count -= 1} )
 
//  }
//  handleChange =(e)=>{
//    this.setState({name:e.target.value})
//  }
//   render() {
//     return (
//       <div>
//         <button onClick={this.increment} > +</button>
//         <span>{this.state.count}</span>

//         <button onClick={this.decrement}>-</button>

//         <br/>

//         <input type="text" placeholder="enter your name " onChange={this.handleChange}/> <span>{this.state.name}</span>
        
//       </div>
//     )
//   }
// }


//***********************RCC TIMER ******************* */

// import React, { Component } from 'react'

// export default class App extends Component {
//   state={
//     time: 0 ,
//   }

//   tickHandler = ()=>{
//    this.setState({
//      time:this.state.time + 1
//    })
//    return this.state.time ;
//   }
//   componentDidMount(){
//     var timer = setInterval(this.tickHandler , 1000)
//     this.setState({
//       time:timer
//     })
//   }


//   render() {
//     const displaytime =()=> {

//       if (this.state.time < 60 ){
//         return this.state.time +'Second(s)'
//       }
//       {
//         const SS =this.state.time % 60 ;
//         const MM = ((this.state.time / 60) % 60).toFixed(0) ;
//         const HH = ((this.state.time / (60*60))).toFixed(0) ;
//         return `${HH}H:${MM}M:${SS}`
//       }
//     }
//     return (
//       <div>
//        <span > {displaytime()}</span> 
//       </div>
//     )
//   }
// }





//****************  RFC   *********** */
// import React ,{useState} from 'react'

// export default function App() {

//   const [count , setCount] = useState(0)
//   const increment =()=>{
 
//   return setCount( count + 1) 
//   }

//   const decrement =()=>{
//     return (setCount( count - 1))
//   }
//   return (
//     <div>
//       <button onClick={()=>increment()}>+</button>
//       <span>{count}</span>
//       <button onClick={()=>decrement()}>-</button>
//     </div>
//   )
// }

//************************************************ */

import React from 'react'

export default function App() {

  var count = 0

  const increment =()=>{
    count = count + 1 ;
    console.log(count)
    return count 

  }

  const decrement =()=>{
    count = count - 1 ;
    console.log(count)
    return count 
  }
  return (
    <div>
     <button onClick={()=>increment()}>+</button> 
     <span>{count}</span>
     {console.log(count)}
     <button onClick={()=>decrement()}>-</button>
    </div>
  )
}



