import Component from '../Components/component';
import cards from '../../data/cards';

export default class Card extends Component {
  constructor(wrapper) {
    super();
    this.data = cards;
    this.wrapper = wrapper;
    this.card = '';
    this.cardContainer = '';
    this.frontCard = '';
    this.backCard = '';
    this.title = '';
    this.image = '';
    this.button = '';
  }

  renderCategoryCard() {
    for (let i = 0; i < this.data[0].length; i += 1) {
      this.renderComponent(this.wrapper, 'a', `card-category card-${i}`);
      document.querySelector(`.card-${i}`).setAttribute('href', `#cards${i}`);
      this.renderComponent(document.querySelector(`.card-${i}`), 'h3', `card-category-title card-title-${i}`);
      document.querySelector(`.card-title-${i}`).innerText = `${this.data[0][i]}`;
      this.renderComponent(document.querySelector(`.card-${i}`), 'div', `img-container img-container-${i}`);
      this.renderComponent(document.querySelector(`.img-container-${i}`), 'img', `image image-${i}`);
      document.querySelector(`.image-${i}`).src = this.data[i + 1][i + 1].image;
    }
  }

  renderSetOfCards(href) {
    for (let i = 0; i < this.data[href + 1].length; i += 1) {
      this.renderCard(href, i);
    }
    this.bindEvents();
  }

  renderCard(href, i) {
    this.renderCardsContainer();
    this.card = Component.createNode(this.card, 'div', 'card');
    this.cardContainer.append(this.card);
    this.renderFrontCard(href, i);
    this.renderBackCard(href, i);
    this.renderFrontCardTitle(href, i);
    this.renderBackCardTitle(href, i);
    this.renderButton();
  }

  renderCardsContainer() {
    this.cardContainer = Component.createNode(this.cardContainer, 'div', 'card-container');
    this.wrapper.append(this.cardContainer);
  }

  renderFrontCardTitle(href, i) {
    this.title = Component.createNode(this.title, 'h3', 'card-title');
    this.title.innerText = this.data[href + 1][i].word;
    this.frontCard.append(this.title);
  }

  renderBackCardTitle(href, i) {
    this.title = Component.createNode(this.title, 'h3', 'card-title');
    this.title.innerText = this.data[href + 1][i].translation;
    this.backCard.append(this.title);
  }

  renderBackCard(href, i) {
    this.backCard = Component.createNode(this.backCard, 'div', 'back');
    this.frontCard.style.backgroundImage = `url(${this.data[href + 1][i].image})`;
    this.card.append(this.backCard);
  }

  renderFrontCard(href, i) {
    this.frontCard = Component.createNode(this.frontCard, 'div', 'front');
    this.frontCard.style.backgroundImage = `url(${this.data[href + 1][i].image})`;
    this.card.append(this.frontCard);
  }

  renderButton() {
    this.button = Component.createNode(this.button, 'button', 'button-translate');
    this.button.innerText = 'Translate';
    this.card.append(this.button);
  }

  bindEvents() {
    this.wrapper.addEventListener('click', (e) => Card.addFlip(e));
    Card.removeFlip();
  }

  static addFlip(e) {
    if (e.target.classList.contains('button-translate')) {
      e.target.closest('.card').classList.add('is-flipped');
    }
  }

  static removeFlip() {
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseleave', () => {
        if (card.classList.contains('is-flipped')) {
          card.classList.remove('is-flipped');
        }
      });
    });
  }
}
