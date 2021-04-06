import styled from 'styled-components'

export const Container = styled.div`
    width: 380px;
    height: 100px;
    background-color: ${props => props.active == props.id ? '#FFF' : '#AAE09A'};
    border-radius: 5px; 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .3s;
    margin: 20px;
`
export const ProductPhotoArea = styled.div`
    padding: 10px;
`;

export const ProductPhoto = styled.img`
    /* padding: 10px; */
    width: auto;
    height: 80px;
    border-radius: 20px;

`;

export const ProductInfoArea = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const ProductName = styled.div`
    color: green;
    font-size: 19px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    color: green;

`;

export const ProductIngredients = styled.div`
    color: green;

`

export const ProductButtonArea = styled.div``;

export const ProductButton = styled.img`
    margin: 20px;
    width: 40px;
    height: auto;
`;