import * as THREE from '../node_modules/three/build/three.module.js'

// 三要素：场景、相机、渲染器
let scene,
    camera,
    renderer = null

// 初始化场景
function initScene() {
    scene = new THREE.Scene()
}

// 初始化相机
function initCamera() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
}

// 初始化渲染器
function initRenderer() {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xffffff,1)
    // 将渲染器的DOM插入HTML中
    document.body.appendChild(renderer.domElement)
}

// 动画渲染
function animate() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    requestAnimationFrame(animate)
    renderer.render(scene, camera) // 将场景，相机传入渲染器
}

initRenderer()
initScene()
initCamera()

animate()



// 三要素：场景、相机、渲染器
//  scene = new THREE.Scene()
//  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1 , 1000 )
//  renderer = new THREE.WebGLRenderer()
// renderer.setSize( window.innerWidth, window.innerHeight )

// 插入至body中
// document.body.appendChild( renderer.domElement )

// 模型构建
// const geometry = new THREE.BoxGeometry( 1, 1, 1 )/  // 设置模型的形状
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )   // 设置模型材质
// const cube = new THREE.Mesh( geometry, material )  // 构建模型对象，传入形状， 材质参数

// 模型运动函数
// function geometryMove(){
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
// }

// 将模型插入至场景中
// scene.add( cube )
// camera.position.z = 5 // 设置相机z轴位置，调整。

// 渲染
// function animate(){
    // requestAnimationFrame( animate ) // THREE内置定时循环渲染

    // geometryMove()  // 模型运动

    // renderer.render( scene, camera )  // 渲染器传入场景和相机，开始渲染
// }
// animate()