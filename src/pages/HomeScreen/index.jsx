import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
} from "./styled"
import ReactToolTip from "react-tooltip"

import api from "../../Api"

import Header from "../../components/Header"
import CategoryItem from "../../components/CategoryItem"
import ProductItem from "../../components/ProductItem"

export default () => {
  const history = useHistory()
  const [headerSearch, setHeaderSearch] = useState("")
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const [activeCategory, setActiveCategory] = useState(0)

  const getProducts = async () => {
    const prods = await api.getProducts()
    if (prods.error == "") setProducts(prods.result.data)
  }

  useEffect(() => {
    getProducts()
  }, [activeCategory])

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories()
      if (cat.error == "") setCategories(cat.result)
      ReactToolTip.rebuild()
    }
    getCategories()
  }, [])  

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria:
          <CategoryList>
            <CategoryItem
              data={{
                id: 0,
                name: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </CategoryList>
        </CategoryArea>
      )}
      
        <ProductArea>
          <ProductList>
            {products.map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </ProductList>
        </ProductArea>
      
    </Container>
  )
}
