import * as THREE from '../node_modules/three/build/three.module.js'

// 三要素：场景、相机、渲染器
let scene,
    camera,
    axesHelper,
    renderer,
    grid;

// 初始化场景
function initScene() {
    scene = new THREE.Scene()
}

// 初始化相机
function initCamera() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 20
    camera.position.y = 20
    camera.position.x = 10
}

// 初始化渲染器
function initRenderer() {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    // renderer.setClearColor(0xffffff, 1)
    // 将渲染器的DOM插入HTML中
    document.body.appendChild(renderer.domElement)
}

// 初始化参考坐标轴
function initAxesHelper(){

}

// 初始化辅助网格线
function initGrid(){
    grid = new THREE.GridHelper( 200 , 20 )
    
}
initGrid()
initRenderer()
initScene()
initCamera()
    
    
scene.add( grid )

function inSquare(ps, p) {
    let minDistance;
    // 计算正方形两条对角线的长度
    let a = Math.sqrt((ps[1].x - ps[0].x) ** 2 + (ps[1].y - ps[0].y) ** 2);
    let b = Math.sqrt((ps[2].x - ps[3].x) ** 2 + (ps[2].y - ps[3].y) ** 2);
    
    // 计算点到两条对角线的距离
    let s1 = (ps[1].x - ps[0].x) * (ps[0].y - p.y) - (ps[0].x - p.x) * (ps[1].y - ps[0].y);
    let s2 = (ps[3].x - ps[2].x) * (ps[2].y - p.y) - (ps[2].x - p.x) * (ps[3].y - ps[2].y);
    let distance1 = Math.abs(s1) / a;
    let distance2 = Math.abs(s2) / b;
    
    // 如果两条距离都小于1,则点在正方形内
    if (distance1 < 1 && distance2 < 1) {
      return true;
    } else {
      minDistance = Math.min(distance1, distance2);
      console.log(minDistance)
      return false;
    } 
    
  }
let squareArr = [
    {x:1,y:1},
    {x:-1,y:1},
    {x:1,y:-1},
    {x:-1,y:-1}
]
inSquare(squareArr,{x:1,y:0})




// 动画渲染
function animate() {
    requestAnimationFrame(animate)
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.render(scene, camera) // 将场景，相机传入渲染器
}
animate()


console.log(grid)