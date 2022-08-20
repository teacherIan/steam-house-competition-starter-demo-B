//imports

import * as THREE from 'three';

//scene initialization

import {
  camera,
  scene,
  renderer,
  createSphere,
  createCube,
  objectArray,
} from './init';

//no need to touch any of the code above

//You can change the camera position on the X, Y, or Z axis

camera.position.set(100, 50, 100);
camera.lookAt(0, 0, 0);

const clock = new THREE.Clock();

//Any code to initialize your objects should go here
//Any object created using createSphere() or createCube()
//Will be added to an array named 'objectArray'

for (let i = 0; i < 150; i++) {
  createSphere();
}

const loop = () => {
  //You can use the clock get elapsed time method to get the time elapsed since the start of the program

  const elapsedTime = clock.getElapsedTime();

  //Any code that will need to be updated on each frame should go here
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].position.y = Math.cos(elapsedTime * 0.2 + i) * i * 0.3;
    objectArray[i].position.z = Math.sin(elapsedTime * 0.2 + i) * i * 0.3;
  }

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
