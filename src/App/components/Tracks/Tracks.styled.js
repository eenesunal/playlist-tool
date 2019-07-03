import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    align-self: stretch;
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
