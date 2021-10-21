import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

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
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 364px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
      font-size: 12px;
    }
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

  & div {
    display: block;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <header>
      <Title>Sean</Title>
      <SubTitle>지속 가능한 개발자</SubTitle>
      <Container>
        <div>
          <ProfileImage profileImage={profileImage} />
          <ProfileText>
            <div>
              안녕하세요. 웹 프론트엔드 개발자 Sean입니다. 배우는 한 인간의 성장
              프로젝트입니다. 개발자로서의 지속 가능한 삶을 고민하고 있습니다.
              &nbsp;
              <a href="https://github.com/seanpeak-dev">[깃허브 바로가기]</a>
            </div>
          </ProfileText>
        </div>
      </Container>
    </header>
  )
}

export default Introduction
