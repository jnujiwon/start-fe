let urlTxt;
let btn;
let logTxt;

function getSource(url, result) {
  const inputObj = url;
  const outputObj = result;

  fetch(inputObj.value)
    .then((response) => {
      response.text().then((data) => {
        outputObj.value = data;
      });
    })
    .catch((err) => {
      outputObj.value = err;
    });
}

function search(inputObj, outputObj) {
  const urlObj = inputObj;
  const logObj = outputObj;

  if (urlObj.value === '') {
    alert('내용을 입력해주세요');
  } else {
    logObj.value = getSource(urlObj, logObj);
  }
}

window.onload = function () {
  urlTxt = document.getElementById('url');
  btn = document.getElementById('btn');
  logTxt = document.getElementById('log');

  urlTxt.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      search(urlTxt, logTxt);
    }
  });

  btn.addEventListener('click', () => {
    search(urlTxt, logTxt);
  });
};