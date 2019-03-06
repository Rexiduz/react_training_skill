import React, { Component } from 'react'
import styled, { cx } from 'react-emotion'
import { ProductCard } from '../../atoms'
import { productSet } from './mock'
import Grid from '@material-ui/core/Grid'

const StyledProductPreviewer = styled('div')({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  textAlign: 'center',
  '.preview': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '.ProductCard': {
    padding: '30px',
    width: '270px'
  }
})

class ProductPreviewer extends Component {
  render() {
    return (
      <StyledProductPreviewer>
        <Grid container xs={12}>
          {productSet.map(({ img, title, price }) => (
            <Grid className={'preview'} item xs={4} justifyContent="center">
              <ProductCard src={img} title={title} price={price} />
            </Grid>
          ))}
        </Grid>
      </StyledProductPreviewer>
    )
  }
}

export default ProductPreviewer
