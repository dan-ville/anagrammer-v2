import React, { useState } from "react"
import { MenuWrapper } from "./style"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { FaBookmark } from "react-icons/fa"
import { Button } from "@nextui-org/react"
import useAppContext from "../../context/useAppContext"
import { useNavigate } from "react-router-dom"

const buttonCSS = {
  padding: 0,
  height: "60px",
  width: "60px",
  fontSize: "1.75rem",
  transition: "all 0.5s ease",
  animation: ".5s linear 1s infinite  slidein",
}

const Menu = () => {
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate()

  return (
    <MenuWrapper>
      {showOptions ? (
        <>
          <Button
            onClick={() => navigate("/my-anagrams")}
            auto
            rounded
            color="error"
            css={buttonCSS}
          >
            <FaBookmark />
          </Button>
          <Button
            onClick={() => navigate("/create")}
            auto
            rounded
            color="primary"
            css={buttonCSS}
          >
            <BsFillPlusCircleFill />
          </Button>
        </>
      ) : null}
      <Button
        onClick={() => setShowOptions((prev) => !prev)}
        auto
        rounded
        color="gradient"
        css={buttonCSS}
      >
        <BiMenuAltRight />
      </Button>
    </MenuWrapper>
  )
}

export default Menu
