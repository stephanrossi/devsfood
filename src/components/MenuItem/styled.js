import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: ${props => props.active ? '#0B4D0B' : 'transparent'};
    margin-bottom: 20px;

    &:hover{
        width: ${props => props.active ? '' : '58px'};
        height: ${props => props.active ? '' : '58px'};
        border: ${props => props.active ? 'none' : '1px solid #0B4D0B'};
;
    }
`

export const LinkIcon = styled.img`
    height: auto;
    width: 34px;
`