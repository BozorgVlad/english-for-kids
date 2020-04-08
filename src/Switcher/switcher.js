import Component from '../Components/component';

export default class Switcher extends Component {
  constructor(header) {
    super();
    this.header = header;
  }

  renderSwitcher() {
    this.renderComponent(this.header, 'form', 'switcher');
    this.renderInput();
  }

  renderInput() {
    this.renderComponent(document.querySelector('.switcher'), 'input', 'ch');
    document.querySelector('.ch').setAttribute('value', 'is_hot');
    document.querySelector('.ch').setAttribute('name', 'temperature');
    document.querySelector('.ch').type = 'checkbox';
  }
}
