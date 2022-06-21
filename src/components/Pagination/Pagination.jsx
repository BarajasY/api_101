import React from 'react';
import './pagination.css';

const Pagination = ({ prev, next, onPrevious, onNext }) => {/* Props to make pagination work */

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <div className="button_container">
            {
                prev ? (
                    <div className="button">
                        <button className="page_link" onClick={handlePrevious}>Previous</button>
                    </div>
                ) : null
            }
            {
                next ? (
                    <div className="button">
                        <button className="page_link" onClick={handleNext}>Next</button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Pagination