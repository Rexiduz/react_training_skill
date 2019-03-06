import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'react-emotion'

const StyledDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100wv',
  height: '80px',
  '.top-bar-heading': {
    paddingLeft: '100px',
    fontWeight: 'bold',
    fontSize: '19px'
  },
  '.top-bar-menu': {
    display: 'flex',
    '.top-bar-menu-item': {
      marginLeft: '20px'
    }
  },
  '.top-bar-check-out': {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '100px',
    '.top-bar-check-out-item': {
      marginLeft: '5px',
      marginRight: '5px'
    },
    '.top-bar-check-out-item-icon': {
      marginLeft: '10px'
    }
  },
  a: {
    ':hover': {
      cursor: 'pointer',
      color: '#ec6569'
    }
  }
})

const TopBar = () => (
  <StyledDiv>
    <div className={'top-bar-heading'}>Septemberis12</div>
    <div className={'top-bar-menu'}>
      <a className={'top-bar-menu-item'}>HOME</a>
      <a className={'top-bar-menu-item'}>PRODUCTS</a>
      <a className={'top-bar-menu-item'}>PROJECTS</a>
      <a className={'top-bar-menu-item'}>SERVICES</a>
      <a className={'top-bar-menu-item'}>ARTICLE</a>
      <a className={'top-bar-menu-item'}>CONTACT</a>
    </div>
    <div className={'top-bar-check-out'}>
      <a className={'top-bar-check-out-item-joint'}>JOIN</a>
      <a className={'top-bar-check-out-item'}>|</a>
      <a className={'top-bar-check-out-item-login'}>LOGIN</a>
      <FontAwesomeIcon
        className={'top-bar-check-out-item-icon'}
        icon={faShoppingCart}
      />
    </div>
  </StyledDiv>
)

export default TopBar
