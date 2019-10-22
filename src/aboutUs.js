let aboutUsPage = (()=> {
  let content = document.createElement('div');
  let leftBox = document.createElement('div');
  let rightBox = document.createElement('div');
  let title = document.createElement('h2');
  let text = document.createElement('p');
  let imageAboutUs = document.createElement('img');

  let generate = parent => {
    content.classList.add('body-content');
    title.innerHTML = 'About Us';
    title.classList.add('body-title');
    text.innerHTML = `Our commitment to our community is to delivery 
    quality food and service at an incredible value. Quality food 
    means quality ingredients. All steaks are Black Angus or better; 
    shrimps are wild, not farm raised; and the tuna is sushi grade.<br><br>
    Our steak and seafood menu is sizzling with so many deliciously 
    grilled delights you won’t know where to start! All yours to savor 
    in our stylishly casual dining room, along with contemporary cocktails, 
    decadent desserts and just-right service.`
    text.classList.add('body-text')
    leftBox.classList.add('leftbox');
    leftBox.appendChild(title);
    leftBox.appendChild(text);
    imageAboutUs.setAttribute('src', 'src/img/aboutUsImg.jpg');
    imageAboutUs.setAttribute('alt', 'About Us Image');
    rightBox.classList.add('rightbox');
    rightBox.appendChild(imageAboutUs);
    content.appendChild(leftBox);
    content.appendChild(rightBox);
    parent.appendChild(content);
  }

  return {generate};
})();

export { aboutUsPage };