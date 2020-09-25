import React from 'react';
import styles from "styled-components";

const HeaderStyle = styles.div`
background-color: rgb(47, 54, 51);
color: #4fc09a;
padding: 3rem;
margin: 3rem;
border-radius: 1rem;
h1{
    text-align: center;
}
img{
    width: 5rem;
    height: 5rem;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
`

const FeedBar = () => {

    return (
        <div className="howto-header">
            <HeaderStyle>
            <h1>Welcome To Life Hacker!</h1>
                <img alt="logo" class="center" src="https://cdn.pixabay.com/photo/2017/03/31/23/11/robot-2192617_960_720.png" />
            </HeaderStyle>
        </div>
    );
};

export default FeedBar;