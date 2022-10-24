<template>
  <div>
    <div :class="['sidebar', isSidebarActive  ? '' : 'sidebar-hidden']">
      <div class="sidebar-content">
        <div class="sidebar-header">
          <p>Components menu</p>
          <button class="btn btn-sm btn-link"
                  @click="sidebarToggle()">
            <i class="material-icons-outlined">close</i>
          </button>
        </div>
        <div class="sidebar-body">
          <ul>
            <li class="sidebar-item">
              <router-link to="/">
                <i class="material-icons-outlined">code</i>
                Sidebar
              </router-link>
            </li>
            <li class="sidebar-item disabled">
              <router-link to="/" :disabled="isDisabled">
                <i class="material-icons-outlined">code</i>
                Buttons
              </router-link>
            </li>
            <li class="sidebar-item disabled">
              <router-link to="/" :disabled="isDisabled">
                <i class="material-icons-outlined">code</i>
                Cards
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/gsap">
                <i class="material-icons-outlined">code</i>
                GSAP
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/typography">
                <i class="material-icons-outlined">code</i>
                Typography
              </router-link>
            </li>
            <li class="sidebar-item disabled">
              <router-link to="/" :disabled="isDisabled">
                <i class="material-icons-outlined">code</i>
                Navbar
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-footer">
          <a href="https://blog.colorffy.com" target="_blank" rel="noopener">
            By: blog.colorffy.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  props: {
    isSidebarActive: {
      type: Boolean,
      default: null
    },
    sidebarToggle: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      isDisabled: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
