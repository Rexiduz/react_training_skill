import React from 'react'
import styled from 'react-emotion'
import Grid from '@material-ui/core/Grid'
import imagePreview from '../../../asset/ImageBackground.png'

const contentSet = [
  {
    number: '01',
    content: 'Contemporary New Build With Character.',
    place: 'London'
  },
  {
    number: '02',
    content: 'Riverside Apartment With Stunning Views.',
    place: 'Manchester'
  },
  {
    number: '03',
    content: 'City Living With Country Character.',
    place: 'Paris'
  }
]

const StyledImagePreview = styled('div')({
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '560px'
  },
  '.content-card-number': {
    fontWeight: '500',
    fontSize: '22px',
    marginTop: '20px',
    marginBottom: '15px',
    color: '#747b86'
  },
  '.content-card-place': {
    color: '#8a8b8c'
  },
  '.content-card-description': {
    width: '70%',
    height: '60px'
  }
})

const ContentImageBlock = ({ number, description, place }) => (
  <div>
    <div className={'content-card-number'}>{number}</div>
    <div className={'content-card-description'}>{description}</div>
    <div className={'content-card-place'}>{place}</div>
  </div>
)

const ImagePreview = () => {
  return (
    <StyledImagePreview>
      <div>
        <img src={imagePreview} />
      </div>
      <Grid container xs={12}>
        {contentSet.map(({ number, content, place }) => (
          <Grid item xs={4}>
            <ContentImageBlock
              number={number}
              description={content}
              place={place}
            />
          </Grid>
        ))}
      </Grid>
    </StyledImagePreview>
  )
}

export default ImagePreview
