import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';

const Movie = () => {
    const { movie } = useGlobalContext();
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleClose = () => setShow(false);

    const handleShow = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
    };
    return (
        <>
            <Row className=''>
                {movie.map((curMovie) => {
                    const { Title, imdbID, Poster, Year } = curMovie;
                    const movietitle = Title.substring(0, 14);
                    return (
                        <Col key={imdbID} md={6} lg={3}>
                            <div className='mt-5 p-2 shadow rounded box'>
                                <Image
                                    src={Poster}
                                    onClick={() => handleShow(curMovie)}
                                    alt='img'
                                    className='d-flex mx-auto h-200 w-95'
                                />
                                <p className='text-center text-dark m-0'>{Year}</p>
                                <h5 className='d-flex justify-content-center fw-bold text-dark'>
                                    {movietitle.length > 14 ? `${movietitle}...` : movietitle}
                                </h5>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMovie && (
                        <>
                            <Row>
                                <Col md={6} className='my-auto'>
                                    <p>Title: {selectedMovie.Title}</p>
                                    <p>Year: {selectedMovie.Year}</p>
                                    <p>IMDB ID: {selectedMovie.imdbID}</p>
                                </Col>
                                <Col md={6}>
                                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} className='h-200 w-95' />
                                </Col>
                            </Row>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Movie;
