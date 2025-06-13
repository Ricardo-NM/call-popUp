let notificacion = document.querySelector(".notificacion");

function createToast(type, icon, title) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
    <div class="toast ${type}">
      <i class="${icon}"></i>
      <div class="content">
        <div class="title">${title}</div>
      </div>
      <i class="close fas fa-times"></i>
    </div>`;

  newToast.style.opacity = "0";

  notificacion.appendChild(newToast);

  const closeBtn = newToast.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    window.close();
  });

  setTimeout(() => {
    newToast.style.transition = "opacity 1.5s ease";
    newToast.style.opacity = "1";
  }, 100);

  newToast.timeOut = setTimeout(() => {
    newToast.remove();
  }, 300000);
}

window.onload = function () {
  let type = "llamada";
  let icon = "fa-solid fa-phone-volume";
  let title = "Llamada entrante";
  createToast(type, icon, title);
};
