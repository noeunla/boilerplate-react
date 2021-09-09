import React, { useEffect, useState }  from 'react'

const BasicForm = () => {
    const [state, setState] = useState({correo:'',comentarios:''})
 
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
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input onChange={onChange} name="correo" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea onChange={onChange} name="comentarios" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
     </>
    )
};


export default BasicForm