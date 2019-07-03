import styled from "styled-components"
export { SearchButton as Button } from "../Header/Header.styled"

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: stretch;
    background-image: url("https://static.wixstatic.com/media/4af97a_903cb26e9a6c4e4eb257e681215e9aee~mv2_d_3000_2000_s_2.jpg");
    background-size: cover;
    position: relative;

    justify-content: center;
    align-items: center;
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;