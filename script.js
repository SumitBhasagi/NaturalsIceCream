function playVideo() {
  document.getElementById("thumbnail").style.display = "none";
  document.getElementById("video").style.display = "block";
}

function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("loadBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Load More";
  }
}
