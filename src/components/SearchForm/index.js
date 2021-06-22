import {useState} from 'react'
import {useLocation} from 'wouter'
import {Formik} from 'formik'


export default function SearchForm(){
    const [path, pushLocation] = useLocation()


    return(
        
            <Formik
                initialValues={{keyword: ''}}
                validate={ values => {
                    const errors = {}
                    if(!values.keyword){
                        errors.keyword = 'Required input'
                    }
                    return errors
                }}
                onSubmit={(values)=>{
                    pushLocation(`/search/${values.keyword}`)
                }}
            >
                {
                ({errors, handleChange, handleSubmit}) => <form onSubmit={handleSubmit} className="m-auto w-75 mb-5">
                    <span className="d-block" style={{color:'red'}}>{errors.keyword || ''}</span>
                    <input 
                        onChange={handleChange} 
                        name = 'keyword'
                        type="text" 
                        className="form-control" 
                        placeholder="Search your superhero here..."

                    />
                </form>
                }
            </Formik>
    )
}