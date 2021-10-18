import React, { FunctionComponent } from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}
export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
    }
  }
}

/* const POST_ITEM_DATA = {
  title: '가장 빠르게 지식과 스킬을 쌓는 방법',
  date: '2021.10.19.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary: '인풋이 아닌, 아웃풋 중심으로 노력하기',
  link: '<https://www.google.co.kr/>',
} */

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <main>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </main>
  )
}

export default PostList
