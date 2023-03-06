export const setupChain = (element, dates) => {


  dates.forEach((date, index) => {
    const container = document.createElement("div");
    container.classList = 'link-container'
    element.appendChild(container);
    const div = document.createElement("div");
    div.classList = 'circle'

    if(dates.length-1 === index || dates.length-2 === index) {
      div.classList.add('active')
      container.classList = 'link-container-active'
    }

    div.innerHTML = date
    container.appendChild(div);
    // 
    // const span = document.createElement("span");
    // span.innerText = date;
    // container.appendChild(span);
  });

};
