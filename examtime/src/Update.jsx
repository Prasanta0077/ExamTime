import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function Update() {
  // const [data,setData]=useState([]);
  const [values,setValues]=useState({
    title:"",
    author:"",
    isbn:"",
    publisher:"",
    publicdate:"",
    Genre:"",
    Description:"",
    Availability:"",
    
});
  const navigate= useNavigate();
  const {id}=useParams();
  console.log(id);
  
useEffect(()=>{
  
     axios.get("https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry/"+ id)
      .then((res)=>{setValues(res.data);
                   console.log(res.data)})
      .catch((error)=>{console.log(error)});
},[]);

const handleUpdate=(event)=>{
  event.preventDefault();
  axios.put("https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry/"+ id,values)
  .then(
    (res)=>{
     
      navigate('/');
    console.log(res.data)
      
    }
  )
  .catch((e)=>{console.log(e)})

}

  return (
    <div>
       <h1 className=' container d-flex justify-content-center align-item-center mt-5 sm-6'>Update Books's Form Data </h1> 
          <div className='container shadow-lg mt-5'>
  
<form className='needs-validation pt-5' onSubmit={handleUpdate}>

  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="title" id="exampleInputName"  placeholder="Enter Title Field" 
    value={values.title}   onChange={(e)=>{setValues({...values,title:e.target.value})}} required="required" />
    <div className='invalid-feedback'>Please Enter Title Field</div>
  </div>

  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="author"id="exampleInputPassword1" placeholder="Enter Author Name"
      value={values.author}    onChange={(e)=>{setValues({...values,author:e.target.value})}} required="required" />
      <div className='invalid-feedback'>Please Enter Author Name </div>
  </div>

  <div className="form-group was-validated">
    <input type="number" className="form-control mb-2" name="isbn" id="exampleCheck1" placeholder='Enter ISBN'
    value={values.isbn}   onChange={(e)=>{setValues({...values,isbn:e.target.value})}} required="required" />
    <div className='invalid-feedback'>Please Enter ISBN </div>
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="publisher" id="exampleCheck1" placeholder='Enter Publisher Name'
    value={values.publisher}    onChange={(e)=>{setValues({...values,publisher:e.target.value})}} required="required" />
    <div className='invalid-feedback'>Please Enter Publisher Name</div>
  </div>
  <div className="form-group was-validated">
    <input type="date" className="form-control mb-2" name="publicdate" id="exampleCheck1" placeholder='Enter Publication Date'
     value={values.publicdate}   onChange={(e)=>{setValues({...values,publicdate:e.target.value})}} required="required"  />
    <div className='invalid-feedback'>Please Enter Publication Date</div>
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="Genre" id="exampleCheck1" placeholder='Enter Genre'
     value={values.Genre}   onChange={(e)=>{setValues({...values,Genre:e.target.value})}} required="required"  />
    <div className='invalid-feedback'>Please Enter Genre</div>
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="Description" id="exampleCheck1" placeholder='Enter Description'
     value={values.Description}   onChange={(e)=>{setValues({...values,Description:e.target.value})}} required="required"  />
    <div className='invalid-feedback'>Please Enter Description</div>
  </div>
  <div className="form-group was-validated">
    <input type="text" className="form-control mb-2" name="Availability" id="exampleCheck1" placeholder='Enter Availability'
     value={values.Availability}   onChange={(e)=>{setValues({...values,Availability:e.target.value})}} required="required"  />
    <div className='invalid-feedback'>Please Enter Availability</div>
  </div>
 
  <button type="submit" className=" was-validated d-inline flex-col  btn btn-primary m-3 " required="required"  >Update </button>
  <Link  to="/" type="submit" className=" d-inline flex-col btn btn-danger m-3">Back</Link>
</form>
</div>
    </div>
  )
}

export default Update
