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
  import { defineProps, ref, onMounted } from 'vue'
  import { Application } from '@splinetool/runtime'

  const canvas3d = ref(null)
  onMounted(() => {
    const app = new Application(canvas3d.value)
    app.load('https://prod.spline.design/tuCZo1YVk-AJCBzr/scene.splinecode')
  })

  const props = defineProps({
    titleContent: {
      type: String,
      default: 'Unlock your creativity with<br>use Qionglou'
    },
    peculiarityList: {
      type: Array,
      default: () => ['✓ user-defined', '✓ community', '✓ be thoughtful']
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
</script>

<style scoped lang="scss">
  $width: 80%;
  $offset: 64px;

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
      height: 105%;
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
      padding: 1vw;
      border-radius: 11px;
      /* font-weight: 200; */
      font-size: 1.05vw;
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
    @media screen and (max-width: 500px) {
      &-title {
        font-size: 5vw !important;
      }
    }
    @media screen and (max-width: 500px) {
      &-todco {
        padding: 2.5vw;
      }
    }
    &-title {
      text-align: left;
      font-size: 3.05vw;
      line-height: initial;
      font-weight: 500;

      &-layout {
        margin-top: 5vw;
        z-index: 19;
        position: relative;
        display: flex;
        flex-direction: column;
        width: calc(#{$width} - #{$offset});
        align-items: baseline;
        margin: 0 auto;
        margin-top: 11vw;
      }
      @media screen and (max-width: 500px) {
        &-layout {
          width: 90%;
        }
      }
      @media screen and (max-width: 960px) {
        &-layout {
          width: 90%;
        }
      }
    }

    &-peculiarity {
      display: flex;
      margin-top: 0.5vw;
      margin-bottom: 0.5vw;

      li {
        list-style: none;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 1.05vw;
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
