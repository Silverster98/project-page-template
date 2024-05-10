import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';

const W_H = 16 / 9;
const canvas = document.querySelector('#canvas-static');
const modelUrl = new URL('/static/glbs/pose.glb', import.meta.url);

const scene = new THREE.Scene();
// load glb model and add to scene
const assetLoader = new GLTFLoader();
assetLoader.load(modelUrl.href, function(gltf) {
    const model = gltf.scene;
    model.rotateX(-Math.PI / 2)
    scene.add(model);
}, undefined, function(error) {
    console.error(error);
});

// create camera
const camera = new THREE.PerspectiveCamera(45, W_H, 0.1, 100);
camera.position.set(3, 2, -3);
scene.add(camera);

// create light
for (let i = 0; i <= 1; i++) {
  for (let k = 0; k <= 1; k++) {
    let spotLight = new THREE.SpotLight(0xAAAAAA)
    spotLight.position.set(50 * (i * 2 - 1), 100, 100 * (k * 2 - 1))
    scene.add(spotLight)
  }
}

// create grid
const grid = new THREE.GridHelper(30, 30);
scene.add(grid);

// create controls
const controls = new OrbitControls(camera, canvas);
controls.enableZoom = true;
controls.enableDamping = true;
controls.object.position.set(camera.position.x, camera.position.y, camera.position.z);
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();

// create renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

// resize renderers
function resizeRenderers() {
  let content_width = document.querySelector('#canvas-static-container').offsetWidth;
    renderer.setSize(content_width, content_width / W_H);
}
window.addEventListener('resize', () => {
  resizeRenderers();
})
resizeRenderers();