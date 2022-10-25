<template>
  <DefaultLayout :sidebar-prop="isSidebarActive">
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
          <div class="card header-hero header-buttons">
            <div class="card-body">
              <h1>Buttons</h1>
              <p class="subtitle-1">Buttons help people initiate actions, from sending an email, to sharing a document,
                to liking a
                post.</p>
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

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="mb-3">Types</h2>
          <div class="card">
            <div class="card-body">
              <h3 class="title">Primary buttons</h3>
              <p class="subtitle-1 text-muted mb-2">Primary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <button class="btn btn-primary mx-0">Explore</button>
              <button class="btn btn-primary">Sign up</button>
              <button class="btn btn-primary btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe145;</i>
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="title">Secondary buttons</h3>
              <p class="subtitle-1 text-muted mb-2">Secondary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <button class="btn btn-secondary mx-0">Add to cart</button>
              <button class="btn btn-secondary">Make payment</button>
              <button class="btn btn-secondary btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe8cc;</i>
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="title">Accent buttons</h3>
              <p class="subtitle-1 text-muted mb-2">Accent buttons are essentially filled tonal buttons with a
                shadow.</p>
              <button class="btn btn-accent mx-0">Visit site</button>
              <button class="btn btn-accent">Create new workspace</button>
              <button class="btn btn-accent btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe7f0;</i>
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="title">Text buttons</h3>
              <p class="subtitle-1 text-muted mb-2">Text buttons are used for the lowest priority actions, especially
                when presenting
                multiple options.</p>
              <button class="btn btn-link mx-0">Subscribe</button>
              <button class="btn btn-link">Learn more</button>
              <button class="btn btn-link btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe89e;</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "ButtonsView",
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
