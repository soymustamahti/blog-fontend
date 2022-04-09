import React from 'react';
import {MDBFooter, MDBIcon} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <>
            <footer>
                <MDBFooter className='bg-light text-center text-white'>
                    <div className='container p-4 pb-0'>
                        <section className='mb-4'>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#3b5998'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='facebook-f' className="flex"/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#55acee'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='twitter' className="flex"/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#dd4b39'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='google' className="flex"/>
                            </a>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#ac2bac'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='instagram' className="flex"/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#0082ca'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='linkedin-in' className="flex"/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{backgroundColor: '#333333'}}
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab icon='github' className="flex"/>
                            </a>
                        </section>
                    </div>

                    <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2020 Copyright:
                        <a className='text-white' href='https://mdbootstrap.com/'>
                            MDBootstrap.com
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        </>
    );
};

export default Footer;
