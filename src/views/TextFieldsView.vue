<template>
  <DefaultLayout :sidebar-prop="isSidebarActive">
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
          <div class="card header-hero header-buttons">
            <div class="card-body">
              <h1>Text Fields</h1>
              <p class="subtitle-1">
                Text fields allow users to enter text into a UI. They typically
                appear in forms and dialogs.
              </p>
            </div>
          </div>
          <button class="btn-fab btn-primary-filled" @click="toggleSidebar()">
            <i class="material-icons-outlined me-1">
              {{ isSidebarActive ? "close" : "menu_open" }}
            </i>
            {{ isSidebarActive ? "Close sidebar" : "Open sidebar" }}
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="mb-3">Types</h2>
        </div>
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="title">Filled</h3>
              <p class="subtitle-1 text-muted mb-2">
                Primary buttons are essentially filled tonal buttons with a
                shadow.
              </p>

              <div class="row mt-3">
                <div class="col-4">
                  <div class="form-control">
                    <label for="input-filled">First name</label>
                    <input
                        id="input-filled"
                        type="text"
                        class="text-field filled-field"
                        name="First name"
                        placeholder="First name"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-control">
                    <label for="input-filled">Username</label>
                    <span class="material-symbols-rounded">&#xe853;</span>
                    <input
                        id="input-filled"
                        type="text"
                        class="text-field filled-field"
                        name="Username"
                        placeholder="Username"
                    />
                  </div>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-4">
                  <div class="form-control">
                    <label for="input-outline">Last name</label>
                    <input
                        id="input-outline"
                        type="text"
                        class="text-field outline-field"
                        name="Last name"
                        placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-control">
                    <label for="input-outline">Phone</label>
                    <span class="material-symbols-rounded">&#xe0b0;</span>
                    <input
                        id="input-outline"
                        type="text"
                        class="text-field outline-field"
                        name="Phone"
                        placeholder="Phone"
                    />
                  </div>
                </div>
              </div>

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
  name: "TextFieldsView",
  components: {DefaultLayout},
  data() {
    return {
      isSidebarActive: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>
