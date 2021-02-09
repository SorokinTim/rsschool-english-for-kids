import styles from './Menu.module.css';
import APP_STATE from '../../business-logic-layer/default-app-state';
import pageReducer from '../../business-logic-layer/pageReducer';
import * as constants from '../../business-logic-layer/constants';

export default class Menu {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.menu = document.createElement('span');
    this.menu.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.menu.innerText = 'menu';
    this.menuAngle = 0;

    this.brand = document.createElement('h1');
    this.brand.innerText = constants.DEFAULT_APP_BRANDNAME;

    this.switcher = document.createElement('label');

    this.switcherChecker = document.createElement('input');
    this.switcherChecker.type = 'checkbox';
    this.switcherChecker.checked = APP_STATE.playMode;

    this.switcherSlider = document.createElement('span');
  }

  insertChildrenToElement() {
    this.switcher.appendChild(this.switcherChecker);
    this.switcher.appendChild(this.switcherSlider);

    this.element.appendChild(this.menu);
    this.element.appendChild(this.brand);
    this.element.appendChild(this.switcher);
  }

  applyStyleToElements() {
    this.element.classList.add(styles.container);
    this.menu.classList.add(styles.container__menu);
    this.brand.classList.add(styles.container__brand);
    this.switcher.classList.add(styles.switcher);
    this.switcherChecker.classList.add(styles.switcher__checker);
    this.switcherSlider.classList.add(styles.switcher__slider);
  }

  applyEventListenersToElements() {
    this.menu.addEventListener('click', () => {
      this.props.changeSideMenuFn();

      this.menu.style.transform = `rotate(${this.menuAngle += 90}deg)`;
    });

    this.switcherChecker.addEventListener('change', () => {
      setTimeout(() => this.changePlayModeOnApp(), 250);
    });
  }

  changePlayModeOnApp() {
    APP_STATE.playMode = !APP_STATE.playMode;
    pageReducer({
      pages: this.props.pages,
      type: APP_STATE.currentPath,
    });
  }

  getElement() {
    this.createChildrenElements();

    this.insertChildrenToElement();

    this.applyEventListenersToElements();

    this.applyStyleToElements();

    return this.element;
  }
}
