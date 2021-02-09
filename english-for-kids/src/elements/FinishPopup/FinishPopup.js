import styles from './FinishPopup.module.css';
import * as constants from '../../business-logic-layer/constants';

export default class FinishPopup {
  constructor(props = {}) {
    this.element = document.createElement('span');
    this.props = props;
  }

  createChildrenElements() {
    this.popup = document.createElement('div');

    this.popupIcon = document.createElement('span');
    this.popupIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.setIconByElementType();

    this.popupTitle = document.createElement('span');
    this.popupTitle.innerText = this.props.title;
  }

  applyStyleToElements() {
    this.element.classList.add(styles.container);
    this.popup.classList.add(styles['pop-up']);
    this.popupTitle.classList.add(styles['pop-up__title']);
    this.popupIcon.classList.add(styles['pop-up__icon']);
  }

  setIconByElementType() {
    if (this.props.type === constants.DEFAULT_SUCCESS_TYPE) {
      this.popupIcon.innerText = 'check_circle';
    } else {
      this.popupIcon.innerText = 'highlight_off';
    }
  }

  insertChildrenToElement() {
    this.popup.appendChild(this.popupIcon);
    this.popup.appendChild(this.popupTitle);

    if (this.props.type === constants.DEFAULT_FAILURE_TYPE) {
      this.showWrongAnswers();
    }

    this.element.appendChild(this.popup);
  }

  applyEventListenersToElements() {
    this.element.addEventListener('click', (event) => {
      if (event.toElement === this.element) {
        this.props.moveToHomePageFn();
      }
    });
  }

  showWrongAnswers() {
    this.popupWrong = document.createElement('span');
    this.popupWrong.innerText = `Wrong answers: ${this.props.wrongAnswers}`;

    this.popupWrong.classList.add(styles['pop-up__wrong-answers']);

    this.popup.appendChild(this.popupWrong);
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.applyEventListenersToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
