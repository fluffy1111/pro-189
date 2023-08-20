AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
      this.stop();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp" ||
          e.key === "ArrowRight" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowDown" 
        ) {
        }
      });
    },
    stop: function () {
      window.addEventListener("keyup", (e) => {
        if (
          e.key === "ArrowUp" ||
          e.key === "ArrowRight" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowDown" 
        ) {
        }
      });
    }
  });
  