import Component from '../Components/component';

export default class Header extends Component {
  constructor(wrapper) {
    super();
    this.wrapper = wrapper;
    this.header = document.createElement('header');
  }

  renderHeader() {
    this.header.classList.add('header');
    this.wrapper.append(this.header);
    this.renderNav();
  }

  renderNav() {
    this.renderComponent(this.header, 'nav', 'navigation');
    this.renderComponent(document.querySelector('nav'), 'div', 'button-burger-wrapper');
    this.renderComponent(document.querySelector('nav div'), 'button', 'button-burger');
    for (let i = 0; i < 3; i += 1) {
      this.renderComponent(document.querySelector('.button-burger'), 'span', `line line-${i}`);
    }
  }
}
