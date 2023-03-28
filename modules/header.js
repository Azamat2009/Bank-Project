let user = JSON.parse(localStorage.getItem('user'))


export function header(params) {
  let body = document.body;
  let modal = document.querySelector(".modal");
  let btnOut = document.querySelector(".btnOut");
  let btnExit = document.querySelector(".btnExit");

  let header = document.createElement("div");

  let left_side = document.createElement("div");
  let spanMain = document.createElement("a");
  let spanWallet = document.createElement("a");
  let spanTrans = document.createElement("a");

  let right_side = document.createElement("div");
  let spanEmail = document.createElement("span");
  let imgExit = document.createElement("img");

  header.classList.add("header");
  left_side.classList.add("left_side");
  spanMain.classList.add("spanMin");
  spanWallet.classList.add("spanWallet");
  spanTrans.classList.add("spanTrans");
  right_side.classList.add("right_side");
  spanEmail.classList.add("spanEmail");
  imgExit.classList.add("imgExit");

  spanMain.innerHTML = "Главная";
  spanWallet.innerHTML = "Мои кошельки";
  spanTrans.innerHTML = "Мои транзакции";
  spanEmail.innerHTML = user.email;
  imgExit.src = "/public/icons/log-out.svg";
  spanWallet.href = "/pages/wallets.html"
  spanMain.href = "/index.html"
  spanTrans.href = "/pages/transactions.html"

  body.prepend(header);
  header.append(left_side, right_side);
  left_side.append(spanMain, spanWallet, spanTrans);
  right_side.append(spanEmail, imgExit);

  imgExit.onclick = () => {
    openModal();
  };

  btnOut.onclick = () => {
    closeModal();
  };

  btnExit.onclick = () => {
    localStorage.clear()
    location.assign('/pages/login.html')
    closeModal();
  };

  function openModal() {
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.opacity = "1";
      modal.style.transform = "transform: translate(-50%, -50%) scale(1)";
    }, 200);
  }

  function closeModal() {
    modal.style.display = "none";
  }
}
