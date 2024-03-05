import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/bi_x-octagon.png';

export function searchImages(keyword) {
  const KEY = '42691654-856ee9298c14d5c2eed97729f';
  const mainURL = ' https://pixabay.com/api/';
  const loader = document.querySelector('.loader');

  loader.style.display = 'block';

  return fetch(
    `${mainURL}?key=${KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Image error! ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          messageColor: '#ffffff',
          position: 'topRight',
          iconUrl: cross,
        });
      }
      return data;
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
      loader.style.display = 'none';
    });
}
