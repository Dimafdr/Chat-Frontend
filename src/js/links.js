// Генерирует и возвращает ссылки для продакшена или разработки в зависимости от того,
// где разворачивается проект.

const url = new URL(window.location.href);


// Параметры для разработки.
if (url.hostname === 'localhost') {
  url.port = '3000';
  WebSocketProtocol = 'ws';
}

const wsURL = new URL(url.href);
wsURL.protocol = WebSocketProtocol;

export default {
  root: url.href,
  users: new URL('users', url.href).href,
  login: new URL('login', url.href).href,
  ws: new URL('ws', wsURL.href).href,
};
