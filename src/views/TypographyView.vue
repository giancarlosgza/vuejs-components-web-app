<template>
  <div>
    <DefaultLayout :sidebar-prop="isSidebarActive">
      <div class="container mb-3">
        <div class="row">
          <div class="col-12">
            <button class="btn btn-primary"
                    @click="toggleSidebar()">
              <i class="material-icons-outlined">
                {{ isSidebarActive ? 'close' : 'menu_open' }}
              </i>
              {{ isSidebarActive ? 'Close sidebar' : 'Open sidebar' }}
            </button>
            <h1>H1 typography</h1>
            <h2>H2 typography</h2>
            <h3>H3 typography</h3>
            <h4>H4 typography</h4>
            <h5>H5 typography</h5>
            <h6>H6 typography</h6>
          </div>
        </div>
      </div>

      <section class="section section-one">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="text-gradient green">Examples</h2>
            </div>
            <div class="col-12">
              <h3 class="text-primary">Text primary</h3>
              <h3 class="text-secondary">Text secondary</h3>
              <h3>Text default</h3>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "TypographyView",
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
