import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  CartArea,
  CartHeader,
  CartBody,
  CartIcon,
  CartText,
  CartDown,
  ProductArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtImage,
  ProductQtText,
} from "./styled"

export default () => {
  const products = useSelector((state) => state.cart.products)
  const [openCart, setOpenCart] = useState(true)
  const [down, setDown] = useState(false)
  const dispatch = useDispatch()

  const toggleCartBody = () => {
    setOpenCart(!openCart)
    setDown(!down)
  }

  const handleProdQt = (key, type) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: { key, type },
    })
  }

  return (
    <CartArea>
      <CartHeader onClick={toggleCartBody}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho ({products.length})</CartText>
        <CartDown src="/assets/down.png" active={down} />
      </CartHeader>
      <CartBody active={openCart}>
        <ProductArea>
          {products.map((item, index) => (
            <ProductItem key={index}>
              <ProductPhoto src={item.image} />
              <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  R$ {(item.price * item.qt).toFixed(2)}
                </ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtImage
                  src="/assets/minus.png"
                  onClick={() => handleProdQt(index, "-")}
                />
                <ProductQtText>{item.qt}</ProductQtText>
                <ProductQtImage
                  src="/assets/plus.png"
                  onClick={() => handleProdQt(index, "+")}
                />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductArea>
      </CartBody>
    </CartArea>
  )
}
