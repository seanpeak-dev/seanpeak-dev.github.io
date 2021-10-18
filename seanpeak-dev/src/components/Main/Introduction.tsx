import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

const Title = styled.h1`
  font-size: 3.4822rem;
  line-height: 4.305rem;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  text-decoration: none;
`
const SubTitle = styled.p`
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
`
const Container = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  margin-top: 15px;

  & div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`
const ProfileText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  margin-left: 0;
  height: 130px;
  display: flex;
  align-items: center;
  vertical-align: center;
  background-color: #f9f9f9;
  padding: 16px;
`

const Introduction: FunctionComponent = function () {
  return (
    <header>
      <Title>seanpeak</Title>
      <SubTitle>안녕하세요.</SubTitle>
      <Container>
        <div>
          <ProfileImage />
          <ProfileText>
            러닝맨은 당신의 배움과 성장을 도와줄 미디어입니다. 배우는 인간
            4명(Eddy, Jesse, Kay, Robbie)의 성장 프로젝트이기도 합니다. 각자
            격주로 글을 올립니다. 직접 경험한 생각만 담습니다. 멋있는 척 하지
            않습니다. [러닝맨 구독하기]
          </ProfileText>
        </div>
      </Container>
    </header>
  )
}

export default Introduction
