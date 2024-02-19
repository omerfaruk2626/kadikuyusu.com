
//! -----------------------RADİO--------------------//

var radio = document.getElementById("radio");

function toggleRadio() {
  if (radio.paused) {
    radio.play();
  } else {
    radio.pause();
  }
  radio.volume = 0.03;
}

function pauseRadio() {
  radio.pause();
}

function setVolume(volume) {
  radio.volume = parseFloat(volume);
}

radio.addEventListener('playing', function () {
  radio.volume = 0.03;
});

//! -----------------------SECTİON--------------------//

function showSection(sectionId) {

  var sections = document.querySelectorAll('#main-content section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });


  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}



