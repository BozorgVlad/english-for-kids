import Component from '../Components/component';
import Switcher from '../Switcher/switcher';
import cards from '../../data/cards';

export default class Header extends Component {
  constructor(wrapper, categories) {
    super();
    this.wrapper = wrapper;
    this.header = document.createElement('header');
    this.categories = categories;
    this.data = cards;
  }

  renderHeader() {
    this.header.classList.add('header');
    this.wrapper.append(this.header);
    this.renderNav();
    this.renderMenu();
    this.renderTitle();
    const switcher = new Switcher(this.header);
    switcher.renderSwitcher();
    this.bindEvents();
  }

  renderNav() {
    this.renderComponent(this.header, 'nav', 'navigation');
    this.renderComponent(document.querySelector('nav'), 'div', 'button-burger-wrapper');
    this.renderComponent(document.querySelector('nav div'), 'button', 'button-burger');
    for (let i = 0; i < 3; i += 1) {
      this.renderComponent(document.querySelector('.button-burger'), 'span', `line line-${i}`);
    }
  }

  renderTitle() {
    this.renderComponent(this.header, 'h1', 'title');
    document.querySelector('h1').innerText = 'English';
  }

  renderMenu() {
    this.renderComponent(document.querySelector('.navigation'), 'ul', 'menu');
    for (let i = 0; i < this.categories; i += 1) {
      this.renderComponent(document.querySelector('.menu'), 'a', `menu-link link${i}`);
      document.querySelector(`.link${i}`).innerText = `${this.data[0][i]}`;
      document.querySelector(`.link${i}`).setAttribute('href', `#cards${i}`);
    }
  }

  bindEvents() {
    this.wrapper.addEventListener('click', (e) => this.addMenuBurger(e));
  }

  addMenuBurger(e) {
    const button = document.querySelector('.button-burger');
    const menu = document.querySelector('.menu');
    const line1 = document.querySelector('.line-0');
    const line2 = document.querySelector('.line-1');
    const line3 = document.querySelector('.line-2');

    if (e.target === button && this.header) {
      button.classList.toggle('button--active');
      line1.classList.toggle('line-0--active');
      line2.classList.toggle('hidden');
      menu.classList.toggle('menu--active');
      line3.classList.toggle('line-2--active');
    }
    if (e.target.classList.contains('menu-link') || e.target !== button || e.target.classList.contains('wrapper')) {
      this.closeMenu();
    }
  }

  closeMenu() {
    const button = document.querySelector('.button-burger');
    const menu = document.querySelector('.menu');
    const line1 = document.querySelector('.line-0');
    const line2 = document.querySelector('.line-1');
    const line3 = document.querySelector('.line-2');

    if (this.header) {
      button.classList.remove('button--active');
      line1.classList.remove('line-0--active');
      line2.classList.remove('hidden');
      menu.classList.remove('menu--active');
      line3.classList.remove('line-2--active');
    }
  }
}
