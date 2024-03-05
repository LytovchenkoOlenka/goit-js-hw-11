'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from './img/bi_x-octagon.png';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery-item a', options);
lightbox.on('show.simplelightbox');

import { addMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const QUERY = form.elements.query.value.trim();

  gallery.innerHTML = '';
  loader.style.display = 'block';

  if (QUERY === '') {
    alert('Please enter a keyword to search for an image');
    return;
  }
  searchImages(QUERY)
    .then(data => {
      gallery.innerHTML = addMarkup(data);
      lightbox.refresh();
      form.reset();
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: `Error${error}`,
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
        position: 'topRight',
        iconUrl: cross,
      });
    });
}
