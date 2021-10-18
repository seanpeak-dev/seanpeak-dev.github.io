import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

// 프로필 이미지 링크
/* const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/92704995?v=4' */

const ProfileImageWrapper = styled(GatsbyImage)`
  min-width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-right: 16px;
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
