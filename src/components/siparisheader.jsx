import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #CE2829;
    background-image: url('/images/iteration-1-images/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 20vh
    `

const StyledDiv = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
height: 20vh;
align-items: flex-end;
color: white
`

const StyledButton = styled.button`
background-color: #CE2829;
border: 1px solid #CE2829;
color: white;
font-family: "Barlow";
font-weight: 400
`

export default function SiparisHeader() {


    return (
        <StyledHeader>
            <StyledDiv>
                <Link to='/' exact> <StyledButton>Anasayfa</StyledButton></Link>
                -
                <StyledButton>Sipariş Oluştur</StyledButton>
            </StyledDiv>
        </StyledHeader>


    );
}
