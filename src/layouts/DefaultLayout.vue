<template>
  <div>
    <TheSidebar :is-sidebar-active="sidebarProp"/>
    <TheNavbar/>
    <slot/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from "@/components/TheSidebar";

export default {
  props: {
    sidebarProp: {
      type: Boolean,
      default: null
    },
    toggleProps: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      isSidebarActive: this.sidebarProp
    }
  },
  components: {TheNavbar, TheSidebar},
  // methods: {
  //   toggleSidebar() {
  //     this.isSidebarActive = !this.isSidebarActive
  //   }
  // }
}
</script>
