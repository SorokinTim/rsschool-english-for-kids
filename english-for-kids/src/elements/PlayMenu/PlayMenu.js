import styles from './PlayMenu.module.css';
import speechSynthesis from '../../business-logic-layer/speechSynthesis';
import ScoreStar from '../ScoreStar/ScoreStar';
import * as constants from '../../business-logic-layer/constants';

export default class PlayMenu {
  constructor(props = {}) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.iconContainer = document.createElement('div');

    this.playIcon = document.createElement('span');
    this.playIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.getIconByGameState();

    this.starsContainer = document.createElement('div');
  }

  insertChildrenToElement() {
    if (this.props.isGameStarted) {
      this.renderScoreStarsByGameState();
    }

    this.iconContainer.appendChild(this.playIcon);

    this.element.appendChild(this.iconContainer);

    this.element.appendChild(this.starsContainer);
  }

  applyStyleToElements() {
    this.iconContainer.classList.add(styles['play-menu__icon-container']);
    this.playIcon.classList.add(styles['play-menu__icon']);
    this.starsContainer.classList.add(styles['play-menu__stars-container']);
    this.element.classList.add(styles['play-menu']);
  }

  renderScoreStarsByGameState() {
    this.props.scoreStarsArray.forEach((item) => {
      this.starsContainer.appendChild(new ScoreStar({ type: item }).getElement());
    });
  }

  getIconByGameState() {
    if (this.props.isGameStarted) {
      this.playIcon.innerText = 'refresh';
    } else {
      this.playIcon.innerText = 'play_arrow';
    }
  }

  applyEventListenersToElements() {
    this.iconContainer.addEventListener('click', () => {
      if (!this.props.isGameStarted) {
        this.props.startPlayModeFn();
      }

      if (this.props.isGameStarted) {
        speechSynthesis(this.props.playModeWordsArr[0]);
      }
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
