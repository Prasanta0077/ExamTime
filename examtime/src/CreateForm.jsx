import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';



function CreateForm() {
    const [values,setValues]=useState({
        title:"",
        author:"",
        isbn:"",
        publisher:"",
        publicdate:"",
        Genre:"",
        Description:"",
        Availability:"",
        coverpage:""
    });
    const [error,setError]=useState({});

    const navigate=useNavigate()


    const handleSubmit=(event)=>{
        event.preventDefault();
        const validationErrors={}
        if(!values.title.trim()){
          validationErrors.title="title is required"
        }
        if(!values.author.trim()){
          validationErrors.author="author is required"
        }
        if(!values.isbn.trim()){
          validationErrors.isbn="isbn is required"
        }
        if(!values.publisher.trim()){
          validationErrors.publisher="publisher is required"
        }
        setError(validationErrors)
        if(Object.keys(validationErrors).length===0)
        {
          axios.post('https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry/', values)
          .then((res)=>{
              console.log(res.data)
              navigate('/')
          })
          .catch((error)=>{
              console.log(error)
          })
          alert("Form submitted successfully")
        }
    

    }



  return (
  <>
  
   <h1 className=' container d-flex justify-content-center align-item-center mt-5'> New Book Form Data </h1> 
<div className='container shadow-lg mt-5'>
  
<form className='needs-validation pt-5' onSubmit={handleSubmit}>

  <div className="form-group was-validated mt-1">
    <input type="text" className="form-control mb-2" name="title" id="exampleInputName"  placeholder="Enter Book Title" 
    onChange={(e)=>{setValues({...values,title:e.target.value})}} />
    {error.title && <span style={{color:"red"}}>{error.author}{error.title}</span>}
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="author"id="exampleInputPassword1" placeholder="Enter Author Name"
    onChange={(e)=>{setValues({...values,author:e.target.value})}}  />
    {error.author && <span style={{color:"red"}}>{error.author}</span>}
  </div>
  <div className="form-group was-validated">
    <input type="number" className="form-control mb-2" name="isbn" id="exampleCheck1" placeholder='Enter ISBN Number'
    onChange={(e)=>{setValues({...values,isbn:e.target.value})}}  />
    {error.isbn && <span style={{color:"red"}}>{error.isbn}</span>}
    
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="publisher" id="exampleCheck1" placeholder='Enter Publisher Name'
    onChange={(e)=>{setValues({...values,publisher:e.target.value})}}  />
    {error.publisher && <span style={{color:"red"}}>{error.publisher}</span>}
  </div>
  <div className="form-group was-validated">
    <input type="date" className="form-control mb-2" name="publicdate" id="exampleCheck1" placeholder='Enter Public Date'
    onChange={(e)=>{setValues({...values,publicdate:e.target.value})}}  />
    
  </div>
  <div className="form-group was-validated mt-1">
    <input type="text" className="form-control mb-2" name="Genre" id="exampleCheck1" placeholder='Enter Genre Type'
    onChange={(e)=>{setValues({...values,Genre:e.target.value})}} />
   
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="Description" id="exampleCheck1" placeholder='Describe about book'
    onChange={(e)=>{setValues({...values,Description:e.target.value})}}/>
    
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="Availability" id="exampleCheck1" placeholder='Availability Status'
    onChange={(e)=>{setValues({...values,Availability:e.target.value})}}  />
    
  </div>
  <button type="submit" className=" was-validated d-inline flex-col  btn btn-primary m-3 " required="required" >Submit</button>
  <Link  to="/" type="submit" className=" d-inline flex-col btn btn-danger m-3">Back</Link>
</form>
</div>
  </>
  )
}

export default CreateForm
