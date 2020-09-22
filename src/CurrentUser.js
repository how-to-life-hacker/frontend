import React from 'react';

export default function CurrentUser(props) {
    const { user } = props
    const { email } = user
    return (
        <div>
            <p>Currently Logged In As: {email} </p>
        </div>
    )
}