import React, { useEffect, useState } from "react"
// import { useHistory } from "react-router-dom"
import {
  Container,
  CategoryHeader,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from "./styled"
import ReactToolTip from "react-tooltip"

import api from "../../Api"

import Header from "../../components/Header"
import CategoryItem from "../../components/CategoryItem"
import ProductItem from "../../components/ProductItem"

import Modal from "../../components/Modal"
import ModalProduct from "../../components/ModalProduct"

let searchTimer = null

export default () => {
  // const history = useHistory()
  const [headerSearch, setHeaderSearch] = useState("")
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const [activeCategory, setActiveCategory] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [activeSearch, setActiveSearch] = useState("")

  const [modalStatus, setModalStatus] = useState(false)
  const [modalData, setModalData] = useState({})

  const getProducts = async () => {
    const prods = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch
    )

    if (prods.error == "") setProducts(prods.result.data)
    setTotalPages(prods.result.pages)
    setActivePage(prods.result.page)
  }

  const handleProductClick = (data) => {
    setModalData(data)
    setModalStatus(true)
  }

  useEffect(() => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch)
    }, 1500)
  }, [headerSearch])

  useEffect(() => {
    setProducts([])
    getProducts()
  }, [activeCategory, activePage, activeSearch])

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories()
      if (cat.error === "") setCategories(cat.result)
      ReactToolTip.rebuild()
    }
    getCategories()
  }, [])

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          <CategoryHeader>Selecione uma categoria:</CategoryHeader>
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
      {products.length && (
        <ProductArea>
          <ProductList>
            {products.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </ProductList>
        </ProductArea>
      )}

      {totalPages > 0 && (
        <ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => (
              <ProductPaginationItem
                key={index}
                current={index + 1}
                active={activePage}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </ProductPaginationItem>
            ))}
        </ProductPaginationArea>
      )}
      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus} />
      </Modal>
    </Container>
  )
}
