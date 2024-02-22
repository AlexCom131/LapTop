function searchElements() {
  const searchStr = document.querySelector("#csearch").value.toLowerCase();
  const searchArr = getArrayFromStorage();
  const main = document.getElementsByClassName("main")[0];
  let isFound = false;
  main.innerHTML = '';

  searchArr.forEach((row) => {
    const { producer, procesor, id } = row;
    const strN = producer.toLowerCase();
    const strM = procesor.toLowerCase();

    if (strN.includes(searchStr) || strM.includes(searchStr)) {
      buildElement(id, row);
      isFound = true;
    }
  });

  if (!isFound) {
    main.innerHTML = '<h1 style="color:red; width:100%; text-align: center;">От халепа. Такого ноутбука не існує :(</h1>';
  }
}

function getArrayFromStorage() {
  const keyNumbers = Object.keys(localStorage).length;
  const incomingArr = [];

  for (let i = 0; i < keyNumbers; i++) {
    const keyName = localStorage.key(i);
    const row = JSON.parse(localStorage.getItem(keyName));
    const elm = {
      id: keyName,
      producer: row.producer,
      procesor: row.procesor,
      volume: row.volume,
      pzp: row.pzp,
      ozp: row.ozp,
      imeg: row.imeg
    };
    incomingArr.push(elm);

  }

  return incomingArr;
}



refresh = () => location.reload();

searchbtn.addEventListener('click', searchElements);

