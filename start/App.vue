<template>
  <!-- <ql-icon /> -->
  <QlButton type="text" size="mini" @click="handleButtonClick">
    hello
  </QlButton>
  <QlButton type="outlined" size="small" @click="handleButtonClick">
    hello
  </QlButton>
  <QlButton type="default" @click="handleButtonClick"> hello </QlButton>
  <QlButton
    v-water
    type="default"
    size="large"
    icon="fingerprint"
    @click="handleButtonClick"
  >
    HELLO
  </QlButton>
  <ql-button icon="fingerprint"></ql-button>

  <ql-icon size="40">face</ql-icon>

  <ql-icon>face</ql-icon>

  <ql-icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="{1.5}"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
      />
    </svg>
  </ql-icon>

  <ql-button size="">测试</ql-button>
</template>

<script setup lang="ts">
  import { QlButton, QlIcon } from '@qionglou/components'
  function handleButtonClick() {
    console.log('handleButtonClick')
  }
  const vWater = {
    mounted(element) {
      const WATER_BACKGROUND_COLOR = `rgba(0,0,0,0.2)`
      const WATER_DISPOSE_TIME = 380
      element.style.overflow = 'hidden'
      let position = getComputedStyle(element).position
      let maxSize =
        element.offsetWidth > element.offsetHeight
          ? element.offsetWidth
          : element.offsetHeight
      if (position == 'static') {
        element.style.position = 'relative'
      }

      element.onclick = ({ layerX, layerY }) => {
        let water = document.createElement('div')
        water.style.cssText = `
          background-color: ${WATER_BACKGROUND_COLOR};
          width: ${maxSize}px;
          height: ${maxSize}px;
          position: absolute;
          left: ${layerX}px;
          top: ${layerY}px;
          margin-left: -${maxSize / 2}px;
          margin-top: -${maxSize / 2}px;
          border-radius: 48%;
          zoom: 1;
          transform: scale(0);
          transition: ${WATER_DISPOSE_TIME / 1000}s all;
          pointer-events: none;
          transition-timing-function: ease-in;
        `
        element.appendChild(water)
        setTimeout(() => {
          water.style.transform = `scale(2)`
        }, 0)
        setTimeout(() => {
          water.remove()
        }, WATER_DISPOSE_TIME)
      }
    }
  }
</script>

<style scoped lang="scss">
  .ql-button {
    margin-right: 20px;
  }
</style>
