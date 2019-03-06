import React from 'react'
import { TagEffect } from '../components/animations'

import { StyledSuggestionText } from './styled-shared'

export default ({ children }) => (
  <StyledSuggestionText>
    <div>Please hover button</div>
    <TagEffect>{children}</TagEffect>
  </StyledSuggestionText>
)
