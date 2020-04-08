export default class Header {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.header = '';
  }

  renderHeader() {
    this.header = document.createElement('header');
    this.header.classList.add('header');
    this.wrapper.append(this.header);
  }
}
