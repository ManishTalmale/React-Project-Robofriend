import React from "react";
// import {Image} from 'antd';

const Card = (props) => {
    const { name, email, id } = props
    return (
        <div className="bw2 dim bg-light-blue pa3 ma2 br3 dib grow tc i measure-narrow shadow-5 ba { border-style: solid; border-width: 1px; b--purple { border-color:  var(--purple); }}">
            {/* <h1>Robofriends</h1> */}
            <img alt="img" src={`https://robohash.org/${id}?100*100`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    )
}
export default Card;