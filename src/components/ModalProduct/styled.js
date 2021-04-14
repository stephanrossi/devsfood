import styled from 'styled-components';

export const Container = styled.div`
    width: 680px;
    padding: 20px;
`;

export const ProductArea = styled.div`
    display: flex;
    height: 200px;
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductDetails = styled.div`
   
`;

export const ProductName = styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductQtImage = styled.img`
    background-color: #073C07;
    width: 24px;
    height: auto ;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: all ease .2s;

    &:hover{
        background-color: green;
    }
`;

export const ProductQtText = styled.div`
    display: flex;
    margin: 0px 10px;
    padding: 1px;
    align-items: center;
    justify-content: center;
    color: #073C07;
    font-weight: bold;
    font-size: 25px;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #073C07;
`;

export const ProductButtons = styled.div`
   margin-top: 10px;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
`;

export const ProductButton = styled.button`
    cursor: pointer;
    border: 0;
    background-color: #073C07;
    box-shadow: 2px 3px 0px #999;
    color: #FFF;
    font-size: ${props => props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props => props.small ? '5px 10px' : '10px 20px'} ;
    margin-left: 10px;
    border-radius: 5px;
    transition: all ease .4s;

    &:hover{
        background-color: green;
    }
`;