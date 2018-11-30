import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import './element-variables.scss'
// Vue.use(ElementUI);
import { Container, Header, Main, Footer, Menu, MenuItem, Carousel, CarouselItem, Button, Card, Row, Col } from 'element-ui';
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
