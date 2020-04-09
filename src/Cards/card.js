import Component from '../Components/component';
import cards from '../../data/cards';

export default class Card extends Component {
  constructor(wrapper) {
    super();
    this.data = cards;
    this.wrapper = wrapper;
  }

  renderCategoryCard() {
    for (let i = 0; i < this.data[0].length; i += 1) {
      this.renderComponent(this.wrapper, 'a', `card card-${i}`);
      document.querySelector(`.card-${i}`).setAttribute('href', `#cards${i}`);
      this.renderComponent(document.querySelector(`.card-${i}`), 'h3', `card-title card-title-${i}`);
      document.querySelector(`.card-title-${i}`).innerText = `${this.data[0][i]}`;
      this.renderComponent(document.querySelector(`.card-${i}`), 'div', `img-container img-container-${i}`);
      this.renderComponent(document.querySelector(`.img-container-${i}`), 'img', `image image-${i}`);
      document.querySelector(`.image-${i}`).src = this.data[i + 1][i + 1].image;
    }
  }

  renderCardsContainer() {
    this.renderComponent(document.querySelector('.cards-wrapper'), 'div', 'card-container');
  }

  renderFrontCard(num) {
    for (let i = 0; i < this.data[num + 1].length; i += 1) {
      const container = document.createElement('div');
      const front = document.createElement('div');
      front.classList.add('front');
      container.classList.add('card-container');
      document.querySelector('.cards-wrapper').append(container);
      container.append(front);
      front.style.backgroundImage = `url(${this.data[num + 1][i].image})`;
    }
  }

  renderCards(num) {
    for (let i = 0; i < this.data[num + 1].length; i += 1) {
      this.renderComponent(document.querySelector('.card-container'), 'div', `card card-${i}`);
      this.renderComponent(document.querySelector(`.card-${i}`), 'h3', `card-title card-title-${i}`);
      document.querySelector(`.card-title-${i}`).innerText = this.data[num + 1][i].word;
      this.renderComponent(document.querySelector(`.card-${i}`), 'div', `img-container img-container-${i}`);
      this.renderComponent(document.querySelector(`.img-container-${i}`), 'img', `image image-${i}`);
      document.querySelector(`.image-${i}`).src = this.data[num + 1][i].image;
      this.renderComponent(document.querySelector(`.card-${i}`), 'button', 'button-translate');
    }
    document.querySelectorAll('.button-translate').forEach((el) => {
      const elem = el;
      elem.innerText = 'Translate';
    });
    this.bindEvents();
  }

  bindEvents() {
    this.wrapper.addEventListener('click', (e) => this.addCardClickEvent(e));
  }

  addCardClickEvent(e) {
    if (this.wrapper) {
      if (e.target.classList.contains('button-translate')) {
        e.target.closest('.card').classList.add('flip');
        console.log(e.target.closest('.card'));
      }
    }
  }
}
