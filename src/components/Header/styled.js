import styled from 'styled-components';

export const Container = styled.div`
   background-color: #216613;
   border-radius: 10px;
   padding: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Logo = styled.img`
    height: 70px;
    width: auto;
`;

export const SearchInput = styled.input`
    border: 0;
    outline: 0;
    height: 50px;
    font-size: 15px;
    width: ${props => props.active ? '300px' : '0'};
    transition: all ease .4s;
    border-radius: 25px;
    background-color: #FFF;
    background-image: url('assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    cursor: pointer;
    padding-left: 50px;

    &:focus{
        cursor: text;
    }
`