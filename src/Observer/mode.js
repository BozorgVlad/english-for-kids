import MODE from '../constants';

export default class Observer {
  constructor() {
    this.state = MODE.train;
    this.actions = [];
  }

  setMode(mode) {
    this.state = mode;
    this.notifyAll();
  }

  notifyAll() {
    this.actions.forEach((element) => {
      element.update(this.state);
    });
  }

  follow(obj) {
    this.actions.push(obj);
  }

  unfollow(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }
}
