var colorBtns = document.querySelectorAll('button[data-identifier^="sample"]');
var spotlight = document.querySelector('.spotlight-img > img');
var selected = document.querySelector('.active-ring');
var colorName = document.querySelector('.color-name');
colorName.style.color = selected.dataset.identifier.split('-')[1];

function clearHighlight() {
  for (var btn of colorBtns) {
    if (btn.classList.contains('active-ring')) {
      btn.classList.remove('active-ring');
    }
  }  
}

for (var i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener('click', function (e) {
    clearHighlight();
    e.target.classList.add('active-ring');
    var color = e.target.dataset.identifier.split('-')[1];
    spotlight.src = 'images/' + color + '.jpg';
    colorName.innerHTML = color;
    colorName.style.color = color;
  })
}
