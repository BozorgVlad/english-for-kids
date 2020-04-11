import Component from '../Components/component';
import Card from '../Cards/card';
import MODE from '../constants';

export default class Main extends Component {
  constructor(wrapper) {
    super();
    this.main = document.createElement('main');
    this.wrapper = wrapper;
    this.button = '';
  }

  renderMain() {
    this.wrapper.append(this.main);
    this.main.classList.add('main');
    this.renderComponent(this.main, 'div', 'cards-wrapper');
    const cards = new Card(document.querySelector('.cards-wrapper'));
    cards.renderCategoryCard();
    this.renderStartButton();
    this.bindEvents();
  }

  renderStartButton() {
    this.button = Component.createNode(this.button, 'button', 'button-start hidden');
    this.main.append(this.button);
  }

  update(state) {
    if (this.wrapper) {
      const mode = state;
      if (mode === MODE.play) {
        document.querySelector('.button-start').classList.remove('hidden');
      }
      if (mode === MODE.train) {
        document.querySelector('.button-start').classList.add('hidden');
        console.log(2);
      }
    }
  }

  bindEvents() {
    this.wrapper.addEventListener('click', (e) => this.addClickCardHandler(e));
    this.wrapper.addEventListener('click', (e) => Main.addPlayAudioOnClick(e));
  }

  static addPlayAudioOnClick(e) {
    if (e.target.closest('.card')) {
      const audio = new Audio(e.target.closest('.card').getAttribute('data-audio'));
      audio.play();
    }
  }

  addClickCardHandler(e) {
    if (this.wrapper) {
      if (e.target.closest('.card-category')) {
        const href = e.target.closest('.card-category').getAttribute('href');
        if (href) {
          const num = parseInt(href.match(/\d+/), 10);
          if (document.querySelector('.cards-wrapper')) {
            document.querySelector('.cards-wrapper').remove();
            this.renderComponent(this.main, 'div', 'cards-wrapper');
            const cards = new Card(document.querySelector('.cards-wrapper'));
            cards.renderSetOfCards(num);
          }
        }
      }
    }
  }
}
