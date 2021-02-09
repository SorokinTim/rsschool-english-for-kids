import styles from './StatisticPage.module.css';
import Menu from '../../elements/Menu/Menu';
import SideMenu from '../../elements/SideMenu/SideMenu';
import StatisticTable from '../../elements/StatisticTable/StatisticTable';
import Button from '../../elements/Button/Button';
import { initializeLocalStorage } from '../../business-logic-layer/local-storage-logic';
import pageReducer from '../../business-logic-layer/pageReducer';
import APP_STATE from '../../business-logic-layer/default-app-state';

export default class StatisticPage {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.menu = new Menu({
      changeSideMenuFn: () => this.sideMenu.changeSideMenuState(),
      pages: this.props.pages,
    });

    this.sideMenu = new SideMenu({
      pages: this.props.pages,
    });

    this.container = document.createElement('div');

    this.refreshButton = new Button({
      icon: 'refresh',
      title: 'Reset statistic',
      listenerFn: () => this.resetStatisticOnClick(),
    }).getElement();
  }

  resetStatisticOnClick() {
    initializeLocalStorage();
    pageReducer({
      type: APP_STATE.currentPath,
      pages: this.props.pages,
    });
  }

  applyStyleToElements() {
    this.container.classList.add(styles.container);
    this.refreshButton.classList.add(styles.button);
  }

  insertChildrenToElement() {
    this.container.appendChild(new StatisticTable({ pages: this.props.pages }).getElement());

    this.element.appendChild(this.sideMenu.getElement());
    this.element.appendChild(this.menu.getElement());
    this.element.appendChild(this.container);
    this.element.appendChild(this.refreshButton);
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
