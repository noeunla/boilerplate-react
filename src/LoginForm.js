import React, { useEffect, useState }  from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    correo: Yup.string().email('Email not valid').required('Email us required'),
    contrasenia: Yup.string().required('contraseña is required')
})

const LoginForm = () => {
    const [state, setState] = useState({correo:'',contrasenia:''})
 
    const formikForm = useFormik({
        initialValues: {
            correo: '',
            contrasenia:''
        },
    validationSchema,
    onSubmit: values => {
            console.log(JSON.stringify(values));
        }
    })//formikForm

    const onChange = (e) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
    )}

    // useEffect(() => {
    //     console.log({state})
    // }, [state])
    
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     // console.log({state})
    //     const values = {
    //         correo: e.target.elements.correo.value,
    //         contrasenia: e.target.elements.contrasenia.value
    //     }
    //     console.log(values)
    // }

    return (
       
    <form onSubmit={formikForm.handleSubmit}>
        <br/>
        <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input 
            onChange={formikForm.handleChange} 
            name="correo" type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"
            value={formikForm.values.correo} />
            {
            formikForm.touched.email && formikForm.errors.correo &&
            <span className="help-block text-danger">{formikForm.errors.email}</span>
            }
        </div>
        <div className="col-6">
            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
            <input 
            onChange={formikForm.handleChange} 
            name="contrasenia" 
            className="form-control" 
            id="exampleFormControlInput2" 
            placeholder="********" 
            value={formikForm.values.contrasenia} />
            {
            formikForm.touched.contrasenia && formikForm.errors.contrasenia &&
            <span className="help-block text-danger">{formikForm.errors.contrasenia}</span>
            }
        </div>
        <br/>
        <div><button type="submit" className="btn btn-dark col-6" >Login</button></div>
    </form>
     
    )
};


export default LoginForm