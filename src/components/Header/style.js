import { styled } from "styled-components";
import bg from '../../assets/images/bg_1.jpg'

export const Main = styled.div`
    background-image: url("${bg}");
    background-position: 50% ${({scroll})=>scroll}px;
    height: 100vh;
    z-index: -1;
    background-size: cover;
`