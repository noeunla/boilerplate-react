import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import BasicForm from './BasicForm'
import LoginForm from './LoginForm'

export const AppContext = createContext(null)

const App = () => {

  const {loading, setLoading} = useState(false)

 return (
   <div className="container">
     <h1>Challenge Superheroes</h1>
     <AppContext.Provider value={{loading, setLoading}} >
     <Router>
      {/* <Route exact path="/about" component={About} /> */}
      <Route exact path="/" component={LoginForm} />
     </Router>
     </AppContext.Provider>
     {/* <BasicForm /> */}
     {/* <h1>Challenge Superheroes</h1> */}
     {/* <LoginForm /> */}
   </div>
 )
}
 
ReactDOM.render(<App />, document.getElementById("root"))