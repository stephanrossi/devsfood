import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Container, CategoryArea, CategoryList } from "./styled"
import api from "../../Api"

import Header from "../../components/Header"
import CategoryItem from "../../components/CategoryItem"

export default () => {
  const history = useHistory()
  const [headerSearch, setHeaderSearch] = useState("")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories()
      if (cat.error == "") {
        setCategories(cat.result)
      }
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
                id: "",
                title: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
            />
            {categories.map((item, index) => (
              <CategoryItem key={index} data={item} />
            ))}
          </CategoryList>
        </CategoryArea>
      )}
    </Container>
  )
}
