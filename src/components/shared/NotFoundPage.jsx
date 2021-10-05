import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../assets/error.png';


export const NotFoundPage = () => {
    return (
        <div className="_main-container-pagenotfound">
            <img className="_img-not-found" src={pageNotFound} alt="pic-404" />
            <div className="about-404-error">
                <h1 className="_h1-page-404-not">404 - Page Not Found</h1>
                <Link className="_404-button-back" to="/">Go Back</Link>
            </div>
        </div>
    )
}


