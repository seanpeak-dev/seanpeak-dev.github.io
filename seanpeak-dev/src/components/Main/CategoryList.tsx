import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
type CategoryItemProps = {
  active: boolean
}
type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  align-items: center;
  display: flex;
`
const CategoryItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))`
  padding: 10px 10px 10px 0;
  margin-right: 16px;
  transition: all;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: 50px;
  text-align: center;
  transition: all, ease-out;
  justify-content: flex-start;
  transition-duration: 0.1s;
  font-weight: ${({ active }) => (active ? '700' : '400')};
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}-{count}
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
