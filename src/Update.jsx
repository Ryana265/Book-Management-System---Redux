import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from './Redux/slice'
import { Navigate, useNavigate } from 'react-router-dom'

function Update() {
  const dispatch=useDispatch()
  const navigate = useNavigate() 

  const [formData,setFormData]=useState({
    id:"",
    name:"",
    author:"",
    genre:""
  })


  const handleFormSubmit=(e)=>{
    e.preventDefault()
    if (!formData.name || !formData.author || !formData.genre) {
      alert('Please fill out all the fields.');
      return;
    }
    console.log("form data is:  ",formData)
    dispatch(addBook(formData))
    console.log("Dispatched addBook action"); // Log action dispatch
    setFormData({ id: "", name: "", author: "", genre: "" });
    navigate('/') // Redirect to home page after submission
  }

  const handleFormChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
  }
  return (
    <div className='d-flex justify-content-center align-items-center  w-100 vh-100' style={{backgroundImage:"URL(https://marketplace.canva.com/EAFm9cdFi94/1/0/1600w/canva-bright-cartoon-green-and-brown-school-books-pattern-desktop-wallpaper-yBscg6QYXac.jpg)"}}>
      <div className="bg-warning rounded  text-white p-5 w-50">
        <h2 className='text-center fw-bold'>Add New Book</h2>
        <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="id">Id : </label>
        <input type="text" name="id" id="" placeholder='Enter Id' className='form-control' onChange={handleFormChange} value={formData.id}/>
        <br />
        <label htmlFor="id">Book Name : </label>
        <input type="text" name="name" id="" placeholder='Enter Id' className='form-control' onChange={handleFormChange} value={formData.name} />
        <br />

        <label htmlFor="id">Book Author : </label>
        <input type="text" name="author" id="" placeholder='Enter Id' className='form-control' onChange={handleFormChange} value={formData.author} />
        <br />

        <label htmlFor="id">Book Genre : </label>
        <input type="text" name="genre" id="" placeholder='Enter Id' className='form-control' onChange={handleFormChange} value={formData.genre} />
        <br />
      <div className=' d-flex justify-content-center align-items-center'>
        <button type='submit'  className='btn btn-info'>Submit</button>
        </div>
        </form>
       

      </div>
      
    </div>
  )
}

export default Update
