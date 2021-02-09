import { render, clearDOM } from './logic-dom';
import * as constants from './constants';

export default function pageReducer(props) {
  clearDOM();

  switch (props.type) {
    case constants.PAGE_ID_HOME:
      render(props.pages.mainPage());
      break;
    case constants.PAGE_ID_STATISTICS:
      render(props.pages.statisticPage());
      break;
    default:
      render(props.pages.wordsPage(props.type, props.args));
      break;
  }
}
