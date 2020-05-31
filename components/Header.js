import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 30px;
  color: black;
`

const Header = ({ children }) => (
  <HeaderWrapper>
    <HeaderText>{children}</HeaderText>
  </HeaderWrapper>
)

export default Header
