import React from 'react'
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
const Movie = () => {
    const { movie } = useGlobalContext();
    return (
            <Row>
                {movie.map((curMovie) => {
                    return (
                        <Col key={curMovie.imdbID} md={6} lg={4} className='p-5'>
                            <Link to={curMovie.imdbRating} >
                            </Link>
                        </Col>
                    )
                })}
            </Row>
    )
}

export default Movie;