let progressBarValue=50;
const one=1;
const three=3;
const seven=7;


function increaseBar(progressBar, number) {
    progressBarValue=progressBarValue+number;
    $("#my-progress-bar").attr("style", "width: "+progressBarValue+"%")
}

function init() {
  $("#one").on ('click', function () {
      increaseBar(progressBarValue,one);
    });
  $("#three").on ('click', function () {
      increaseBar(progressBarValue,three);
    });

  $("#seven").on ('click', function () {
      increaseBar(progressBarValue,seven);
    });
}

$(document).ready(init);