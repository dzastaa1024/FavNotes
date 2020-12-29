import styled from 'styled-components';

const ButtonIcon  = styled.button `
    width: 67px;
    height: 67px;
    border-radius: 20px;
    background-image: url(${({icon})=> icon});
    background-size: 40%;
    background-position: 15px 50%;
    background-repeat: no-repeat;
    border: none;
    background-color: ${({active})=> active ? "white" : "transparent" };
`

export default ButtonIcon;