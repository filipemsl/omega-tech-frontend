import styled from 'styled-components'

export const Sidebar = styled.div`
background: #F3F3F5;
width: 100%;
height: 100vh;
min-width: 450px;
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
@media (max-width:768px){
display: none;
img {
  width: 50%;
}
}
`

export const Texts = styled.div`
p {
  color: #666666;
  font-weight: 400;
}

h6 {
  color: #666666;
  font-weight: 700;
}

h1 {
  color: #666666;
  font-size: 1.5rem;
  font-weight: 700;
}
`
export const LogoffButton = styled.button`
color: #fff;
background-color: #FF2E2E;
width:120px;
height:45px;
font-size: 15px;
font-weight: bold;
border-radius:0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.2s;

&:hover{
background: #FF5555;
}
`