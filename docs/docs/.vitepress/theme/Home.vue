<template>
  <div class="home-layout">
    <div class="canvas-body">
      <canvas class="canvas3d" ref="canvas3d" id="canvas3d"></canvas>
    </div>
    <div class="ql-home">
      <div class="ql-homeback"></div>
      <div class="ql-homeback_bottom"></div>
    </div>
    <div class="ql-home-title-layout">
      <div class="ql-home-title">
        <p v-html="titleContent"></p>
      </div>
      <ul class="ql-home-peculiarity">
        <li v-for="item in peculiarityList" :key="item">{{ item }}</li>
      </ul>
      <a class="ql-home-todco" :href="todcoTo">
        <p>{{ todcoText }}</p>
        <span>
          <svg
            width="25"
            height="11"
            viewBox="0 0 25 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 5L0 5"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="bevel"
            />
            <path
              d="M19 1L24 5.5L19 10"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="bevel"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'
  import { Application } from '@splinetool/runtime'
  import { onMounted } from 'vue'

  const canvas3d = ref()
  function applyHome() {
    const app = new Application(canvas3d.value)
    app.load('https://prod.spline.design/tuCZo1YVk-AJCBzr/scene.splinecode')
  }

  const props = defineProps({
    titleContent: {
      type: String,
      default: 'Unlock your creativity with<br>use Qionglou'
    },
    peculiarityList: {
      type: Array,
      default: () => ['√ user-defined', '√ community', '√ be thoughtful']
    },
    todcoText: {
      type: String,
      default: 'Make vue great again'
    },
    todcoTo: {
      type: String,
      default: ''
    }
  })

  onMounted(async () => {
    await applyHome()
  })
</script>

<style scoped lang="scss">
  .dark .canvas3d {
    opacity: 0.1;
  }
  .canvas-body {
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 16;
    width: 100vw;

    .canvas3d {
      height: 100%;
      display: block;
    }
  }

  .dark .ql-home-peculiarity li {
    color: #fffff5db;
  }

  .ql-home {
    height: 100%;
    width: 100%;
    display: block;

    &-todco {
      background: black;
      padding: 15px;
      border-radius: 11px;
      /* font-weight: 200; */
      font-size: 17px;
      display: inline-flex;
      align-items: center;
      transition: 0.9s ease;

      &:hover {
        color: #e7e0e0;
        background: #272525;

        p::after {
          width: 100%;
        }
      }

      &:hover span {
        transform: translateX(3px);
      }

      span {
        margin-left: 14px;
        transform: translateX(0);
        transition: transform 0.3s ease;
      }

      p {
        position: relative;
        color: white;
        display: inline-block;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.21);
          transition: width 0.3s ease;
        }
      }
    }

    &-title {
      text-align: center;
      font-size: 2.05vw;
      line-height: initial;
      font-weight: 500;

      &-layout {
        margin-top: 5vw;
        z-index: 19;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &-peculiarity {
      display: flex;

      li {
        list-style: none;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 500;
        color: #505050;
      }
    }
  }

  .ql-homeback {
    position: fixed;
    width: 100%;
    top: 0;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 79.35%
    );
    z-index: 16;
    height: 40%;
  }
  .dark .ql-homeback {
    background: linear-gradient(180deg, #00000073 2%, rgba(0, 0, 0, 0) 54.35%);
  }

  .ql-homeback_bottom {
    transform: rotate(-180deg);
    position: fixed;
    width: 100%;
    bottom: 0;
    background: linear-gradient(
      180deg,
      #ffffff 20%,
      rgba(255, 255, 255, 0) 99.35%
    );
    z-index: 16;
    height: 19%;
  }
  .dark .ql-homeback_bottom {
    background: linear-gradient(180deg, #1e1e20 22%, rgba(0, 0, 0, 0) 54.35%);
  }

  .dark .ql-home-todco {
    background: #fffff5db;
    color: #000000;
  }
  .dark .ql-home-todco p {
    color: #000000;
  }

  .dark .ql-home-todco span svg path {
    stroke: black;
  }

  @media screen and (max-width: 466px) {
    .ql-home-peculiarity {
      display: none;
    }
    .ql-home-todco {
      margin-top: 30px;
    }
  }
</style>
