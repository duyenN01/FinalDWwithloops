let array =[];
let backGroundColor = 200;

// let noiseOffset = 0.0;
// let strokeWidth = 5;
function setup() {
  createCanvas(600,600);
background(backgroundColor);
strokeWeight(5);
noFill();
}

function draw() {
  // strokeWeight(strokeWidth);
  //
  // noiseOffset +=  0.05;
  // strokeWidth = noise(noiseOffset) *10;
   drawGrid();

  if (mouseIsPressed == true) {
    backgroundColor -= 5;
    //background(255,130,12,5);
    // stroke(map(mouseX,0,600,0,255,true),map(mouseY,0,600,0,115,true) );
    // line(width- mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}
function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
} else if (key === 'c'){
  //background(255);
//display image
//clear();
beginShape();
    for (let i = 0; i < array.length; i++){
      //line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
      curveVertex(array[i][0],array[i][1])
  }
  endShape();
}
  return false;

}


function drawGrid(){
  numCells = 20;
  for (let i =0; i <= width; i+= width/numCells);
    rect(i,50,width/numCells, height/numCells);

}
