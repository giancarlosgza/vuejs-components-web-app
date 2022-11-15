<template>
  <DefaultLayout :sidebar-prop="isSidebarActive">
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
          <div class="card header-hero header-cards">
            <div class="card-body">
              <h1>Cards</h1>
              <p class="subtitle-1">Cards contain content and actions that relate information about a subject.</p>
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
        <div class="col-12">
          <h2 class="mb-3">Types</h2>
          <div class="card">
            <div class="card-body">
              <h3 class="title fw-700">Headline</h3>
              <p class="subtitle-1 fw-500 my-2">Subhead</p>
              <p class="subtitle-1 text-muted mb-2">Primary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <div>
                <div class="badge badge-filled">Filled topic</div>
                <div class="badge badge-outline">Outline topic</div>
                <div class="badge badge-outline">Outline topic</div>
              </div>
            </div>
            <div class="card-footer">
              <div>
                <button class="btn btn-primary">Read more</button>
                <button class="btn btn-primary-filled">Read more</button>
              </div>
              <button class="btn btn-link btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe5d4;</i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <img
                  src="https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="card-img"
                  alt="Card header image">
            </div>
            <div class="card-body">
              <h3 class="title fw-700">Headline</h3>
              <p class="subtitle-1 fw-500 my-2">Subhead</p>
              <p class="subtitle-1 text-muted mb-2">Primary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <div>
                <div class="badge badge-filled">Filled topic</div>
                <div class="badge badge-filled">Filled topic</div>
                <div class="badge badge-filled">Filled topic</div>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Read more</button>
              <button class="btn btn-link btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe5d4;</i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <img
                  src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="card-img"
                  alt="Card header image">
            </div>
            <div class="card-body">
              <h3 class="title fw-700">Headline</h3>
              <p class="subtitle-1 fw-500 my-2">Subhead</p>
              <p class="subtitle-1 text-muted mb-2">Primary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <div>
                <div class="badge badge-outline">Outline topic</div>
                <div class="badge badge-outline">Outline topic</div>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Read more</button>
              <button class="btn btn-link btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe5d4;</i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <img
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="card-img"
                  alt="Card header image">
            </div>
            <div class="card-body">
              <h3 class="title fw-700">Headline</h3>
              <p class="subtitle-1 fw-500 my-2">Subhead</p>
              <p class="subtitle-1 text-muted mb-2">Primary buttons are essentially filled tonal buttons with a
                shadow.</p>
              <div>
                <div class="badge badge-outline">Outline topic</div>
                <div class="badge badge-outline">Outline topic</div>
                <div class="badge badge-outline">Outline topic</div>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Read more</button>
              <button class="btn btn-link btn-icon">
                <i class="material-symbols-rounded mb-0">&#xe5d4;</i>
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
  name: "CardsView",
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
