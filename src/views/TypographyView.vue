<template>
  <div>
    <DefaultLayout :sidebar-prop="isSidebarActive">
      <div class="container mt-3">
        <div class="row">
          <div class="col-12">
            <div class="card header-hero header-typography">
              <div class="card-body">
                <h1>Typography</h1>
                <p class="subtitle-1">Use typography to make writing legible and beautiful.</p>
              </div>
            </div>
            <button class="btn-fab btn-secondary"
                    @click="toggleSidebar()">
              <i class="material-icons-outlined me-1">
                {{ isSidebarActive ? 'close' : 'menu_open' }}
              </i>
              {{ isSidebarActive ? 'Close sidebar' : 'Open sidebar' }}
            </button>
          </div>
        </div>
      </div>

      <div class="container mb-3">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-3">Type scale</h2>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h1>H1 typography</h1>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h2>H2 typography</h2>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3>H3 typography</h3>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4>H4 typography</h4>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5>H5 typography</h5>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h6>H6 typography</h6>
                <p class="subtitle-1 text-muted mb-2">For hero and main landing page texts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section section-one">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-3">
              <h2 class="text-gradient green">Examples</h2>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h3 class="title text-primary">Text primary</h3>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h3 class="title text-secondary">Text secondary</h3>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h3 class="title">Text default</h3>
                </div>
              </div>
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
