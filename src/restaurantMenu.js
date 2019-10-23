/* global document */

export const restaurantMenuPage = (() => {
  const content = document.createElement('div');
  const titleContainer = document.createElement('div');
  const title = document.createElement('h2');
  const bodyContainer = document.createElement('div');
  const menu1 = document.createElement('div');
  const menu2 = document.createElement('div');
  const menu3 = document.createElement('div');
  const menu4 = document.createElement('div');
  const menu5 = document.createElement('div');
  const menu6 = document.createElement('div');

  let addClassesToMenu = () => {
    menu1.classList.add('mini-menu');
    menu2.classList.add('mini-menu');
    menu3.classList.add('mini-menu');
    menu4.classList.add('mini-menu');
    menu5.classList.add('mini-menu');
    menu6.classList.add('mini-menu');
  };

  let addMenuToBodyContainer = () => {
    bodyContainer.appendChild(menu1);
    bodyContainer.appendChild(menu2);
    bodyContainer.appendChild(menu3);
    bodyContainer.appendChild(menu4);
    bodyContainer.appendChild(menu5);
    bodyContainer.appendChild(menu6);
  };

  let addContentToMiniMenu = () => {
    menu1.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Kung Pao Calamari</h4>
                        <p class="mini-menu-text">Thom Thom Kung Pao sauce / ground peanuts / scallion</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$13.95</p>
                       </div>`;
    menu2.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Crispy Bang Bang Shrimp</h4>
                        <p class="mini-menu-text">Thai sweet chili sauce / gorgonzola dip</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$11.95</p>
                       </div>`;
    menu3.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Kani Salad</h4>
                        <p class="mini-menu-text">kani kama / tobiko / cucumber / seaweed salad / avocado / spicy mayo / mesclun greens</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$8.95</p>
                       </div>`;
    menu4.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Rainbow Naruto</h4>
                        <p class="mini-menu-text">Tuna / salmon / white fish / kani kama / avocado / thinly sliced cucumbers / yuzu soy</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$15.95</p>
                       </div>`;
    menu5.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Autumn Roll</h4>
                        <p class="mini-menu-text">Inside: Spicy tuna / kani kama / avocado, top: torched salmon / lemon / spicy mayo</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$15.95</p>
                       </div>`;
    menu6.innerHTML = `<div class="mini-menu-content-left">
                        <h4 class="mini-menu-title">Surf & Turf Roll</h4>
                        <p class="mini-menu-text">Inside: grilled skirt steak, top: lobster & shrimp salad / horse radish & spicy mayo</p>
                       </div>
                       <div class="mini-menu-content-right">
                        <p class="mini-menu-price">$18.95</p>
                       </div>`;
  };

  const generate = (parent) => {
    title.innerHTML = 'Menu';
    title.classList.add('body-title');
    titleContainer.appendChild(title);
    bodyContainer.classList.add('body-content');
    addClassesToMenu();
    addContentToMiniMenu();
    addMenuToBodyContainer();
    content.classList.add('restaurant-menu');
    content.appendChild(titleContainer);
    content.appendChild(bodyContainer);
    parent.appendChild(content);
  };

  return { generate };
})();