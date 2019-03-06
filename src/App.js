import React, { Component } from 'react'

import styled, { cx } from 'react-emotion'
import Grid from '@material-ui/core/Grid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faLayerGroup,
  faRetweet,
  faExchangeAlt,
  faStarOfLife
} from '@fortawesome/free-solid-svg-icons'

import {
  Home,
  LayerImage,
  TextBlockEffect,
  BtnEffect,
  SwapRepeater
} from './pages'

const StyledDiv = styled('div')({
  '.item-selected': {
    backgroundColor: 'lightgrey'
  },
  display: 'flex',
  '.left-bar': {
    width: 50,
    height: '100vh',
    position: 'fixed',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    div: {
      height: '8vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ':hover': {
        cursor: 'pointer',
        backgroundColor: 'lightgrey'
      }
    }
  },
  '> div:last-child': {
    width: 'calc(100vw - 50px)',
    paddingLeft: 50
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewName: 'home',
      view: <Home />
    }
  }

  render() {
    const { viewName, view } = this.state
    const { className } = this.props
    return (
      <StyledDiv className={cx('AppStyled', className)} container>
        <Grid
          className={'left-bar'}
          container
          justify={'space-between'}
          alignItems={'center'}
          direction={'column'}
        >
          <Grid
            className={viewName === 'home' ? 'item-selected' : ''}
            item
            onClick={() => this.setState({ view: <Home />, viewName: 'home' })}
          >
            <FontAwesomeIcon icon={faHome} />
          </Grid>
          <Grid
            className={viewName === 'swap' ? 'item-selected' : ''}
            item
            onClick={() =>
              this.setState({ view: <SwapRepeater />, viewName: 'swap' })
            }
          >
            <FontAwesomeIcon icon={faRetweet} />
          </Grid>
          <Grid
            className={viewName === 'btnEff' ? 'item-selected' : ''}
            item
            onClick={() =>
              this.setState({
                view: <BtnEffect>Button Effect</BtnEffect>,
                viewName: 'btnEff'
              })
            }
          >
            <FontAwesomeIcon icon={faExchangeAlt} />
          </Grid>
          <Grid
            className={viewName === 'layer' ? 'item-selected' : ''}
            item
            onClick={() =>
              this.setState({ view: <LayerImage />, viewName: 'layer' })
            }
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </Grid>
          <Grid
            className={viewName === 'textEff' ? 'item-selected' : ''}
            item
            onClick={() =>
              this.setState({
                view: <TextBlockEffect>TextBlockEffect</TextBlockEffect>,
                viewName: 'textEff'
              })
            }
          >
            <FontAwesomeIcon icon={faStarOfLife} />
          </Grid>
        </Grid>
        <div>{view}</div>
      </StyledDiv>
    )
  }
}
export default App
