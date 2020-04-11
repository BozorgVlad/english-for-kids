import Component from '../Components/component';
import Observer from '../Observer/mode';
import Main from '../Main/mainblock';
import MODE from '../constants';

export default class Switcher extends Component {
  constructor(header) {
    super();
    this.header = header;
    this.input = '';
    this.switcher = '';
  }

  renderSwitcher() {
    this.switcher = Component.createNode(this.switcher, 'form', 'switcher');
    this.header.append(this.switcher);
    this.renderInput();
    this.bindEvents();
  }

  renderInput() {
    this.input = Component.createNode(this.input, 'input', 'ch');
    document.querySelector('.switcher').append(this.input);
    this.input.setAttribute('value', 'is_hot');
    this.input.setAttribute('name', 'temperature');
    this.input.type = 'checkbox';
  }

  bindEvents() {
    this.switcher.addEventListener('click', (e) => this.addObserver(e));
  }

  addObserver(e) {
    const observer = new Observer();
    const main = new Main(document.querySelector('.wrapper'));

    observer.follow(main);

    if (e.target === this.input && this.input.checked) {
      observer.setMode(MODE.play);
      console.log(e.target.checked);
    }
    if (!e.target.checked) {
      observer.setMode(MODE.train);
      console.log(e.target.checked);
    }
  }
}
