import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px; 
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    cursor: pointer;
`
export const ProductPhotoArea = styled.div`
    width: 100px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductPhoto = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    color: green;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;

export const ProductIngredients = styled.div`
    font-size: 11px;
    overflow-x: hidden;
`

export const ProductButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 80px;
`;

export const ProductButton = styled.img`
    margin: 20px;
    width: 15px;
    height: auto;
`;