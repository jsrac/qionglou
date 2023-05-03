---
layout: home
title: Vue3 原子化组件库
---

<Home :title-content="'使用琼楼释放你的<br>创造力'" :peculiarity-list="homePeculiarity" todcoText="阅读文档" />

<script setup>
import Home from '/.vitepress/theme/Home.vue';

const homePeculiarity = [
    '√ 可自定义', 
    '√ 生态社区', 
    '√ 深思熟虑'
]
</script>

<style>
.VPHome {
  padding-bottom: 0 !important
}
</style>
