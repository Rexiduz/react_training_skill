import React from 'react'
import styled from 'react-emotion'

const StyledComponent = styled('div')(({ src }) => ({
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  overflow: 'hidden',
  '.container': {
    position: 'relative',
    width: '360px',
    height: '640px',
    marginTop: '150px',
    background: 'rgba(0, 0, 0,.1)',
    transform: 'rotate(-30deg) skew(25deg) scale(.8)',
    ':hover': {
      cursor: 'pointer'
    }
  },
  '.layer': {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    background: `url(${src})`,
    backgroundSize: 'cover',
    transition: '.5s'
  },
  '.container:hover .layer:nth-child(4)': {
    transform: 'translate(160px, -160px)',
    opacity: 1
  },
  '.container:hover .layer:nth-child(3)': {
    transform: 'translate(120px, -120px)',
    opacity: 0.8
  },
  '.container:hover .layer:nth-child(2)': {
    transform: 'translate(80px, -80px)',
    opacity: 0.6
  },
  '.container:hover .layer:nth-child(1)': {
    transform: 'translate(40px, -40px)',
    opacity: 0.4
  },
  '.container:hover .layer:nth-child(0)': {
    transform: 'translate(160px, -160px)',
    opacity: 0.2
  }
}))

const LayeredImageHover = ({ src }) => (
  <StyledComponent src={src}>
    <div className={'container'}>
      <div className={'layer'} />
      <div className={'layer'} />
      <div className={'layer'} />
      <div className={'layer'} />
    </div>
  </StyledComponent>
)

export default LayeredImageHover
