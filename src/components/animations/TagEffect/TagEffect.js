import React from 'react'
import styled from 'react-emotion'

const StyledComponent = styled('StyledComponent')({
  margin: 0,
  padding: 0,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  a: {
    position: 'relative',
    padding: '15px 40px',
    border: '2px solid #000',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 24,
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: 32,
    color: '#000',
    overflow: 'hidden',
    ':before': {
      content: `''`,
      position: 'absolute',
      left: 60,
      top: '50%',
      transform: 'translateY(-50%) scale(.6)',
      width: 10,
      height: 10,
      background: '#ff0052',
      borderRadius: '50%',
      zIndex: -1,
      transitionProperty: 'left, transform',
      transitionDelay: '0s, 0s',
      transitionDuration: '1s, 0.5s',
      opacity: 0
    },
    ':after': {
      content: `''`,
      position: 'absolute',
      right: 60,
      top: '50%',
      transform: 'translateY(-50%) scale(.6)',
      width: 10,
      height: 10,
      background: '#ff0052',
      borderRadius: '50%',
      zIndex: -1,
      transitionProperty: 'right, transform',
      transitionDelay: '0s, 0s',
      transitionDuration: '1s, 0.5s',
      opacity: 0
    },
    ':hover': {
      color: '#fff',
      transitionDelay: '1s',
      ':before': {
        left: 10,
        transform: 'translateY(-50%) scale(30)',
        transitionDelay: '0s, 1s',
        opacity: 1
      },
      ':after': {
        right: 10,
        transform: 'translateY(-50%) scale(30)',
        transitionDelay: '0s, 1s',
        opacity: 1
      }
    }
  }
})

const TagEffect = ({ children }) => (
  <StyledComponent>
    <a href="#">{children}</a>
  </StyledComponent>
)

export default TagEffect
