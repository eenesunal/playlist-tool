import styled from "styled-components"

export const Header = styled.div`
    display: flex;

    height: 200px;
    align-self: stretch;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: height 0.3s;
    z-index: 1;

    justify-content: center;
    align-items: center;

    background-image: url("https://artsy-media-uploads.s3.amazonaws.com/1sgadIAIdate_DDi1Fv6WQ%2Fcustom-Custom_Size___BeachBirds_Strauss_MCDC.jpg");
    background-position: center;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, .5);

`;

export const HeaderRow = styled.div`
    display: flex;

    align-self: stretch;
    flex-direction: row;

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
    height: ${props => props.mini ? "30px" : "50px"};

    margin: 2.5px 5px;
    padding: ${props => props.mini ? "10px 15px" : "18px 48px 16px"};
    z-index: 1;

    border: 1px solid rgba(17,110,50,.5);
    border-radius: ${props => props.mini ? "10px" : "500px"};
    outline: none;
    box-sizing: border-box;

    font-size: ${props => props.mini ? "12px" : "14px"};
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