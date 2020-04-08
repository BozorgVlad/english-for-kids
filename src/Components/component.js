export default class Component {
  constructor() {
    this.body = document.querySelector('body');
  }

  renderComponent(parentNode, el, ...classes) {
    if (this.body) {
      const element = document.createElement(el);
      element.className = classes;
      parentNode.append(element);
    }
  }
}
