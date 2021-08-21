import styled from 'styled-components';

export const Title = styled.h1`
color: #133660;
padding:3rem;
font-size: 2.5rem;
font-weight: bold;
`

export const DataInput = styled.input`
width: 300px;
height: 300px;
border: 1px solid #666666;
border-radius: 0.625rem;
padding: 0.3rem;
::placeholder {
  color:#999999;
  font-weight: 500;
}
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
width: 7.8rem;
height:50px;
color:#fff;
background: #E16F1C;
border-radius:0.625rem;
transition: background 0.2s;
&:hover {
background: #FF8B37;
}
`

export const LoginButton = styled.button`
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
width: 7.8rem;
height:50px;
color:#3980FF;
border: 1px solid #3980FF;
border-radius:0.625rem;
transition: background 0.2s;
transition: color 0.2s;
&:hover {
  color: #fff;
  background: #3980FF;
}
`

export const RecoverPassword = styled.a`
padding-top: 1rem;
align-items: start;
color:#3980FF;
font-weight: 600;
text-decoration: none;

&:hover {
  color: #5A95FF;
}

`