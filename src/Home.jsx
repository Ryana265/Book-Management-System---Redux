import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteBook } from './Redux/slice'

function Home() {
    const books=useSelector((state)=>state.books.books)
    const dispatch =useDispatch()
    const navigate=useNavigate()

    const handledelete=(id)=>{
      dispatch(deleteBook(id))
    }
    const handleEdit = (book) => {
      // Redirect to the edit page with book details
      navigate('/edit', { state: { book } });
    };
  return (
    <div className='bg-light min-vh-100'>
      <div className="container py-5">
        <h2 className='text-center mb-4'>CRUD App with JSON Server</h2>
        <div className='text-center mb-4'>
          <Link to='/create' className='btn btn-warning'>Add More Books</Link>
        </div>
        <table className='table table-hover table-striped'>
          <thead className='table-warning'>
            <tr>
              <th>Id</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books && books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td className='d-flex gap-1'>
                    <button className='btn btn-danger' onClick={() => handledelete(book.id)}>Delete</button>
                    <button className='btn btn-warning' onClick={() => handleEdit(book)}>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No books available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;