import React from "react"
import { LinkArea, LinkIcon } from "./styled"
import { useHistory, useLocation } from "react-router-dom"

const MenuItem = ({ icon, link, title }) => {
  const history = useHistory()
  const location = useLocation()

  const isActive = location.pathname === link

  const handleLinkClick = (e) => {
    e.preventDefault()
    history.push(link)
  }

  return (
    <LinkArea
      data-tip={title}
      data-for="tip-right"
      active={isActive}
      href={link}
      onClick={handleLinkClick}
    >
      <LinkIcon src={icon} />
    </LinkArea>
  )
}

export default MenuItem
