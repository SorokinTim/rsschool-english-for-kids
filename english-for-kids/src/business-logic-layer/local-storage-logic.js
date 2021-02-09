import APP_STATE from './default-app-state';
import { createStatisticArrayForLocalStorage } from './logic';
import * as constants from './constants';

export function initializeLocalStorage() {
  const cards = createStatisticArrayForLocalStorage(APP_STATE.categories);

  localStorage.setItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY, JSON.stringify(cards));
}

export function changeLocalStorage(props) {
  const result = JSON.parse(localStorage.getItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY)).concat();

  result.forEach((item, i) => {
    if (item.word !== props.word) {
      return;
    }

    result[i][props.type] += 1;

    const persent = (
      (result[i][constants.DEFAULT_STATISTIC_HEADERS[5]]
        / (result[i][constants.DEFAULT_STATISTIC_HEADERS[4]]
          + result[i][constants.DEFAULT_STATISTIC_HEADERS[5]]
        ))
      * 100
    ).toFixed(0);
    result[i][constants.DEFAULT_STATISTIC_HEADERS[6]] = !Number.isNaN(+persent) ? persent : 0;
  });

  localStorage.setItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY, JSON.stringify(result));
}

export function sortLocalStorageDigitElements(props) {
  const result = JSON.parse(localStorage.getItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY)).concat();

  result.sort((a, b) => (props.type === constants.DEFAULT_MAX_FILTER_TYPE
    ? b[props.field] - a[props.field]
    : a[props.field] - b[props.field]));

  localStorage.setItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY, JSON.stringify(result));
}

export function sortLocalStorageStringElements(props) {
  const result = JSON.parse(localStorage.getItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY)).concat();

  result.sort((a, b) => a[props.field].localeCompare(b[props.field]));

  localStorage.setItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY, JSON.stringify(result));
}
