import React from 'react'
import styled from 'react-emotion'

const StyledComponent = styled('StyledComponent')({
  margin: 0,
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#2196f3',
  a: {
    position: 'relative',
    padding: '20px 20px 20px 30px',
    color: '#fff',
    fontSize: '60px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    transition: '0.5s',
    ':before,  :after': {
      content: `''`,
      position: 'absolute',
      width: '2px',
      height: '100%',
      background: '#fff',
      pointerEvents: 'none',
      transformStyle: 'linear',
      transitionProperty: 'width, opacity, transform, box-shadow',
      transitionDuration: '0.5s'
    },
    ':before': {
      top: 0,
      left: 0
    },
    ':after': {
      top: 0,
      right: 0
    },
    ':hover': {
      background: '#2196f3',
      transitionDelay: '2s',
      boxShadow: '-30px 30px 50px rgba(0, 0, 0, .4)',
      transform: 'rotate(-30deg) skew(25deg)',
      ':before': {
        width: '100%',
        opacity: 0.1,
        transform: 'translate(5px, -5px)',
        boxShadow: '+2px 2px 2px rgba(0, 0, 0, .1)',
        transitionDelay: '0s, 0.5s, 1s, 1.5s'
      },
      ':after': {
        width: '100%',
        opacity: 0.1,
        transform: 'translate(10px, -10px)',
        boxShadow: '+2px 2px 2px rgba(0, 0, 0, .1)',
        transitionDelay: '0s, 0.5s, 1s, 1.5s'
      }
    }
  }
})

const TextBlockEffect = ({ children }) => (
  <StyledComponent>
    <a href="#">{children}</a>
  </StyledComponent>
)

export default TextBlockEffect
