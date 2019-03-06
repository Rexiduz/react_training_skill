import React from 'react'
import ImageSource from '../../src/asset/social.jpg'
import { LayeredImageHover } from '../components/animations'
import { StyledSuggestionText } from './styled-shared'

export default () => (
  <StyledSuggestionText>
    <div>Please hover image.</div>
    <LayeredImageHover src={ImageSource} />
  </StyledSuggestionText>
)
