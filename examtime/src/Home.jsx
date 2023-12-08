import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import{Dna} from 'react-loader-spinner'

function Home() {
    const [data,setData]=useState([])
    const [record,setRecord]=useState([])


    const fetchApi= async()=>{

        await axios.get('https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry')
        .then((res)=>{
            setData(res.data)
            setRecord(res.data);
          
        })
    }

    useEffect(()=>{
        fetchApi()
    },[])

    const handleSearch=(event)=>{
        console.log(data)
         setRecord(data.filter(f=>f.title.toLowerCase().includes(event.target.value)))
       }

    const handleDelete=(id)=>{
        const isok =window.confirm("Do you Want to delete this book record")
        if(isok){
            axios.delete('https://64ffed6418c34dee0cd40d6e.mockapi.io/bootentry/'+id)
            .then((res)=>
            window.location.reload()
            
            )
            .catch((error)=>{
                console.log(error)
            })
        }

    }

 
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm">
            <div className=' container d-flex flex-column justify-content-center align-item-centers bg-light vh-30  '>
    <h1 className=' text-center mb-3 text-shadow-lg'>Book Entry in a Rack of a Libary</h1>
    
   <div className='container d-flex flex-row justify-content-end'>
     <Link  to="/create" className='btn btn-info btn-lg float-right mb-2' >ADD <span >+</span></Link></div>
 
   <span><input type="text" className="my-2 custom " placeholder='Searching....' onChange={handleSearch}/>
 </span>  

{data.length>0?
      <table className='table table-bordered table-hover  table-stripped shadow-lg '>
        <thead className='thead-dark'>
            <tr>
                <th className='text-center'>Title</th>
                <th className='text-center'>Author</th>
                <th className='text-center'>ISBN</th>
                <th className='text-center'>Publisher</th>
                <th className='text-center'>Publication Date</th>
                <th className='text-center'> Genre</th>
                <th className='text-center'>Description</th>
                <th className='text-center'>Availability</th>
                
                <th className='text-center'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                    record.map((d,i)=>{
                        return(
                            <tr key={i}>
                                <td className='text-center'>{d.title}</td>
                                <td className='text-center'>{d.author}</td>
                                <td className='text-center'>{d.isbn}</td>
                                <td className='text-center'>{d.publisher}</td>
                                <td className='text-center'>{d.publicdate}</td>
                                <td className='text-center'>{d.Genre}</td>
                                <td className='text-center'>{d.Description}</td>
                                <td className='text-center'>{d.Availability}</td>
                                <td className='text-center'>
                                    <Link to={`read/${d.id}`} className='btn btn-success'>Read</Link>
                                    &nbsp;
                                    <Link to={`update/${d.id}`} className='btn btn-primary'>Update</Link>
                                    &nbsp;
                                    <button className='btn btn-danger ' onClick={(e)=>handleDelete(d.id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    })
            }
        </tbody>

      </table>
      :  <div className="App d-flex justify-content-center align-item-center text-center mt-5">

                        <Dna
                        visible={true}
                            height = "80"
                            width = "80"
                            radius = "2"
                            
                            ariaLabel = 'dna-loading'     
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            />
          </div>}
</div>
</div>
    </div>
    </div>
    
  )
}

export default Home
