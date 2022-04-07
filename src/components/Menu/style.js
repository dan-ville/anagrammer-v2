import styled from "styled-components"

export const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 10%;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s ease;
  z-index: 10000;

  @media (min-width: 600px) {
    display: none;
  }
`
