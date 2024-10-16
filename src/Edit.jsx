import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from './Redux/slice';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const book = location.state?.book; // Accessing book data from state
  const [formData, setFormData] = useState({
    id: book.id,
    name: book.name,
    author: book.author,
    genre: book.genre,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.author || !formData.genre) {
      alert('Please fill out all the fields');
      return;
    }

    dispatch(updateBook({ id: book.id, updatedData: formData })); // Correctly dispatch the action
    navigate('/'); // Redirect to home page after submission
};

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100' style={{ backgroundImage: "URL(https://marketplace.canva.com/EAFm9cdFi94/1/0/1600w/canva-bright-cartoon-green-and-brown-school-books-pattern-desktop-wallpaper-yBscg6QYXac.jpg)" }}>
      <div className="bg-warning rounded text-white p-5 w-50">
        <h2 className='text-center fw-bold'>Edit Book</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="id">Id: </label>
          <input type="text" name="id" className='form-control' onChange={handleFormChange} value={formData.id} disabled />
          <br />
          <label htmlFor="name">Book Name: </label>
          <input type="text" name="name" className='form-control' onChange={handleFormChange} value={formData.name} />
          <br />
          <label htmlFor="author">Book Author: </label>
          <input type="text" name="author" className='form-control' onChange={handleFormChange} value={formData.author} />
          <br />
          <label htmlFor="genre">Book Genre: </label>
          <input type="text" name="genre" className='form-control' onChange={handleFormChange} value={formData.genre} />
          <br />
          <div className='d-flex justify-content-center align-items-center'>
            <button type='submit' className='btn btn-info'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
