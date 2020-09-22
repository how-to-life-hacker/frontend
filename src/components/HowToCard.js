import React from 'react';

const HowToCard = props => {
    const { title, category, description } = props.howto;
    return (
        <div className="howto-card">
            <h2>{title}</h2>
            <div className="howto-category">
                Category: <em>{category}</em>
            </div>
            <div className="howto-description">
                Description: <strong>{description}</strong>
            </div>
        </div>
    );
};

export default HowToCard;
