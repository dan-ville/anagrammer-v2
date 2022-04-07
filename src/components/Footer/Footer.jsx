import { Link } from "@nextui-org/react"
import { BsGithub } from "react-icons/bs"
import styled from "styled-components"

const FooterWrapper = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid grey;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  // height: 50px;
`
const IconLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  width: max-content;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <IconLink href="https://github.com/dan-ville/anagrammer-v2">
        <BsGithub />
      </IconLink>
      <span>
        Made by <Link href="https://danielvillegas.dev/">Daniel Villegas</Link>
      </span>
    </FooterWrapper>
  )
}

export default Footer
