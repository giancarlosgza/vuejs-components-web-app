<template>
  <div>
    <DefaultLayout :sidebar-prop="isSidebarActive">

      <div class="container mt-3">
        <div class="row">
          <div class="col-12">
            <div class="card header-hero header-sidebar">
              <div class="card-body">
                <h1>Sidebar</h1>
                <p>Sidebar contains navigation content from the website or app</p>
              </div>
            </div>
            <button class="btn-fab btn-primary-filled"
                    @click="toggleSidebar()">
              <i class="material-icons-outlined me-1">
                {{ isSidebarActive ? 'close' : 'menu_open' }}
              </i>
              {{ isSidebarActive ? 'Close sidebar' : 'Open sidebar' }}
            </button>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 mb-3">

          </div>
          <div class="col-12 mb-3">
            <a href="https://blog.colorffy.com/posts/how-to-create-an-animated-sidebar-with-vue-3"
               class="text-link"
               target="_blank" rel="noopener">
              From: https://blog.colorffy.com/posts/how-to-create-an-animated-sidebar-with-vue-3
            </a>
          </div>
        </div>
      </div>

    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "HomeView",
  components: {DefaultLayout},
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
