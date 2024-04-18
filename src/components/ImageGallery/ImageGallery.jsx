// ImageGallery.js
import React from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({ cards, openModal }) => {
  console.log("Cards in ImageGallery:", cards);
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li key={card.id} className={css.galleryItem} onClick={() => {
          openModal(card)
          console.log('cardInsideLi',card)
        }} >
          <ImageCard key={card.id} modalData={card}/>
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
