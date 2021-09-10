import React from 'react'
import ReactDOM from 'react-dom'
// import BasicForm from './BasicForm'
import LoginForm from './LoginForm'

const App = () => {
 return (
   <div className="container">
     {/* <BasicForm /> */}
     <h1>Challenge Superheroes</h1>
     <LoginForm />
   </div>
 )
}
 
ReactDOM.render(<App />, document.getElementById("root"))