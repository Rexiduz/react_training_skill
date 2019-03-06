import React from 'react'
import { TextBlockEffect } from '../components/animations'
import { StyledSuggestionText } from './styled-shared'

export default ({ children }) => (
  <StyledSuggestionText color={'white'}>
    <div>Please hover text</div>
    <TextBlockEffect>{children}</TextBlockEffect>
  </StyledSuggestionText>
)
