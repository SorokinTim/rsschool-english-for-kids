import styles from './Button.module.css';
import * as constants from '../../business-logic-layer/constants';

export default class Button {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.buttonIcon = document.createElement('span');
    this.buttonIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.buttonIcon.innerText = this.props.icon;

    this.buttonTitle = document.createElement('span');
    this.buttonTitle.innerText = this.props.title;
  }

  insertChildrenToElement() {
    this.element.appendChild(this.buttonIcon);
    this.element.appendChild(this.buttonTitle);
  }

  applyStyleToElements() {
    this.buttonIcon.classList.add(styles.button__icon);
    this.buttonTitle.classList.add(styles.button__title);
    this.element.classList.add(styles.button);
  }

  applyEventListenersToElements() {
    this.element.addEventListener('click', this.props.listenerFn);
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.applyEventListenersToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
