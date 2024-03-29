import React, { useState } from "react"
import { Container, Logo, SearchInput } from "./styled"

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(false)

  const handleInputFocus = () => {
    setInputActive(true)
  }

  const handleInputBlur = () => {
    if (search === "") setInputActive(false)
  }

  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        type="text"
        value={search}
        placeholder="Qual produto você deseja?"
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}
