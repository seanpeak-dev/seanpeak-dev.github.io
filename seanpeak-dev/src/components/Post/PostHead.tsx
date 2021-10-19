import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadWrapper = styled.header`
  & h3 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 0px;
    margin-bottom: 1.722rem;
    font-size: 1.31951rem;
    line-height: 1.1;

    & a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`
const Title = styled.h1`
  margin-top: 1.722rem;
  margin-bottom: 0px;
`
const PostData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8px;
  margin-bottom: 8px;

  & p {
    font-size: 0.87055rem;
    line-height: 1.722rem;
    display: block;
    margin-bottom: 1.722rem;
  }

  & div {
    font-size: 0.87055rem;
    font-weight: 700;
    margin-bottom: 1.722rem;
  }
`

const PostHead: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <h3>
        <Link to="/">seanpeak</Link>
      </h3>
      <Title>{title}</Title>
      <PostData>
        <p>{date}</p>
        <div>{categories.join(' | ')}</div>
      </PostData>
    </PostHeadWrapper>
  )
}

export default PostHead
