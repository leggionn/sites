const storageForm = document.querySelector('#storageForm');
storageForm.addEventListener('submit', onSubmitStorageForm);
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', onClickClearBtn);
function onSubmitStorageForm(event) {
    event.preventDefault();
    const keyInput = storageForm.querySelector('#keyInput');
    const valueInput = storageForm.querySelector('#valueInput');
    if (!keyInput.value) {
        alert('Introduceti o valoare pentru inputul cheie');
        return;
    }
    if (!valueInput.value) {
        alert('Introduceti o valoare pentru inputul valoare');
        return;
    }

    if (localStorage.getItem(keyInput.value) !== null) {
        alert(`Elementul cu cheia ${keyInput.value} deja exista`);
        return;
    }
    localStorage.setItem(keyInput.value, valueInput.value);
    showData();
}
function onClickClearBtn() {
    if (localStorage.length > 0) {
        localStorage.clear();
        showData();
    }
    else {
        alert('Nu sunt date in localStorage');
    }
}

function showData() {
    const storageData = document.querySelector('#storageData');
    storageData.innerHTML = '';
    if (localStorage.length === 0) {
        const noData = document.createElement('p');
        noData.innerText = 'Nu exista date in localStorage';
        storageData.append(noData);
    } else {
        const itemsList = document.createElement('ul');
        itemsList.classList.add('items');
        storageData.append(itemsList);
        for (let i = 0; i < localStorage.length; i++) {
            const item = document.createElement('li');
            const keyName = localStorage.key(i);
            item.innerText = localStorage.getItem(keyName);
            itemsList.append(item);
        }
    }
}
showData();