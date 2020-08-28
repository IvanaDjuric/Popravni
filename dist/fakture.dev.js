"use strict";

[{
  name: 'Ime kompanije',
  pib: '12345678',
  dateIssued: '2019-11-18',
  value: 1000,
  currency: 'RSD',
  timeStamp: '10:29:21',
  dateStapm: '2019-11-18'
}, {
  name: 'Ime kompanije',
  pib: '178945612',
  dateIssued: '2019-11-18',
  value: 1500,
  currency: 'RSD',
  timeStamp: '10:29:21',
  dateStapm: '2019-11-18'
}];
var fakture = [];
var count = 0;
var companyInput = document.querySelector('#txt-company-name');
var pibInput = document.querySelector('#txt-company-pib');
var dateInput = document.querySelector('#txt-time');
var rsdInput = document.querySelector('#txt-value');
var btnSub = document.querySelector('#btn-add');
var labTimeStamp = document.querySelector('.insert-timestamp');
var btnDel = document.querySelector('.item-trashCan');

var addElementToDom = function addElementToDom(id) {
  var divContainer = document.createElement('div');
  divContainer.className = 'item-container';
  var infoItem = document.createElement('div');
  infoItem.className = 'item-info';
  var labelDiv = document.createElement('div');
  var labComp = document.createElement('.label');
  labComp.className = 'company-name';
  labComp.textContent = companyInput.value + '';
  var labPib = document.querySelector('label');
  labPib.className = 'company-pib';
  labPib.textContent = pibInput.value + '';
  var labTime = document.createElement('.time-created');
  labTime.className = 'time-created';
  labTime.textContent = dateInput.value + '';
  var labPrice = document.createElement('label');
  labPrice.className = 'price-value';
  labPrice.textContent = rsdInput.value + '';
  labelDiv.append(labComp, labPib, labTime, labPrice);
  divContainer.appendChild(labelDiv);
  var divActions = document.createElement('div');
  divActions.className = 'item-actions';
  var btnRemove = document.createElement('button');
  btnRemove.className = 'item-trashCan';
  btnRemove.textContent = 'DELETE';
  divActions.appendChild(btnRemove);
  btnRemove.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.remove();
    fakture.splice(fakture.findIndex(function (el) {
      return el.id === id;
    }), 1); // console.log(fakture)
  });
  divContainer.appendChild(divActions);
  itemList.appendChild(divContainer);
  companyInput.value = '';
  dateInput.value = '';
  pibInput.value = '';
  rsdInput.value = '';
};

var isValid = function isValid() {
  companyInput.value.trim() !== '' && pibInput.value.length == 8 && !Number.isNaN(Number(pibInput.value.trim()));
};

btnSub.addEventListener('click', function () {
  if (!isValid()) {
    alert('Polja ne smeju biti prazna');
    return;
  }

  fakture.push({
    name: companyInput.value,
    pib: pibInput.value,
    dateIssued: dateInput.value,
    value: rsdInput.value,
    currency: "RSD",
    timeStamp: "".concat(new Date().getHours(), ":").concat(new Date().getMinutes(), ":").concat(new Date().getSeconds()),
    dateStamp: dateInput.value,
    id: count
  });
  console.log(fakture[fakture.length - 1]);
  addElementToDOM(count);
  count++;
});