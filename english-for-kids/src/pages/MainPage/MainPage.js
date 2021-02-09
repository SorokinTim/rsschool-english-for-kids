import styles from './MainPage.module.css';
import Menu from '../../elements/Menu/Menu';
import SideMenu from '../../elements/SideMenu/SideMenu';
import CategoryCard from '../../elements/CategoryCard/CategoryCard';
import APP_STATE from '../../business-logic-layer/default-app-state';

export default class MainPage {
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
  }

  applyStyleToElements() {
    this.container.classList.add(styles.container);
  }

  insertChildrenToElement() {
    this.element.appendChild(this.sideMenu.getElement());
    this.element.appendChild(this.menu.getElement());
    this.element.appendChild(this.container);

    this.renderCategoryCards();
  }

  renderCategoryCards() {
    APP_STATE.categories.forEach((item) => {
      this.container.appendChild(new CategoryCard({
        categoryName: item.categoryName,
        circleImage: item.circleImage,
        coverImageAnimated: item.coverImageAnimated,
        coverImageStatic: item.coverImageStatic,
        pages: this.props.pages,
        id: item.pageId,
      }).getElement());
    });
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
