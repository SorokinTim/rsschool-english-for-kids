import { render } from './business-logic-layer/logic-dom';
import MainPage from './pages/MainPage/MainPage';
import WordsPage from './pages/WordsPage/WordsPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import { initializeLocalStorage } from './business-logic-layer/local-storage-logic';
import * as constants from './business-logic-layer/constants';
import './main.css';

const pages = {
  mainPage() { return new MainPage({ pages: this }).getElement(); },
  wordsPage(pageId = constants.PAGE_ID_ACTIONS_A, args) {
    return new WordsPage({ pages: this, pageId, args }).getElement();
  },
  statisticPage() { return new StatisticPage({ pages: this }).getElement(); },
};

if (!localStorage.getItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY)) {
  initializeLocalStorage();
}

render(pages.mainPage());
