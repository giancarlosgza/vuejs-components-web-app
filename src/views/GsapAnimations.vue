<template>
  <div>
    <TheSidebar :is-sidebar-active="isSidebarActive"
                :sidebar-toggle="toggleSidebar"/>
    <TheNavbar/>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>GSAP ANIMATIONS</h1>
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

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <i class="material-symbols-rounded icon-wrap mdc-38">&#xe8b6;</i>
            <h2 class="fs-1">Far far away, behind the word mountains</h2>
            <h3>
              macOS and M2 work together to bring more speed and responsiveness to all your go‑to apps — including
              Microsoft 365 and your favorite iOS apps. Over 10,000 apps and plug‑ins are already optimized for Apple
              silicon. And Rosetta 2 seamlessly translates apps designed for Intel processors for use on your MacBook
              Pro.
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <i class="material-symbols-rounded icon-wrap mdc-38">&#xf042;</i>
            <h2 class="fs-1">Far far away, behind the word mountains</h2>
            <h3>
              Bring your photos, movies, music, and documents with you — and open them in a flash.
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <i class="material-symbols-rounded icon-wrap mdc-38">&#xef76;</i>
            <h2 class="fs-1">Far far away, behind the word mountains</h2>
            <h3>
              Faster memory.
              And more of it.
              M2 has 100GB per second of memory bandwidth — 50 percent more than M1. And it supports 24GB of unified
              memory for superfluid multitasking and working with massive files.
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <i class="material-symbols-rounded icon-wrap">&#xe145;</i>
            <h2 class="fs-1">Far far away, behind the word mountains</h2>
            <h3>
              The high-performance media engine on M2 supports ProRes encode and decode. So you can play and edit up to
              11 streams of 4K ProRes video and up to 2 streams of 8K ProRes video — including 4K ProRes video shot on
              iPhone 13 Pro.12 And convert projects to ProRes up to 3x faster than before.13
            </h3>
          </div>
        </div>
      </div>
    </div>

    <section class="section section-hero">
      <div id="section-1" class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="fs-1 text-muted">THE MOST POWERFUL</h2>
            <h2 class="fs-1">CSS AND JS ANIMATIONS</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-symbols-rounded icon-wrap">&#xe71c;</i>
                <h3>GSAP</h3>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-symbols-rounded icon-wrap">&#xe422;</i>
                <h3>GSAP CSS</h3>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-symbols-rounded icon-wrap">&#xe155;</i>
                <h3>GSAP JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import TheNavbar from "@/components/TheNavbar";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  name: "GsapAnimations",
  components: {TheNavbar, TheSidebar},
  data() {
    return {
      isSidebarActive: true
    }
  },
  mounted() {
    this.sectionsAnimate()
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive
    },
    sectionsAnimate() {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('.section-hero', {
        scrollTrigger: {
          trigger: '.section-hero',
          toggleActions: 'restart pause resume none',
        },
        backgroundColor: "#ffffff",
        duration: 3
      })
      gsap.to('.card', {
        scrollTrigger: {
          trigger: '.card',
          toggleActions: 'restart pause resume none'
        },
        transform: 'translateY(-50px)',
        duration: 3
      })
    }
  }
}
</script>
