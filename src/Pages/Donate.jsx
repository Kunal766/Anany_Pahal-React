import React from 'react'
import { Link } from 'react-router-dom'

const Donate = () => {

    function onOpenHandler() {
        alert('Payments Modal is Opened');
    }

    function onCloseHandler() {
        alert('Payments Modal is Closed');
    }

    function onPaymentSuccessHandler(response) {
        alert('Payment Success');
        console.log('Payment Success Response', response);
    }

    function onPaymentFailureHandler(response) {
        alert('Payment Failure');
        console.log('Payment Failure Response', response);
    }
    /* End client-defined Callback Handler Functions */

    /* Configuring Handlers */
    Instamojo.configure({
        handlers: {
            onOpen: onOpenHandler,
            onClose: onCloseHandler,
            onSuccess: onPaymentSuccessHandler,
            onFailure: onPaymentFailureHandler
        }
    });

    function onButtonClick() {
        Instamojo.open('https://test.instamojo.com/@kunalnayak766');
    }


    return (
        <>
            <section className="page-title" style={{ backgroundImage: "url(bg2.jpg)" }}>
                <div className="container">
                    <div className="title-text clearfix">
                        <h1>Donate</h1>
                        <ul className="title-menu">
                            <li>
                                <Link to="/">home</Link>
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </li>
                            <li>Donate </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={onButtonClick} style={{
                    backgroundColor: '#1273de', color: 'white', borderRadius: '5px',
                    padding: "5px 15px"
                }}>
                    Donate For A Couse
                </button>
            </section>
        </>
    )
}

export default Donate