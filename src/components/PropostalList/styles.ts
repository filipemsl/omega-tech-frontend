import styled from 'styled-components'

export const Title = styled.h1`
color: #133660;
font-size: 2rem;
font-weight: bold;
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
transition: all 0.2s;

&:hover{
  background: #3980FF;
  color: #fff;

  svg path {
        fill: #fff;
      }

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
transition: all 0.2s;

&:hover{
  background: #FF4D4D;
}
`