import styled from 'styled-components'

export const AdmitButton = styled.button`
color: #3980FF;
font-size: 15px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
transition: filter 0.2s;
img {
  padding: 0 0.75rem;
}
&:hover{
  filter: brightness(1.2);
}
`

export const EditButton = styled.button`
color: #E16F1C;
font-size: 15px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
transition: filter 0.2s;

img {
  padding: 0 0.75rem;
}

&:hover{
filter: brightness(1.2);
}
`


export const DeleteButton = styled.button`
color: #FF2E2E;
font-size: 15px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
transition: filter 0.2s;
img {
  padding: 0 0.75rem;
}
&:hover{
  filter: brightness(2);
}
`