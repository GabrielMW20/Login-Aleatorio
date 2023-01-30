const btnToast = document.getElementById("inicial-emoji");
btnToast.addEventListener("click", () => {
    const toast = document.getElementById("toast");
    const container = document.getElementById("toastContainer");
    const novoToast = toast.cloneNode(true);
    novoToast.lastElementChild.innerHTML = "https://github.com/GabrielMW20<br>www.linkedin.com/in/gabriel-welnecker";
    container.appendChild(novoToast);
    const bsToast = new bootstrap.Toast(novoToast, {});
    bsToast.show();
});