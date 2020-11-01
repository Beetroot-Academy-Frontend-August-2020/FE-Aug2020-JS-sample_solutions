let newParagraph = document.createElement('p');
newParagraph.innerText = 'New paragraph!';
document.body.appendChild(newParagraph);

let table = document.createElement('table');

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.innerHTML = j;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);
