import { DEFAULT_STATISTIC_HEADERS } from './constants';

export function generateQueueWords(wordsArr) {
  const result = [];

  for (let i = 0; i < wordsArr.length;) {
    let tempWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

    if (!result.includes(tempWord)) {
      result.push(tempWord);
      i += 1;
    } else {
      tempWord = wordsArr[Math.round(Math.random() * wordsArr.length)];
    }
  }

  return result;
}

export function getWordsArrayByCardsArray(cardsArray) {
  const result = [];

  cardsArray.forEach((item, i) => result.push(cardsArray[i].cardEngTitle));

  return result;
}

export function findCardsInCategoriesByPageId(appState, pageId) {
  let result;

  appState.categories.forEach((item) => {
    if (item.pageId === pageId) {
      result = item.cards;
    }
  });

  return result;
}

export function createStatisticArrayForLocalStorage(categories) {
  const result = [];

  categories.forEach((item) => {
    item.cards.forEach((card) => {
      result.push({
        [DEFAULT_STATISTIC_HEADERS[0]]: item.categoryName,
        [DEFAULT_STATISTIC_HEADERS[1]]: card.cardEngTitle,
        [DEFAULT_STATISTIC_HEADERS[2]]: card.cardRusTitle,
        [DEFAULT_STATISTIC_HEADERS[3]]: 0,
        [DEFAULT_STATISTIC_HEADERS[4]]: 0,
        [DEFAULT_STATISTIC_HEADERS[5]]: 0,
        [DEFAULT_STATISTIC_HEADERS[6]]: 0,
      });
    });
  });

  return result;
}
