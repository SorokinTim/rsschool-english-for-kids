import styles from './CategoryCard.module.css';
import pageReducer from '../../business-logic-layer/pageReducer';
import APP_STATE from '../../business-logic-layer/default-app-state';

export default class CategoryCard {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.cardCover = document.createElement('div');

    this.cardCoverImg = document.createElement('img');
    this.cardCoverImg.src = this.props.coverImageStatic;

    this.circleImage = document.createElement('div');
    this.circleImage.style.backgroundImage = `url(${this.props.circleImage})`;

    this.categoryName = document.createElement('div');
    this.categoryName.innerText = this.props.categoryName;
  }

  insertChildrenToElement() {
    this.cardCover.appendChild(this.cardCoverImg);

    this.element.appendChild(this.cardCover);
    this.element.appendChild(this.circleImage);
    this.element.appendChild(this.categoryName);
  }

  applyStyleToElements() {
    this.element.classList.add(styles.card);

    this.cardCover.classList.add(styles.card__cover);
    this.cardCoverImg.classList.add(styles['card__cover-image']);

    this.circleImage.classList.add(styles.card__circle);
    this.categoryName.classList.add(styles['card__category-name']);
  }

  applyEventListenersToElements() {
    this.element.addEventListener('mouseover', () => {
      this.cardCoverImg.src = this.props.coverImageAnimated;
    });

    this.element.addEventListener('mouseout', () => {
      this.cardCoverImg.src = this.props.coverImageStatic;
    });

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

    this.insertChildrenToElement();

    this.applyStyleToElements();

    this.applyEventListenersToElements();

    return this.element;
  }
}
