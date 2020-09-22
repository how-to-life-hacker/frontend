import React from "react";

export default function DisplayUser(props) {
    console.log("PROPS", props)
    const { user } = props
    const { email } = user
    return (
        <div>
            <p>Currently Logged In As: {email} </p>
        </div>
    )
}