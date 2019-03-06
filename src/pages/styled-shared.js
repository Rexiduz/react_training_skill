import styled from 'react-emotion'

export const StyledSuggestionText = styled('div')(({ color }) => ({
  '> div:first-child': {
    color: color,
    fontSize: 30,
    margin: 10,
    position: 'absolute',
    left: '75vw',
    bottom: 80
  }
}))
