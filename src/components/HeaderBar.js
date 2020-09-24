import React from 'react';

function onClick(event) {
    window.location.reload();
}

const HeaderBar = () => {

    return (
        <div className="howto-header">
            <h1>LifeHacker Feed</h1>
            <button onClick={onClick}>Refresh HowTo List</button>
        </div>
    );
};

export default HeaderBar;