<template>
  <div class="container">
    <canvas class="canvas3d" id="canvas3d"></canvas>
  </div>
  <div class="ql-home">
    <div class="ql-homeback">
    </div>
    <div class="ql-homeback_bottom">
    </div>
  </div>
  <div class="ql-home-title-layout">
    <div class="ql-home-title">
      <p>Unlock your creativity with<br>use Qionglou.js</p>
    </div>
    <div class="ql-home-peculiarity">
      <li>√ user-defined</li>
      <li>√ community</li>
      <li>√ be thoughtful</li>
    </div>
    <a class="ql-home-todco" href="/">Make vue great again<span>
      <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 5L0 5" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
<path d="M19 1L24 5.5L19 10" stroke="white" stroke-width="2" stroke-linejoin="bevel"/>
</svg>
    </span></a>
  </div>
</template>

<script setup>
import { Application } from '@splinetool/runtime'
import {onMounted} from "vue";
const { page, frontmatter } = useData()
import { useData } from 'vitepress'

onMounted(() => {
  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/tuCZo1YVk-AJCBzr/scene.splinecode');
})
</script>

<style scoped>
.ql-home-peculiarity {
  display: flex;
}
@media screen and (max-width: 466px) {
  .ql-home-peculiarity {
    display: none;
  }
  .ql-home-todco {
    margin-top: 30px;
  }
}
.ql-home-peculiarity li {
  list-style: none;
  list-style: none;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #505050;
}
.ql-home-title-layout {
  margin-top: 110px;
  z-index: 19;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ql-home-title {
  text-align: center;
  font-size: 50px;
  line-height: initial;
  font-weight: 500;
}
.ql-home {
  height: 100%;
  width: 100%;
  display: block;
}
.ql-homeback {
  position: fixed;
  width: 100%;
  top: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 79.35%);
  z-index: 16;
  height: 40%;
}
.ql-homeback_bottom {
  transform: rotate(-180deg);
  position: fixed;
  width: 100%;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff 20%, rgba(255, 255, 255, 0) 99.35%);
  z-index: 16;
  height: 19%;
}
.canvas3d {
  height: 100%;
  display: block;
}
.container {
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 16;
  width: 100vw;
}
.ql-home-todco {
  background: black;
  padding: 15px;
  color: white;
  border-radius: 11px;
  /* font-weight: 200; */
  font-size: 17px;
  display: inline-flex;
  align-items: center;
}
.ql-home-todco span {
  margin-left: 14px;
}
</style>