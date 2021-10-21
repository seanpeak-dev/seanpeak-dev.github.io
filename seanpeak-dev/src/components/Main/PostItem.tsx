import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostHeader = styled.header`
  & h3 {
    margin-bottom: 0.4305rem;
    margin-top: 3.444rem;
  }

  & small {
    font-size: 80%;
  }
`
const PostSection = styled.section`
  margin-bottom: 1.722rem;

  & p {
    margin: 0;
    padding: 0;
  }
`
const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`
const CategoryItem = styled.div`
  margin: 2.5px 5px;
  background: rgb(241, 243, 245);
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #4665b7;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  link,
}) {
  return (
    <article>
      <PostHeader>
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <small>{date}</small>
      </PostHeader>
      <PostSection>
        <p>{summary}</p>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
      </PostSection>
    </article>
  )
}

export default PostItem
