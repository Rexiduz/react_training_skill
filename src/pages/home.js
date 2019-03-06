import React from 'react'
import { TopBar, AddCard } from '../components/atoms'
import { ProductPreviewer, ContentPreview } from '../components/molekuls'
import '../App.css'

export default () => (
  <div className="App">
    <TopBar />
    <ContentPreview />
    <ProductPreviewer />
    {/* <AddCard /> */}
  </div>
)
