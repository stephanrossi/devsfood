import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryHeader = styled.div`
    background-color: #35980f;
    width: 200px;
`;

export const CategoryArea = styled.div`
    color: #FFF;
    margin-top: 20px;
    font-size: 18px;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const ProductArea = styled.div`
    margin-top: 20px;
`;

export const ProductList = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
    background-color: ${props => props.active === props.current ? '#aae09b' : '#FFF'};
    padding: 5px 10px;
    margin: 3px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border: 1px solid green;
    cursor: pointer;
`;