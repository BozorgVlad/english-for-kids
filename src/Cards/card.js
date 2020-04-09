import Component from '../Components/component';
import cards from '../../data/cards';

export default class Card extends Component {
  constructor(wrapper) {
    super();
    this.data = cards;
    this.card = '';
    this.wrapper = wrapper;
  }

  renderCategoryCard() {
    for (let i = 0; i < this.data[0].length; i += 1) {
      this.renderComponent(this.wrapper, 'a', `card card-${i}`);
      this.renderComponent(document.querySelector(`.card-${i}`), 'h3', `card-title card-title-${i}`);
      document.querySelector(`.card-title-${i}`).innerText = `${this.data[0][i]}`;
      this.renderComponent(document.querySelector(`.card-${i}`), 'div', `img-container img-container-${i}`);
      this.renderComponent(document.querySelector(`.img-container-${i}`), 'img', `image image-${i}`);
      document.querySelector(`.image-${i}`).src = this.data[i + 1][i + 1].image;
    }
  }
}
