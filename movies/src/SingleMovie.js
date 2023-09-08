import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { api } from './context';
import { Row, Col, Image } from 'react-bootstrap';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
        console.log(data , 'data fgjk')
      }

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies(`${api}&i=${id}`);
  })

  return (
    <div className='d-flex justify-content-center align-items-center mt-5 '>
      <Row className='shadow rounded p-3  bg-info' >
        <Col md={6}><Image src={movie.Poster} className='h-100 w-100'/></Col>
        <Col md={6} className='my-auto'>
          <p>{movie.Released}</p>
          <p>{movie.Genre}</p>
          <p>{movie.imdbRating}</p>
          <p className='pb-5'>{movie.Country}</p>
          <Link to="/" className='text-decoration-none border border-danger-subtle px-3 py-1 rounded-pill border-3 fw-bold'> GO BACK </Link>
        </Col>
      </Row>
    </div>
  )
}

export default SingleMovie;