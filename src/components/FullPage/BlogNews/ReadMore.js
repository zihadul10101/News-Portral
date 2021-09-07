import React, { useState } from 'react';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div>
            <p className="text">
                {isReadMore ? text.slice(0, 450) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? <button className="btn btn-danger">Read More</button> :   <button className="btn btn-danger">See Less</button>}
                </span>
            </p>
        </div>
    );
};

export default ReadMore;