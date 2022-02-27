console.log("%cA%cc%ck%cn%co%cw%cl%ce%cd%cg%cm%ce%cn%ct%cs%c\n3D Engine: https://threejs.org\nParticles: https://github.com/VincentGarreau/particles.js/\nCar Model: https://skfb.ly/orBBv\nEverything Else: Mushroomcraft#999 https://discord.gg/xvdMaz67qp","color:#f00","color:#f90","color:#ff0","color:#0f0","color:#09f","color:#99f","color:#f00","color:#f90","color:#ff0","color:#0f0","color:#09f","color:#99f","color:#f00","color:#f90","color:#ff0","color:#fff");import{GLTFLoader}from"https://mushroomcraft1.github.io/GLTFLoader.js";if(!document.getElementById("carScene")){const div=document.createElement("div");div.setAttribute("id","carScene");document.body.appendChild(div)}document.getElementById("carScene").innerHTML=`<div id="particlesElement"style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;background-color:#000;"></div><canvas id="carSceneCanvas"style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;"></canvas>`;function addScript(src,callback){const s=document.createElement("script");s.setAttribute("src", src);s.onload=callback;document.body.appendChild(s)}const threeLoad=()=>{particlesJS.load("particlesElement","https://mushroomcraft1.github.io/particles.json");var mouseX=0;{var scene=new THREE.Scene;var camera=new THREE.PerspectiveCamera(75,1,.1,1E3);var canvas=document.getElementById("carSceneCanvas");var renderer=new THREE.WebGLRenderer({alpha:true,canvas:canvas,antialias:true});var pointLight=new THREE.PointLight(16777215,1,100);var clock=new THREE.Clock;pointLight.intensity=0;pointLight.position.set(-9,4,3);scene.add(pointLight);var light=new THREE.AmbientLight(16777215,.3);scene.add(light);var texture=(new THREE.TextureLoader).load("https://mushroomcraft1.github.io/3d/road.jpg");texture.wrapS=THREE.RepeatWrapping;texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(1,18);var road=new THREE.Mesh(new THREE.BoxGeometry(8,0,400),new THREE.MeshBasicMaterial({map:texture}));scene.add(road);road.position.set(0,-2.5,-3.5);road.rotation.y=-1.6;var gltfLoader=new GLTFLoader;var car,wheels;var mixers=[];gltfLoader.load("https://mushroomcraft1.github.io/3d/car.glb",function(gltf){car=gltf.scene;scene.add(car);var mixer=new THREE.AnimationMixer(car.children[5]);mixer.update(clock.getDelta());mixer.clipAction(gltf.animations[0]).setDuration(.75).play();mixers.push(mixer);mixer=new THREE.AnimationMixer(car.children[6]);mixer.update(clock.getDelta());mixer.clipAction(gltf.animations[1]).setDuration(.75).play();mixers.push(mixer);car.rotation.y=-1.6;car.position.y=-1;car.position.z=-1});renderer.setClearColor(0,0);camera.position.z=5;var animate=function(){camera.aspect=canvas.clientWidth/canvas.clientHeight;renderer.setPixelRatio(window.devicePixelRatio*4);camera.updateProjectionMatrix();requestAnimationFrame(animate);if(car)car.rotation.y=(window.innerWidth-mouseX)/window.innerHeight/2-2,road.rotation.y=car.rotation.y;pointLight.position.x+=.1;if(pointLight.position.x>9)pointLight.position.x=-9,pointLight.intensity=0;if(pointLight.position.x>0)pointLight.intensity-=.02;else pointLight.intensity+=.02;texture.offset.y-=.02;if(texture.offset.y<-1)texture.offset.y=.02;var delta=clock.getDelta();for(var i in mixers)mixers[i].update(delta);renderer.render(scene,camera)};animate()}addEventListener("mousemove",function(e){mouseX=e.clientX},false)};const particlesLoad=()=>{addScript("https://mushroomcraft1.github.io/threeJSMini.js",threeLoad)};addScript("https://mushroomcraft1.github.io/particles.js",particlesLoad)
