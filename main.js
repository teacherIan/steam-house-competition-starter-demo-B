//imports
import * as THREE from 'three';
//scene initialization
import { camera, scene, renderer } from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(50, 50, 50);
camera.lookAt(0, 0, 0);

//Any code to initialize your objects should go here

//create an empty array
let objectArray = [];

//create 10 boxes and add them to the array
for (let i = 0; i < 50; i++) {
  const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 32, 32),
    new THREE.MeshNormalMaterial()
  );

  objectArray.push(sphere);
  objectArray[i].position.x = i * 2 - 50;
  scene.add(sphere);
}
const clock = new THREE.Clock();

const loop = () => {
  //total elapsed time.  This can be useful for trig functions
  const elapsedTime = clock.getElapsedTime();

  //Any code that will need to be updated on each frame should go here

  //This code below creates a spiral.  Can you tell why?
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].position.y = Math.cos(elapsedTime + i * 2) * 5 + i;
    objectArray[i].position.z = Math.sin(elapsedTime + i * 2) * 5 + i;
  }

  // can be used to view the camera position
  // console.log(camera.position);

  //update scene on next frame.  Don't change this
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
