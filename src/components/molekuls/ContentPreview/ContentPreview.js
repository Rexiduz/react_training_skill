import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { ImagePreview, InviteDescription } from '../../atoms'

class ContentPreview extends Component {
  render() {
    return (
      <div>
        <Grid container xs={12}>
          <Grid item xs={5}>
            <InviteDescription />
          </Grid>
          <Grid item xs={7}>
            <ImagePreview />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ContentPreview
