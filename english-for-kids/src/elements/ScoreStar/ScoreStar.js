import styles from './ScoreStar.module.css';
import * as constants from '../../business-logic-layer/constants';

export default class ScoreStar {
  constructor(props = {}) {
    this.element = document.createElement('span');
    this.props = props;
  }

  createChildrenElements() {
    this.element.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.element.innerText = 'star_rate';
  }

  applyStyleToElements() {
    this.element.classList.add(styles.star);
    this.applyStyleToElementByType();
  }

  applyStyleToElementByType() {
    if (this.props.type === constants.DEFAULT_SUCCESS_TYPE) {
      this.element.classList.add(styles.star_success);
    } else {
      this.element.classList.add(styles.star_error);
    }
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    return this.element;
  }
}
