import './style.css'
import LocomotiveScroll from 'locomotive-scroll';

let scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
