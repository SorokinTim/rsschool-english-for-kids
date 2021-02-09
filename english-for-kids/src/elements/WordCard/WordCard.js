import styles from './WordCard.module.css';
import APP_STATE from '../../business-logic-layer/default-app-state';
import speechSynthesis from '../../business-logic-layer/speechSynthesis';
import { changeLocalStorage } from '../../business-logic-layer/local-storage-logic';
import * as constants from '../../business-logic-layer/constants';

export default class WordCard {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.mouseArea = document.createElement('div');

    this.cardCover = document.createElement('div');
    this.cardCover.style.backgroundImage = `url(${this.props.cardImage})`;

    this.cardTitleContainer = document.createElement('div');
    this.changeCardStateByPlayMode();

    this.cardTitle = document.createElement('div');
    this.cardTitle.innerText = this.props.cardEngTitle;
    this.cardTitle.setAttribute(constants.ATTRIBUTE_TRANSLATE_WORD, this.props.cardRusTitle);

    this.cardIcon = document.createElement('span');
    this.cardIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    this.cardIcon.innerText = 'rotate_left';
  }

  insertChildrenToElement() {
    this.cardTitleContainer.appendChild(this.cardTitle);
    this.cardTitleContainer.appendChild(this.cardIcon);

    this.element.appendChild(this.cardCover);

    this.element.appendChild(this.cardTitleContainer);

    this.mouseArea.appendChild(this.element);
  }

  applyStyleToElements() {
    this.mouseArea.classList.add(styles['mouse-area']);
    this.getStyleToElementByGameState();

    this.element.classList.add(styles.card);

    this.cardCover.classList.add(styles.card__cover);

    this.cardIcon.classList.add(styles.card__icon);

    this.cardTitleContainer.classList.add(styles['card__title-container']);
    this.cardTitle.classList.add(styles.card__title);
  }

  applyEventListenersToElements() {
    this.mouseLeaveCardListener = () => {
      this.flipCardElement();
      this.mouseArea.removeEventListener('mouseleave', this.mouseLeaveCardListener);
    };

    this.cardIcon.addEventListener('click', () => {
      this.flipCardElement();

      this.mouseArea.addEventListener('mouseleave', this.mouseLeaveCardListener);
    });

    this.element.addEventListener('click', (event) => {
      if (!APP_STATE.playMode
        && this.cardTitle.innerText === this.props.cardEngTitle
        && event.toElement !== this.cardIcon) {
        speechSynthesis(this.props.cardEngTitle);
      }
    });

    this.mouseArea.addEventListener('click', (event) => {
      if (this.props.isGameStarted && this.props.compareFn(this.props.cardEngTitle)) {
        changeLocalStorage({
          word: this.props.cardEngTitle,
          type: constants.DEFAULT_STATISTIC_HEADERS[4],
        });

        this.props.pushUsedCard(this.props.localId);
        this.props.correctAnswerFn();
      } else if (this.props.isGameStarted && !this.props.compareFn(this.props.cardEngTitle)) {
        changeLocalStorage({
          word: this.props.cardEngTitle,
          type: constants.DEFAULT_STATISTIC_HEADERS[5],
        });
        this.props.incorrectAnswerFn();
      } else if (!this.props.isGameStarted
        && !this.props.playMode
        && event.toElement !== this.cardIcon) {
        changeLocalStorage({
          word: this.props.cardEngTitle,
          type: constants.DEFAULT_STATISTIC_HEADERS[3],
        });
      }
    });
  }

  getStyleToElementByGameState() {
    if (this.props.isGameStarted && this.props.isChecked) {
      this.mouseArea.classList.add(styles['mouse-area_disable']);
    }
  }

  flipCardElement() {
    this.playFlipAnimationOnElement();

    setTimeout(() => {
      this.translateCardElement();

      if (
        this.cardTitle.getAttribute(constants.ATTRIBUTE_TRANSLATE_WORD) === this.props.cardEngTitle
      ) {
        this.hideRotateIcon();
      } else {
        this.showRotateIcon();
      }
    }, 150);
  }

  playFlipAnimationOnElement() {
    this.element.animate([
      { transform: 'rotateY(0deg)' },
      { transform: 'rotateY(90deg)' },
      { transform: 'rotateY(0deg)' },
    ], {
      duration: 300,
    });
  }

  translateCardElement() {
    const temp = this.cardTitle.innerText;
    this.cardTitle.innerText = this.cardTitle.getAttribute(constants.ATTRIBUTE_TRANSLATE_WORD);
    this.cardTitle.setAttribute(constants.ATTRIBUTE_TRANSLATE_WORD, temp);
  }

  hideRotateIcon() {
    this.cardIcon.style.visibility = 'hidden';
  }

  showRotateIcon() {
    this.cardIcon.style.visibility = 'visible';
  }

  changeCardStateByPlayMode() {
    this.cardTitleContainer.style.display = APP_STATE.playMode ? 'none' : 'flex';
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.applyEventListenersToElements();

    this.insertChildrenToElement();

    return this.mouseArea;
  }
}
