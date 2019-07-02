import styled from "styled-components"

export const Result = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
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

    cursor: pointer;
`;

export const ListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    min-height: 100px;

    align-items: center;
    align-self: stretch;

    margin: 5px 0;
    padding: 20px 5px;

    border-bottom: 1px solid #eee;

    font-size: 17px;
    line-height: 26px;
    color: #fff;

    &:hover {
        opacity: .8;
    }

    label, summary {
        color: #ccc;
        font-weight: 600;
        font-size: 12px;
        cursor: default;
    }

    &:last-of-type {
        border: none;
    }
`;

export const PlaylistCover = styled.img`
    width: 100px;
    height: 100px;

    margin: 0 20px 0 0;
    padding: 0;

    cursor: default;
`;
