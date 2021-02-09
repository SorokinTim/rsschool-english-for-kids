import styles from './MenuItem.module.css';
import pageReducer from '../../business-logic-layer/pageReducer';
import APP_STATE from '../../business-logic-layer/default-app-state';
import * as constants from '../../business-logic-layer/constants';

export default class MenuItem {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.menuItem = document.createElement('div');

    this.menuItemIcon = document.createElement('span');
    this.menuItemIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.menuItemIcon.innerText = this.props.iconName;

    this.menuItemText = document.createElement('span');
    this.menuItemText.innerText = this.props.title;
  }

  insertChildrenToElement() {
    this.menuItem.appendChild(this.menuItemIcon);
    this.menuItem.appendChild(this.menuItemText);

    this.element.appendChild(this.menuItem);
  }

  applyStyleToElements() {
    this.menuItem.classList.add(styles.item);
    this.menuItemIcon.classList.add(styles.item__icon);
    this.menuItemText.classList.add(styles.item__text);
  }

  applyEventListenersToElements() {
    this.element.addEventListener('click', () => {
      pageReducer({
        type: this.props.id,
        pages: this.props.pages,
      });
      APP_STATE.currentPath = this.props.id;
    });
  }

  getElement() {
    this.createChildrenElements();

    this.applyEventListenersToElements();

    this.insertChildrenToElement();

    this.applyStyleToElements();

    return this.element;
  }
}
