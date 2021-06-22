import {Formik} from 'formik'
import { useLocation } from 'wouter'
import loginService from 'services/loginService'

export default function Login(){
    const [path, pushLocation] = useLocation()
    return(
        <div className="container">
            <h2 className="text-center"> Login</h2>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={ values => {
                    const errors = {}

                    if(!values.email){
                        errors.email = 'Required email'
                    }
                    if(!values.password){
                        errors.password = 'Required password'
                    }else if (values.password.length < 3){
                        errors.password = 'Password must be grater than 3'
                    }
                    
                    return errors
                }}
                onSubmit={(values, {setFieldError}) => {
                    loginService(values.email,values.password).then(()=>{
                        pushLocation('/')
                    }).catch(()=>{
                        setFieldError('account', 'Invalid email or password')
                    })
                }}
            >
                {({errors, handleChange,handleSubmit})=> <form onSubmit={handleSubmit} className="text-center">
                        <span className="d-block" style={{color:'red'}} >{errors.account || ''}</span>
                        <label htmlFor="email">Your email</label>
                        <input onChange={handleChange} name='email' type="email" className="form-control d-block m-auto mb-2 w-50" placeholder="email@domain.com"/>
                        <span className="d-block" style={{color:'red'}} >{errors.email || ''}</span>
                        <label htmlFor="email">Your password</label>
                        <input onChange={handleChange} name='password' type="password" className="form-control d-block m-auto mb-2 w-50" placeholder="password"/>
                        <span className="d-block" style={{color:'red'}} >{errors.password || ''}</span>
                        <button className="btn btn-primary m-2">Login</button>
                    </form>}
            </Formik>
        </div>
    )
}