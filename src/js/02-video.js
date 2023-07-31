import Player from '@vimeo/player';

import { throttle } from 'lodash';

// звернення до iframe  в DOM
const iframe = document.querySelector('iframe');

// ініціалізація бібліотеки 
const player = new Player(iframe, {
 loop: true,
  fullscreen: true,
  quality: 'auto',
});
// запис ключа в сховище 
const localStorageKey = 'videoplayer-current-time';

// відстеження оновлення часу

player.on('timeupdate', throttle((e) => {
    localStorage.setItem(localStorageKey, e.seconds); // Час відтворення оновлюється у сховищі не частіше, ніж раз на секунду
}, 1000));

// Перевірка наявності методу setCurrentTime та відновлення часу відтворення зі збереженої позиції під час перезавантаження сторінки.
if (player.setCurrentTime) {
  const currentTime = localStorage.getItem(localStorageKey);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}



