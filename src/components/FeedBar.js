import React from 'react';

function onClick(event) {
    window.location.reload();
}

const FeedBar = () => {

    return (
        <div className="howto-header">
            <center>
            <h1>Feed</h1>
            <button onClick={onClick}>Refresh HowTo List</button>
            </center>
        </div>
    );
};

export default FeedBar;