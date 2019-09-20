import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.span`
font-size: 1.1em;
margin: 2em;
width: 12em;
padding: 2em;
background-color: black;
white-space: pre-wrap;
display: inline-block;
border: 2px black solid;
border-radius: 6px;
box-shadow: 1px 2px #888888;
color: white;
`

const ImageStyle = styled.img`
width: 100%;
`



function Names(props) {
    return (
        
        <Paragraph><ImageStyle src={props.image}/><b>{props.name}</b> {'\n'}Origin: {props.origin} {'\n'}{props.gender}<br/>{props.status}</Paragraph>
        
    )
}





export default Names