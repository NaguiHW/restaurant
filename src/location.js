let locationPage = (()=> {
  let content = document.createElement('div');
  let leftBox = document.createElement('div');
  let rightBox = document.createElement('div');
  let title = document.createElement('h2');
  let text = document.createElement('p');
  let imageLocation = document.createElement('img');

  let generate = parent => {
    content.classList.add('body-content');
    imageLocation.setAttribute('src', './img/locationImg.png');
    imageLocation.setAttribute('alt', 'location');
    title.innerHTML = 'Location';
    title.classList.add('body-title');
    text.innerHTML = `0000 Park Avenue<br>
                      Wantagh, NY 00000<br>
                      (000) 000-0000<br>`;
    text.classList.add('body-text');
    leftBox.classList.add('left-map');
    rightBox.classList.add('right-direction');
    leftBox.appendChild(imageLocation);
    rightBox.appendChild(title);
    rightBox.appendChild(text);
    content.appendChild(leftBox);
    content.appendChild(rightBox);
    parent.appendChild(content);
  }

  return {generate};
})();

export { locationPage };