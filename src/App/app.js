import Header from '../Header/header';
import Main from '../Main/mainblock';

class App {
  constructor() {
    this.wrapper = document.createElement('div');
  }

  renderBasicLayout() {
    this.wrapper.classList.add('wrapper');
    document.body.append(this.wrapper);

    const header = new Header(this.wrapper, 6);
    header.renderHeader();

    const main = new Main(this.wrapper);
    main.renderMain();
  }
}

const app = new App();

app.renderBasicLayout();
