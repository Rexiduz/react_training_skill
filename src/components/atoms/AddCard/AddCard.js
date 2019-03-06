import React, { Component } from 'react'
import styled from 'react-emotion'
import Grid from '@material-ui/core/Grid'

const StyledGrid = styled(Grid)({})
class AddCard extends Component {
  render() {
    return (
      <StyledGrid container xs={12}>
        <Grid item xs={6}>
          Hello
        </Grid>
        <Grid item xs={6}>
          Hello
        </Grid>
      </StyledGrid>
    )
  }
}

export default AddCard
