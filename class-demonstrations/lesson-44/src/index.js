import './styles/styles.scss';

import { writeHeading, writeParagraph } from './lib/displayText';
import { catalogue, generateTable, clearTable } from './lib/catalogue';

document.addEventListener('DOMContentLoaded', () => {
    writeHeading();
    writeParagraph();

    generateTable(catalogue);
    let table = document.querySelector('table');

    document.querySelector('.book-title').addEventListener("click", (e) => {
        clearTable(table);
        let sortedCatalogue = catalogue.sort(function(a, b) {
            return a.title == b.title ? 0 : a.title > b.title || -1;
          });
        generateTable(sortedCatalogue);
    });
});