import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Read() {
    const [data,setData]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get('https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry/'+id)
        .then((res)=>{
            setData(res.data)
        })
    },[])
  return (
    <div className='d-flex justify-content-center align-item center w-100 vh-50 bg-light mt-5'>
      <div className='w-50 border bg-light shadow-lg px-5 pt-5 pb-3 rounded'>
        <h1 className='d-flex justify-content-center align-item center '>User Details </h1>
        <div className='mb-2'>
            <strong>Title: {data.title}</strong>
        </div>
        <div className='mb-2'>
            <strong>Author: {data.author}</strong>
        </div>
        <div className='mb-2'>
            <strong>ISBN: {data.isbn}</strong>
        </div>
        <div className='mb-2'>
            <strong>Publisher: {data.publisher}</strong>
        </div>
        <div className='mb-2'>
            <strong>Publisher: {data.publisher}</strong>
        </div>
 
        <div className='mb-2'>
            <strong>Publish Date: {data.publicdate}</strong>
        </div>
        <div className='mb-2'>
            <strong>Genre: {data.Genre}</strong>
        </div>
        <div className='mb-2'>
            <strong>Description: {data.Description}</strong>
        </div>
        <div className='mb-2'>
            <strong>Availability: {data.Availability}</strong>
        </div>

      <Link to={`/update/${data.id}`} className='btn btn-primary mx-3 btn-md'>Edit</Link>
      &nbsp;
      <Link to="/" className='btn btn-success mx-3 btn-md'>Back</Link>

      </div>
      
    </div>
  )
}

export default Read
