import styled from 'styled-components'

export const Container = styled.div`
background: #fff;
width: 100%;
height: 100%;
max-width: 520px;
max-height:800px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
  color: #133660;
  font-size: 1.5rem;
  font-weight: 700;
}
`

export const InputContainer = styled.div`
width:395px;
height:3rem;
padding: 0.5rem;
display: flex;
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

export const SmallContainer = styled.div`
width:180px;
height:3rem;
padding: 0.5rem;
display: flex;
margin: 1rem;
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

export const RadioContainer = styled.div`
margin-top:1rem;
display: flex;
flex-direction: column;
align-items: start;
width: 395px;
justify-content: start;
border: 1px solid #999999;
border-radius:0.625rem;

div {
  display: block;
}
`

export const AddButton = styled.button`
color: #3980FF;
width:120px;
height:45px;
border: 1px solid #3980ff;
font-size: 15px;
font-weight: bold;
border-radius:0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.2s;

&:hover{
  background: #3980FF;
  color: #fff;

}
`

export const CancelButton = styled.button`
color: #fff;
width:120px;
height:45px;
background:#FF2E2E;
font-size: 15px;
font-weight: bold;
border-radius:0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.2s;

&:hover{
  background: #FF4D4D;
}
`