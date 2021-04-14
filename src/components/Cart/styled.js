import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #0B4D0B;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 20px;
    opacity: 0.9;
`;

export const CartHeader = styled.div`
    display: flex;
    height: 50px;
    width: 340px;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`

export const CartIcon = styled.img`
    display: flex;
    height: auto;
    width: 23px;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
`

export const CartText = styled.div`
    display: flex;
    padding: 5px;
    color: #FFF;
    font-size: 17px;
`

export const CartBody = styled.div`
    max-height: 90vh;
    overflow-y: auto;
    height: ${props => props.active ? '90vh' : '0'};
    background-color: rgba(0, 255, 0, .2);
    transition: all ease .3s;
    color: #FFF;
`

export const CartDown = styled.img`
    width: 23px;
    transform: ${props => props.active ? '' : 'rotate(180deg)'};
    transition: all ease .2s;
`

export const ProductArea = styled.div``

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductQtImage = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 10px;
`;