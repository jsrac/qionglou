<template>
  <div class="qldocs-ads"
       @click="adsClosure"
       ref="buttonRef">
    <a :href="href || ''" target="_blank">
      <img :src="src">
    </a>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'QlDocAds',
  props: {
    href: {
      type: String,
      default: 'https://www.pigcha.com.hk/',
    },
    src: {
      type: String,
      default: 'https://github.com/jsrac/qionglou/assets/57232813/56121268-319a-44e8-b105-0f76d28c327e'
    }
  },
  setup() {
    const buttonRef = ref(null);

    const adsClosure = () => {
      const target = buttonRef.value;
      if (target) {
        target.style.display = 'none';
        target.style.background = '#ffffff00';
      }
    };

    return { buttonRef, adsClosure };
  }
}
</script>

<style scoped>
@media screen and (max-width: 1540px) {
  .qldocs-ads {
    display: none;
    transition: color 0.54s, opacity 0.25s
  }
}
.qldocs-ads {
  position: fixed;
  bottom: 30px;
  background: #ffffff00;
  width: 224px;
  border: 1px solid #f6f6f6;
  transition: color 0.54s, opacity 0.25s;
  height: 256px;
  right: 12vw;
}
.qldocs-ads:hover {
  opacity: 0.8;
  transition: color 0.54s, opacity 0.25s
}
</style>
