import React from 'react'
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
const Movie = () => {
    const { movie } = useGlobalContext();
    return (
            <Row>
                {movie.map((curMovie) => {
                    const { Title, imdbID, Poster } = curMovie;
                    return (
                        <Col key={imdbID} md={6} lg={4} className='p-5 '>
                            <Link to={`movie/${imdbID}`} >
                                <h5 className='d-flex justify-content-center ' > {Title} </h5>
                                <Image src={Poster} alt='img' className='h-100 w-100'/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
    )
}

export default Movie;