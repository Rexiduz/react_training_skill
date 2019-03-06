import React from 'react'
import styled, { cx } from 'react-emotion'

const StyledCard = styled('div')({
  '.product-card-image': {
    objectFit: 'cover',
    width: '100%',
    height: '340px'
  },
  '.product-card-content': {
    textAlign: 'center',
    '.product-card-content-price': {
      color: '#8c8d8e'
    }
  }
})

const ProductCard = ({
  src = 'http://lorempixel.com/640/480',
  title,
  price,
  className
}) => {
  return (
    <StyledCard className={cx('ProductCard', className)}>
      <div>
        <img className={'product-card-image'} src={src} alt="product-card" />
      </div>
      <div className={'product-card-content'}>
        <div className={'product-card-content-title'}>{title}</div>
        <div className={'product-card-content-price'}>{`USD ${price}`}</div>
      </div>
    </StyledCard>
  )
}

export default ProductCard
