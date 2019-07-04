import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    padding-top: 200px;
`;

export const Header = styled.div`
    display: flex;
    
    align-items: center;
    align-self: stretch;

    margin: 0;
    padding: 5px 0;
`;

export const ExportButton = styled.button`
    display: flex;
    flex-direction: row;

    padding: 10px 16px;
    margin: 0 4px 0 auto;
    border: none;
    border-radius: 2px;

    background-color: #cc0000;
    color: #FFFFFF;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .007px;
    text-transform: uppercase;

    cursor: pointer;
    outline: none;
    transition: width 0.3s;
    transition: position 0.3s;
`;

export const TrackList = styled.ul`
    display: flex;

    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;

    margin: 0;
    padding: 0;
`;

export const TrackListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    min-height: 50px;

    align-items: center;
    align-self: stretch;

    margin: 5px 0;
    padding: 10px 5px;

    border-bottom: 1px solid #eee;

    font-size: 15px;
    line-height: 22px;
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

    sub {
        margin: 0 10px 0 0;
    }

    &:last-of-type {
        border: none;
    }
`;

export const AlbumCover = styled.img`
    width: 50px;
    height: 50px;

    margin: 0 10px 0 0;
    padding: 0;

    cursor: default;
`;
