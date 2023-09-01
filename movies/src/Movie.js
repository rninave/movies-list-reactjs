import React from 'react'
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import  './App.css'
const Movie = () => {
    const { movie } = useGlobalContext();
    return (
            <Row className=''>
                {movie.map((curMovie) => {
                    const { Title, imdbID, Poster,Year } = curMovie;
                    const movietitle = Title.substring(0,14) ;
                    return (
                        <Col key={imdbID} md={6} lg={3} className='h-100'>
                            <div className='mt-5 p-2 shadow'>
                            <Link to={`movie/${imdbID}`}  className='text-decoration-none '>
                                <Image src={Poster}  alt='img' className='d-flex mx-auto h-200 '/>
                                <p className='text-center text-dark m-0'>{Year}</p>
                                <h5 className='d-flex justify-content-center fw-bold text-dark' >
                                 { movietitle.length > 14 ? `${movietitle}...` : movietitle } </h5>
                            </Link>
                            </div>
                        </Col>
                    );
                })}
            </Row>
    )
}

export default Movie;