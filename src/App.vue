<template>
  <div>
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
