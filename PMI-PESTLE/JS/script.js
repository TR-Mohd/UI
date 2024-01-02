const optionMenu = document.querySelector("#sideBar"),
      selectBtn = optionMenu.querySelector(".select_btn"),
      options = optionMenu.querySelector(".options")

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'))

const riskAssessment = optionMenu.querySelector("#risk_assessment");
riskAssessment.addEventListener('click', ()=> options.classList.toggle('show'))