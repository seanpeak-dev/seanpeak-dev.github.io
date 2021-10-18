import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'

const Wrapper = styled.div`
  outline: none;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 41.328rem;
  padding: 2.583rem 1.2915rem;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Introduction />
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default IndexPage
