import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
`;

export const Header = styled.div`
    display: flex;

    height: 200px;
    align-self: stretch;

    justify-content: center;
    align-items: center;

`;

export const Search = styled.input`
    width: 400px;
    height: 50px;

    margin: 2.5px 5px;
    padding: 18px 48px 16px;

    border: 1px solid #cdcdcd;
    border-radius: 50px;
    outline: none;
    box-sizing: border-box;

    font-size: 14px;
    line-height: 1;

    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    letter-spacing: 2px;
    min-width: 160px;
    white-space: normal;
`;

export const SearchButton = styled.button`
    height: 50px;

    margin: 2.5px 5px;
    padding: 18px 48px 16px;

    border: 1px solid #116e32;
    border-radius: 500px;
    outline: none;
    box-sizing: border-box;

    font-size: 14px;
    color: #fff;
    background-color: #1ed760;
    cursor: pointer;
    line-height: 1;

    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;

    &:hover {
        opacity: .9;
    }
`;

export const List = styled.ul`
    display: flex;

    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;

    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;

    align-items: center;
    align-self: stretch;

    margin: 5px 0;
    padding: 20px 5px;

    border-bottom: 1px solid #eee;

    font-size: 17px;
    line-height: 26px;
    color: #fff;
`;