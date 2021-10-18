import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 프로필 이미지 링크
const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/92704995?v=4'

const ProfileImageWrapper = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-right: 16px;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
