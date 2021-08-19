import styled from 'styled-components';

export const Title = styled.h1`
color: #133660;
padding-top:3rem;
padding-bottom:1rem;
font-size: 2.5rem;
font-weight: bold;
`

export const Container = styled.div`
width:300px;
height:3rem;
padding: 0.5rem;
display: flex;
margin: 2rem;
border: 1px solid #999999;
border-radius:0.625rem;
input {
  ::placeholder { 
    color:#666666;
    font-weight: 500;
  }

  a {
    align-self: start;
  }
}
`

export const ButtonContainer = styled.div`
display: flex;
margin-top: 2rem;
`

export const SignButton = styled.button`
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
width: 300px;
height:50px;
color:#fff;
background: #E16F1C;
border-radius:0.625rem;
transition: background 0.2s;
&:hover {
background: #FF8B37;
}
`

export const LoginText = styled.p`
margin-top:16px;
color: #666666;
button {
  color: #5A95FF;
  font-weight: bold;
  &:hover {
    filter: brightness(1.2);
  }
}

`