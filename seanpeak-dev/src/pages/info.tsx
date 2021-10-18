// Emotion 연습용
import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

// CSS 정의 및 글로벌 스타일 지정 방법
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`
// Tagged Template Literal 방식을 통해 정의한 CSS 적용 방법
const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`
// Tagged Template Literal 방식을 통한 Styled Component 생성 방법
// Kebab Case 적용
/* const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
` */
// 객체를 통한 Styled Component 생성 방법
// Camel Case 적용
/* const Text2 = styled('div')(() => ({
  fontSize: '15px',
  color: 'blue',
})) */
// Styled Component에서 Props를 받아 처리하는 방법
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>{' '}
      {/* css props 경고 - 기존의 HTML의 Element 타입을 상속받아 해당 프로퍼티를 추가한 새로운 타입을 정의하면 해결된다. */}
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
