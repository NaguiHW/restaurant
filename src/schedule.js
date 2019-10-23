/* global document */

export const schedulePage = (() => {
  const content = document.createElement('div');
  const title = document.createElement('h2');
  const text = document.createElement('p');

  const generate = (parent) => {
    title.innerHTML = 'Schedule';
    title.classList.add('body-title');
    text.innerHTML = `<b>M-T</b>h 4:00pm – 10:00pm<br>
                      <b>F-Sa</b> 4:00pm – 11:00pm<br>
                      <b>Su</b> 4:00pm – 9:00pm`;
    text.classList.add('body-text');
    content.appendChild(title);
    content.appendChild(text);
    parent.appendChild(content);
  };

  return { generate };
})();