$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(750, 110, 92, 20);
    createPlatform(1002, 220, 120, 20);
    createPlatform(610, 200, 50, 20);
    createPlatform(405, 138, 100, 20);
    createPlatform(1200, 302, 30, 20);
    createPlatform(905, 501, 90, 20);
    createPlatform(830, 600, 120, 20);
    createPlatform(600, 700, 200, 20);
    createPlatform(1101, 420, 60, 20);
    createPlatform(1000, 200, 80, 20);



    // TODO 3 - Create Collectables
    createCollectable("diamond", 400, 270, 0.5, 0.7);
    createCollectable("diamond", 800, 190, 0.5, 0.7);
    createCollectable("diamond", 1000, 240,0,5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("bottom",240, 600);
    createCannon("left",500, 960);
    createCannon("right", 200, 1000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
