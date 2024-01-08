const PMBtn = document.querySelector("#PM-btn"),
  PMOptions = document.querySelector("#PM-options"),
  SCMBtn = document.querySelector("#SCM-btn"),
  SCMOptions = document.querySelector("#SCM-options"),
  CRMBtn = document.querySelector("#CRM-btn"),
  CRMOptions = document.querySelector("#CRM-options"),
  RABtn = document.querySelector("#RA-btn"),
  RAOptions = document.querySelector("#RA-options"),
  profileBtn = document.querySelector("#profile-btn"),
  users = document.querySelector("#users");
  
function toggle_PM_menu() {
  SCMOptions.classList.remove("open-menu");
  CRMOptions.classList.remove("open-menu");
  SCMBtn.classList.remove("opened");
  CRMBtn.classList.remove("opened");
  PMOptions.classList.toggle("open-menu");
  PMBtn.classList.toggle("opened");
}
function toggle_SCM_menu() {
  PMOptions.classList.remove("open-menu");
  CRMOptions.classList.remove("open-menu");
  PMBtn.classList.remove("opened");
  CRMBtn.classList.remove("opened");
  RAOptions.classList.remove("open-menu");
  RABtn.classList.remove("opened");
  SCMOptions.classList.toggle("open-menu");
  SCMBtn.classList.toggle("opened");
}
function toggle_CRM_menu() {
  PMOptions.classList.remove("open-menu");
  SCMOptions.classList.remove("open-menu");
  PMBtn.classList.remove("opened");
  SCMBtn.classList.remove("opened");
  RAOptions.classList.remove("open-menu");
  RABtn.classList.remove("opened");
  CRMOptions.classList.toggle("open-menu");
  CRMBtn.classList.toggle("opened");
}
function toggle_RA_menu() {
  RAOptions.classList.toggle("open-menu");
  RABtn.classList.toggle("opened");
}
function toggle_profile_option() {
  document.body.classList.toggle('open-profile')
}