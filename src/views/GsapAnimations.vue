<template>
  <div>
    <DefaultLayout :sidebar-prop="isSidebarActive">

      <div class="container mt-3">
        <div class="row">
          <div class="col-12">
            <div class="card header-hero header-buttons">
              <div class="card-body">
                <h1>GSAP</h1>
                <p class="subtitle-1">Motion animations using GSAP.</p>
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

      <div class="section section-one">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <i class="material-symbols-rounded icon-wrap mdc-38">&#xe8b6;</i>
              <h2 class="text-gradient green">
                The smartest and fastest Pixel yet.
              </h2>
              <h3 class="title">
                macOS and M2 work together to bring more speed and responsiveness
                to all your go‑to apps — including Microsoft 365 and your favorite
                iOS apps. Over 10,000 apps and plug‑ins are already optimized for
                Apple silicon. And Rosetta 2 seamlessly translates apps designed
                for Intel processors for use on your MacBook Pro.
              </h3>
            </div>
            <div class="col-6">
              <img
                  src="@/assets/img/keyboard.jpg"
                  loading="lazy"
                  class="img-fluid img-keyboard"
                  alt="Keyboard image"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <i class="material-symbols-rounded icon-wrap mdc-38">&#xf042;</i>
              <h2>
                Google Tensor: Our first custom-built processor.
              </h2>
              <h3 class="title text-muted">
                Bring your photos, movies, music, and documents with you — and
                open them in a flash.
              </h3>
            </div>
            <div class="col-6">
              <i class="material-symbols-rounded icon-wrap mdc-38">&#xef76;</i>
              <h2>The most advanced smartphone camera.</h2>
              <h3 class="title text-muted">
                Faster memory. And more of it. M2 has 100GB per second of memory
                bandwidth — 50 percent more than M1. And it supports 24GB of
                unified memory for superfluid multitasking and working with
                massive files.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <img
                  src="@/assets/img/pc.jpg"
                  loading="lazy"
                  class="img-fluid img-pc"
                  alt="Keyboard image"
              />
            </div>
            <div class="col-6">
              <i class="material-symbols-rounded icon-wrap">&#xe145;</i>
              <h2 class="text-gradient orange">
                Redesigned for powerful performance.
              </h2>
              <h3 class="title text-muted">
                The high-performance media engine on M2 supports ProRes encode and
                decode. So you can play and edit up to 11 streams of 4K ProRes
                video and up to 2 streams of 8K ProRes video — including 4K ProRes
                video shot on iPhone 13 Pro.12 And convert projects to ProRes up
                to 3x faster than before.13
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section class="section section-hero">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="text-hero is-separated">
                Powerful <span class="text-gradient green">CSS</span> and
                <span class="text-gradient gold">JS</span> animations
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-cards">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="card">
                <div class="card-body text-center">
                  <i class="material-symbols-rounded icon-wrap">&#xe71c;</i>
                  <h3 class="title">GSAP</h3>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="card-body text-center">
                  <i class="material-symbols-rounded icon-wrap">&#xe422;</i>
                  <h3 class="title">GSAP CSS</h3>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="card-body text-center">
                  <i class="material-symbols-rounded icon-wrap">&#xe155;</i>
                  <h3 class="title">GSAP JS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center">
              <h2>Grab-and-go accessories.</h2>
              <img
                  src="@/assets/img/laptop.jpg"
                  loading="lazy"
                  class="img-fluid img-laptop mt-3"
                  width="800p"
                  height="800"
                  alt="Laptop image"
              />
              <p class="mt-3">
                <a href="#" class="btn btn-accent">Shop all Pixel 6 Pro accessories</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "GsapAnimations",
  components: {DefaultLayout},
  data() {
    return {
      isSidebarActive: true,
    };
  },
  mounted() {
    this.sectionsAnimate();
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    sectionsAnimate() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".img-keyboard", {
        scrollTrigger: {
          trigger: ".img-keyboard",
          toggleActions: "resume pause resume none",
          start: "center bottom",
        },
        width: "90%",
        borderRadius: "100px 0 100px 0",
        duration: 2,
      });
      gsap.to(".img-pc", {
        scrollTrigger: {
          trigger: ".img-pc",
          toggleActions: "resume pause resume none",
          start: "center center",
        },
        width: "90%",
        borderRadius: "100px 0 100px 0",
        duration: 2,
      });
      gsap.to(".is-separated", {
        scrollTrigger: {
          trigger: ".is-separated",
          toggleActions: "resume pause resume none",
          start: "center center",
        },
        ease: 'ease-in-out',
        letterSpacing: "-0.05em",
        duration: 1,
      });
      gsap.to(".section-hero", {
        scrollTrigger: {
          trigger: ".section-hero",
          toggleActions: "restart pause resume none",
        },
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 3,
      });
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".card",
          toggleActions: "restart pause resume none",
        },
        transform: "translateY(-80px)",
        borderRadius: "25px",
        duration: 1,
      });
    },
  },
};
</script>
