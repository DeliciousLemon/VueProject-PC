import Vue from 'vue'
import { Button, Carousel, CarouselItem, pagination, MessageBox,Message } from 'element-ui'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(pagination)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;