import Component from '../Components/component';
import Card from '../Cards/card';

export default class Main extends Component {
  constructor(wrapper) {
    super();
    this.main = document.createElement('main');
    this.wrapper = wrapper;
  }

  renderMain() {
    this.wrapper.append(this.main);
    this.main.classList.add('main');
    this.renderComponent(this.main, 'div', 'cards-wrapper');
    const cards = new Card(document.querySelector('.cards-wrapper'));
    cards.renderCategoryCard();
  }
}
