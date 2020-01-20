import React from 'react'

export default function InputField(props) {
    return (
        <div>
            <input type="text" placeholder="example: SKY" onChange={props.change}></input>
            <button onClick={props.click}>Search Picture</button>
        </div>
    )
}
