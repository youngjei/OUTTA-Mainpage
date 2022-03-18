$(document).ready(function () {
  $(".rectOne").hover(
    function () {
      $(".programOff").fadeOut(100);
      $(".programOn").fadeIn(100);
    },
    function () {
      $(".programOn").fadeOut(100);
      $(".programOff").fadeIn(100);
    }
  );
});

$(document).ready(function () {
  $(".rectTwo").hover(
    function () {
      $(".bookOff").fadeOut(100);
      $(".bookOn").fadeIn(100);
    },
    function () {
      $(".bookOn").fadeOut(100);
      $(".bookOff").fadeIn(100);
    }
  );
});

$(document).ready(function () {
  $(".rectThree").hover(
    function () {
      $(".resourceOff").fadeOut(100);
      $(".resourceOn").fadeIn(100);
    },
    function () {
      $(".resourceOn").fadeOut(100);
      $(".resourceOff").fadeIn(100);
    }
  );
});
