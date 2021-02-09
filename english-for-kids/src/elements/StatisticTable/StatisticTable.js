import styles from './StatisticTable.module.css';
import * as constants from '../../business-logic-layer/constants';
import { sortLocalStorageDigitElements, sortLocalStorageStringElements } from '../../business-logic-layer/local-storage-logic';
import pageReducer from '../../business-logic-layer/pageReducer';
import APP_STATE from '../../business-logic-layer/default-app-state';

export default class StatisticTable {
  constructor(props) {
    this.element = document.createElement('table');
    this.props = props;
  }

  createChildrenElements() {
    this.tableHead = document.createElement('thead');
    constants.DEFAULT_STATISTIC_HEADERS.forEach((item) => {
      this.renderTableHeaderElement({
        title: this.toCapitalizeHeader(item),
        arrowId: item,
      });
    });

    this.tableBody = document.createElement('tbody');
    const cards = JSON.parse(localStorage.getItem(constants.DEFAULT_LOCALSTORAGE_CARD_KEY));
    cards.forEach((card) => this.renderTableItemElements(card));
  }

  toCapitalizeHeader(title) {
    this.everyTitle = title.split('');

    this.everyTitle[0] = this.everyTitle[0].toUpperCase();

    return this.everyTitle.join('');
  }

  renderTableHeaderElement(props) {
    const tableHeader = document.createElement('th');
    tableHeader.classList.add(styles.table__header);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add(styles.header__container);

    const headerTitle = document.createElement('span');
    headerTitle.innerText = props.title;
    headerTitle.classList.add(styles.header__title);

    const headerIcon = document.createElement('span');
    headerIcon.iconAngle = 0;
    headerIcon.classList.add(styles.header__icon);
    headerIcon.classList.add(constants.DEFAULT_ICONS_CLASSNAME);
    headerIcon.innerText = 'arrow_drop_down';
    headerIcon.addEventListener('click', () => {
      headerIcon.style.transform = `rotate(${headerIcon.iconAngle += 180}deg)`;

      this.filterType = props.arrowId;
      this.filterSwitcher();

      pageReducer({
        type: APP_STATE.currentPath,
        pages: this.props.pages,
      });
    });

    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerIcon);
    tableHeader.appendChild(headerContainer);

    this.tableHead.appendChild(tableHeader);
  }

  filterSwitcher() {
    switch (this.filterType) {
      case constants.DEFAULT_STATISTIC_HEADERS[0]:
      case constants.DEFAULT_STATISTIC_HEADERS[1]:
      case constants.DEFAULT_STATISTIC_HEADERS[2]:
        sortLocalStorageStringElements({
          type: constants.DEFAULT_MAX_FILTER_TYPE,
          field: this.filterType,
        });
        break;
      case constants.DEFAULT_STATISTIC_HEADERS[3]:
      case constants.DEFAULT_STATISTIC_HEADERS[4]:
      case constants.DEFAULT_STATISTIC_HEADERS[5]:
      case constants.DEFAULT_STATISTIC_HEADERS[6]:
        sortLocalStorageDigitElements({
          type: constants.DEFAULT_MAX_FILTER_TYPE,
          field: this.filterType,
        });
        break;
      default:
        sortLocalStorageStringElements({
          type: constants.DEFAULT_MAX_FILTER_TYPE,
          field: this.filterType,
        });
        break;
    }
  }

  renderTableItemElements(props) {
    const tableItem = document.createElement('tr');

    for (let i = 0; i < 7; i += 1) {
      const item = document.createElement('td');

      item.classList.add(styles.table__title);

      if (i !== 6) {
        item.innerText = props[constants.DEFAULT_STATISTIC_HEADERS[i]];
      } else {
        item.innerText = `${props[constants.DEFAULT_STATISTIC_HEADERS[i]]}%`;
      }

      tableItem.appendChild(item);
    }

    this.tableBody.appendChild(tableItem);
  }

  insertChildrenToElement() {
    this.element.appendChild(this.tableHead);
    this.element.appendChild(this.tableBody);
  }

  applyStyleToElements() {
    this.element.classList.add(styles.table);
  }

  getElement() {
    this.createChildrenElements();

    this.applyStyleToElements();

    this.insertChildrenToElement();

    return this.element;
  }
}
