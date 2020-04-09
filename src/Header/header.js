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
}
