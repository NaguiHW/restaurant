let restaurantMenuPage = (()=> {
  let content = document.createElement('div');
  let titleContainer = document.createElement('div');
  let title = document.createElement('h2');
  let leftColumn = document.createElement('div');
  let centerColumn = document.createElement('div');
  let rightColumn = document.createElement('div');
  let bodyContainer = document.createElement('div');

  let generate = parent => {
    title.innerHTML = 'Menu';
    title.classList.add('body-title');
    titleContainer.appendChild(title);
    leftColumn.classList.add('column-3');
    centerColumn.classList.add('column-3');
    rightColumn.classList.add('column-3');
    bodyContainer.classList.add('body-content');
    bodyContainer.appendChild(leftColumn);
    bodyContainer.appendChild(centerColumn);
    bodyContainer.appendChild(rightColumn);
    content.appendChild(titleContainer);
    content.appendChild(bodyContainer);
    parent.appendChild(content);
  }

  return {generate};
})();

export { restaurantMenuPage };