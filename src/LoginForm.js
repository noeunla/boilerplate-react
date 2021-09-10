

import React, { useEffect, useState }  from 'react'

const LoginForm = () => {
    const [state, setState] = useState({correo:'',contrasenia:''})
 
    const onChange = (e) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
    )}

    useEffect(() => {
        console.log({state})
    }, [state])
    
    return (
        <>
        <br/>
        <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input onChange={onChange} name="correo" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="col-6">
            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
            <input onChange={onChange} name="contrasenia" className="form-control" id="exampleFormControlInput2" placeholder="********" />
        </div><br/>
        <div><button type="button" class="btn btn-dark col-6" >Login</button></div>
     </>
    )
};


export default LoginForm