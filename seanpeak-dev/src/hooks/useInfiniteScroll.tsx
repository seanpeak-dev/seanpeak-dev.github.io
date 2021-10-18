import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  // observer를 선언
  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      // 단 하나의 요소만 관측할 것이기 때문에 관측 요소 배열 파라미터에 해당하는 entries 인자에는 하나의 데이터만 존재
      if (!entries[0].isIntersecting) return

      // 해당 프로퍼티를 통해 화면에 노출된 경우에는 count 값에 1을 더해주어 10개의 데이터가 추가적으로 출력되도록 한다.
      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  // 선택된 카테고리가 변경된 경우에는 count 값을 1로 변경
  useEffect(() => setCount(1), [selectedCategory])

  // observe 메서드를 사용
  useEffect(() => {
    if (
      // ref로 요소에 제대로 연결되어있는지와 더 불러올 데이터가 있는지 확인
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    // 선택한 요소의 맨 마지막 자식 노드를 관측
    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
