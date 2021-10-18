import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryList'
import Footer from 'components/Common/Footer'
import PostList from 'components/Main/PostList'
import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Wrapper = styled.div`
  outline: none;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 41.328rem;
  padding: 2.583rem 1.2915rem;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Introduction profileImage={gatsbyImageData} />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList posts={edges} />
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 160, height: 160)
      }
    }
  }
`
