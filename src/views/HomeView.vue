<template>
  <div class="home">
    <TheSidebar :is-sidebar-active="isSidebarActive"
                :sidebar-toggle="toggleSidebar"/>
    <TheNavbar/>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Sidebar tutorial</h1>
          <a href="https://blog.colorffy.com/posts/how-to-create-an-animated-sidebar-with-vue-3"
             class="text-link"
             target="_blank" rel="noopener">
            From: https://blog.colorffy.com/posts/how-to-create-an-animated-sidebar-with-vue-3
          </a>
        </div>
        <div class="col-12 mt-3">
          <button class="btn btn-primary"
                  @click="toggleSidebar()">
            <i class="material-icons-outlined">
              {{ isSidebarActive ? 'close' : 'menu_open' }}
            </i>
            {{ isSidebarActive ? 'Close sidebar' : 'Open sidebar' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSidebar from "@/components/TheSidebar";
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "HomeView",
  components: {TheNavbar, TheSidebar},
  data() {
    return {
      isSidebarActive: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive
    }
  }
}
</script>
