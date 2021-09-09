import React from 'react'
import ReactDOM from 'react-dom'
import BasicForm from './BasicForm'

const App = () => {
 return (
   <div className="container">
     <BasicForm />
   </div>
 )
}
 
ReactDOM.render(<App />, document.getElementById("root"))