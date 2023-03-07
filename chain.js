export const setupChain = (element, dates) => {


  dates.forEach((date) => {
    const container = document.createElement("div");
   
    element.appendChild(container);
    const div = document.createElement("div");
    div.classList = 'circle'

    if(date.active) {
      div.classList.add('active')
      container.classList = 'link-container-active'
    } else{
      container.classList = 'link-container'
    }

    div.innerHTML = date.day
    container.appendChild(div);
  });

};
