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
  background: rgb(241, 243, 245);
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  margin-top: 15px;
  margin-right: 16px;
  transition: all;
  width: -moz-fit-content;
  width: fit-content;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  transition: all, ease-out;
  justify-content: flex-start;
  transition-duration: 0.1s;
  font-size: 16px;
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
          {name}&nbsp;({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
