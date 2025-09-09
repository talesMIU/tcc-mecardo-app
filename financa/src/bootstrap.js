import { createApp } from 'vue';
import Financa from './components/Financa.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Financa);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#only-dev-financa-app');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
