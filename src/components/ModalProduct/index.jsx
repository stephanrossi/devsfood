import React from "react"
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductIngredients,
  ProductQuantityArea,
  ProductButtons,
} from "./styled"

export default ({ data }) => {
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>R$ {data.price}</ProductPrice>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>...</ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons></ProductButtons>
    </Container>
  )
}
