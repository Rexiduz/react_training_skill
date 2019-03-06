import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledInviteDescription = styled('div')({
  padding: '70px',
  '.title': {
    color: '#ec6569',
    fontSize: '24px'
  },
  '.heading': {
    fontSize: '54px',
    fontWeight: '600'
  },
  '.description': {
    fontSize: '21px',
    marginBottom: '20px',
    marginTop: '20px',
    fontWeight: '300'
  },
  button: {
    marginTop: '30px',
    width: '140px',
    height: '40px',
    border: 'solid  #ec6569 0px',
    backgroundColor: '#ec6569',
    fontWeight: 'bold',
    color: 'white',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

const InviteDescription = () => (
  <StyledInviteDescription>
    <div className={'title'}>Let's Create</div>
    <div className={'heading'}>Spaces That Inspire</div>
    <div className={'description'}>
      Transforming living spaces into award wining homes
    </div>
    <button>SHOP NOW</button>
  </StyledInviteDescription>
)

export default InviteDescription
