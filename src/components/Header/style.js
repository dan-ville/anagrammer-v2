import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid gray;
  width: 100%;
`
export const InnerWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Navbar = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`
