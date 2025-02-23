const BtnShare = document.getElementById("share-btn");

BtnShare.addEventListener("click", ToggleShare);

function ToggleShare() {
  const selectSocialLinks = document.querySelector(".social_links");
  const selectBtn = document.querySelector(".button");
  const selectBtnIcon = document.querySelector(".button_icon_Dark_Blue");

  selectSocialLinks.classList.toggle("display_none");
  selectBtn.classList.toggle("buttonActive");
  selectBtnIcon.classList.toggle("button_icon_Light_Blue");
}
