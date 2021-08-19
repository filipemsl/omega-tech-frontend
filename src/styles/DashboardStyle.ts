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

export const Title = styled.h1`
color: #133660;
font-size: 2rem;
font-weight: bold;
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

  svg path {
        fill: #fff;
      }

}
`

export const ListButton = styled.button`
color: #E16F1C;
width:120px;
height:45px;
border: 1px solid #E16F1C;
font-size: 15px;
font-weight: bold;
border-radius:0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.2s;

&:hover{
  background: #E16F1C;
  color: #fff;

  svg path {
        fill: #fff;
      }

}
`

export const HelpButton = styled.button`
color: #FF2E2E;
width:120px;
height:45px;
border: 1px solid #FF2E2E;
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
  color: #fff;

  svg path {
        fill: #fff;
      }

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
export const Container = styled.div`
height: 140px;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
border-radius: 0.625rem;
@media (max-width:768px){
 display:flex;
 flex-direction: column;
 height: 280px;
 margin-bottom: 25px;
}
`