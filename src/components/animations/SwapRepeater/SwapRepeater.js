import React from 'react'
import styled from 'react-emotion'

const StyledAnimationZoom = styled('div')({
  margin: 0,
  padding: 0,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.container': {
    position: 'relative',
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    span: {
      position: 'absolute',
      animation: 'animate 10s linear infinite',
      ':nth-child(1)': {
        animationDelay: '0s'
      },
      ':nth-child(2)': {
        animationDelay: '2s'
      },
      ':nth-child(3)': {
        animationDelay: '4s'
      },
      ':nth-child(4)': {
        animationDelay: '6s'
      },
      ':nth-child(5)': {
        animationDelay: '8s'
      }
    },
    '@keyframes animate': {
      '0%': {
        //   transform: 'translate3d(0,-4px,0)'
        width: 0,
        height: 0,
        opacity: 1,
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, .5)'
      },
      '100%': {
        width: '100%',
        height: '100%',
        opacity: 0,
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 1)'
      }
    }
  }
})

const StyledAnimationSwap = styled('div')(({ src }) => ({
  margin: 0,
  padding: 0,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.container': {
    position: 'relative',
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      position: 'absolute',
      animation: 'animate 1s alternate infinite'
    },
    '@keyframes animate': {
      '0%': {
        transform: 'translate3d(0,-10px,0);'
      },
      '100%': {
        transform: 'translate3d(0,10px,0);'
      }
    }
  }
}))

const ZoomRepeater = () => (
  <StyledAnimationZoom>
    <div className={'container'}>
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </StyledAnimationZoom>
)

const SwapRepeater = ({ src }) => (
  <StyledAnimationSwap src={src}>
    <div className={'container'}>
      <img src={src} alt={'coin'} />
    </div>
  </StyledAnimationSwap>
)

export { ZoomRepeater, SwapRepeater }
