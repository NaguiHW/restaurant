let schedulePage = (()=> {
  let content = document.createElement('div');
  let title = document.createElement('h2');
  let text = document.createElement('p');

  let generate = parent => {
    title.innerHTML = 'Schedule';
    title.classList.add('body-title');
    text.innerHTML = `<b>M-T</b>h 4:00pm – 10:00pm<br>
                      <b>F-Sa</b> 4:00pm – 11:00pm<br>
                      <b>Su</b> 4:00pm – 9:00pm`;
    text.classList.add('body-text');
    content.appendChild(title);
    content.appendChild(text);
    parent.appendChild(content);
  }

  return {generate};
})();

export {schedulePage};