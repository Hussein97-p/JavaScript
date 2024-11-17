'use strict';
const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById("target");

const listItems = names.map(name => `<li>${name}</li>`).join('');

targetElement.innerHTML = listItems;
