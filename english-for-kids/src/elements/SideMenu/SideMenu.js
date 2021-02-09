import styles from './SideMenu.module.css';
import MenuItem from '../MenuItem/MenuItem';
import APP_STATE from '../../business-logic-layer/default-app-state';

export default class SideMenu {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.itemContainer = document.createElement('div');
  }

  insertChildrenToElement() {
    this.renderMenuItems();

    this.element.appendChild(this.itemContainer);
  }

  applyStyleToElements() {
    this.element.classList.add(styles['side-menu'], styles['side-menu_disable']);
    this.itemContainer.classList.add(styles['side-menu__container']);
  }

  renderMenuItems() {
    APP_STATE.menu.forEach((item) => {
      this.itemContainer.appendChild(new MenuItem({
        iconName: item.iconName,
        title: item.title,
        id: item.id,
        pages: this.props.pages,
      }).getElement());
    });
  }

  changeSideMenuState() {
    if (this.element.classList.contains(styles['side-menu_active'])) {
      this.element.classList.remove(styles['side-menu_active']);
      this.element.classList.add(styles['side-menu_disable']);
    } else if (this.element.classList.contains(styles['side-menu_disable'])) {
      this.element.classList.remove(styles['side-menu_disable']);
      this.element.classList.add(styles['side-menu_active']);
    }
  }

  getElement() {
    this.createChildrenElements();

    this.insertChildrenToElement();

    this.applyStyleToElements();

    return this.element;
  }
}
