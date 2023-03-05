export const setupChain = (element, dates) => {

  dates.forEach((date) => {
    const div = document.createElement("div");
    div.classList = 'circle'
    element.appendChild(div);
    // 
    const span = document.createElement("span");
    span.innerText = date;
    element.appendChild(span);
  });

};
