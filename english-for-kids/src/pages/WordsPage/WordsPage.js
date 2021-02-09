import styles from './WordsPage.module.css';
import Menu from '../../elements/Menu/Menu';
import SideMenu from '../../elements/SideMenu/SideMenu';
import WordCard from '../../elements/WordCard/WordCard';
import PlayMenu from '../../elements/PlayMenu/PlayMenu';
import APP_STATE from '../../business-logic-layer/default-app-state';
import * as logic from '../../business-logic-layer/logic';
import * as constants from '../../business-logic-layer/constants';
import getWordSynthes from '../../business-logic-layer/speechSynthesis';
import pageReducer from '../../business-logic-layer/pageReducer';
import FinishPopup from '../../elements/FinishPopup/FinishPopup';

import correctAudio from '../../assets/audio/correct.mp3';
import errorAudio from '../../assets/audio/error.mp3';
import victoryAudio from '../../assets/audio/success.mp3';
import failureAudio from '../../assets/audio/failure.mp3';

export default class WordsPage {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
  }

  createChildrenElements() {
    this.sideMenu = new SideMenu({
      pages: this.props.pages,
    });

    this.menu = new Menu({
      changeSideMenuFn: () => this.sideMenu.changeSideMenuState(),
      pages: this.props.pages,
    });

    this.createPlayMenuElementByPlayModeState();

    this.container = document.createElement('div');
  }

  applyStyleToElements() {
    this.container.classList.add(styles.container);
  }

  insertChildrenToElement() {
    this.renderWordCards();

    this.element.appendChild(this.sideMenu.getElement());
    this.element.appendChild(this.menu.getElement());
    this.element.appendChild(this.container);

    this.renderPlayMenuComponent();
  }

  renderPlayMenuComponent() {
    if (APP_STATE.playMode) {
      this.element.appendChild(this.playMenu);
    }
  }

  createPlayMenuElementByPlayModeState() {
    if (this.checkIsGameStarted()) {
      this.playMenu = new PlayMenu({
        startPlayModeFn: () => this.startPlayMode(),
        isGameStarted: this.checkIsGameStarted(),
        playModeWordsArr: this.props.args.playModeWordsArr,
        scoreStarsArray: this.props.args.scoreStarsArray,
      }).getElement();
    } else {
      this.playMenu = new PlayMenu({
        startPlayModeFn: () => this.startPlayMode(),
        isGameStarted: this.checkIsGameStarted(),
      }).getElement();
    }
  }

  getCurrentPageCardsById() {
    APP_STATE.categories.forEach((item, index) => {
      if (item.pageId === this.props.pageId) {
        this.currentPageCards = APP_STATE.categories[index];
      }
    });
  }

  renderWordCards() {
    this.getCurrentPageCardsById();

    this.currentPageCards.cards.forEach((item, i) => {
      this.container.appendChild(new WordCard({
        cardEngTitle: item.cardEngTitle,
        cardRusTitle: item.cardRusTitle,
        cardImage: item.cardImage,
        compareFn: this.checkIsGameStarted()
          ? this.compareCorrectnessSaidWithCardWord()
          : undefined,
        playMode: APP_STATE.playMode,
        isGameStarted: this.checkIsGameStarted(),
        correctAnswerFn: () => this.userCorrectAnswer(),
        incorrectAnswerFn: () => this.userIncorrectAnswer(),
        localId: i,
        pushUsedCard: this.checkIsGameStarted()
          ? this.createArrayWithUsedCardsByLocalId()
          : undefined,
        isChecked: this.checkIsGameStarted() && this.props.args.usedCardsArray
          ? this.props.args.usedCardsArray.includes(i)
          : undefined,
        page: this.props.pages,
      }).getElement());
    });
  }

  createArrayWithUsedCardsByLocalId() {
    const usedArrayCards = this.props.args.usedCardsArray;
    return function (id) {
      usedArrayCards.push(id);
    };
  }

  checkIsGameStarted() {
    return !!this.props.args && !!this.props.args.playModeIsPlay;
  }

  compareCorrectnessSaidWithCardWord() {
    const currentWord = this.props.args.playModeWordsArr[0];
    return function (compareWord) {
      return currentWord === compareWord;
    };
  }

  userCorrectAnswer() {
    if (this.props.args.playModeWordsArr.length > 1) {
      this.props.args.playModeWordsArr.shift();

      new Audio(correctAudio).play();

      this.props.args.scoreStarsArray.unshift(constants.DEFAULT_SUCCESS_TYPE);

      getWordSynthes(this.props.args.playModeWordsArr[0]);

      this.rerenderCards();
    } else {
      if (!this.props.args.scoreStarsArray.includes(constants.DEFAULT_ERROR_TYPE)) {
        this.finishGameWithSuccess();
      }

      if (this.props.args.scoreStarsArray.includes(constants.DEFAULT_ERROR_TYPE)) {
        this.finishGameWithFailure();
      }
    }
  }

  finishGameWithFailure() {
    let wrongAnswersCounter = 0;

    this.props.args.scoreStarsArray.forEach((item) => {
      if (item === constants.DEFAULT_ERROR_TYPE) {
        wrongAnswersCounter += 1;
      }
    });

    new Audio(failureAudio).play();

    this.stopGameMode();

    this.element.appendChild(new FinishPopup({
      moveToHomePageFn: () => this.moveToHomePage(),
      type: constants.DEFAULT_FAILURE_TYPE,
      title: 'Failure! Let\'s try again.',
      wrongAnswers: wrongAnswersCounter,
    }).getElement());
  }

  finishGameWithSuccess() {
    new Audio(victoryAudio).play();

    this.stopGameMode();

    this.element.appendChild(new FinishPopup({
      moveToHomePageFn: () => this.moveToHomePage(),
      type: constants.DEFAULT_SUCCESS_TYPE,
      title: 'Victory!',
    }).getElement());
  }

  userIncorrectAnswer() {
    new Audio(errorAudio).play();

    this.props.args.scoreStarsArray.unshift(constants.DEFAULT_ERROR_TYPE);

    this.rerenderCards();
  }

  rerenderCards() {
    pageReducer({
      pages: this.props.pages,
      type: APP_STATE.currentPath,
      args: this.props.args,
    });
  }

  moveToHomePage() {
    pageReducer({
      pages: this.props.pages,
      type: constants.PAGE_ID_HOME,
      args: this.props.args,
    });
  }

  startPlayMode() {
    const result = logic.findCardsInCategoriesByPageId(APP_STATE, this.props.pageId);
    const wordsOrderedArr = logic.getWordsArrayByCardsArray(result);

    this.playModeWordsArr = logic.generateQueueWords(wordsOrderedArr);
    this.playModeIsPlay = true;
    this.usedCardsArray = [];
    this.scoreStarsArray = [];

    getWordSynthes(this.playModeWordsArr[0]);

    pageReducer({
      pages: this.props.pages,
      type: APP_STATE.currentPath,
      args: {
        playModeWordsArr: this.playModeWordsArr,
        playModeIsPlay: this.playModeIsPlay,
        usedCardsArray: this.usedCardsArray,
        scoreStarsArray: this.scoreStarsArray,
      },
    });
  }

  stopGameMode() {
    const result = logic.findCardsInCategoriesByPageId(APP_STATE, this.props.pageId);
    const wordsOrderedArr = logic.getWordsArrayByCardsArray(result);

    this.props.args.playModeWordsArr = logic.generateQueueWords(wordsOrderedArr);
    this.props.args.playModeIsPlay = false;
    this.props.args.usedCardsArray = [];
    this.props.args.scoreStarsArray = [];
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
