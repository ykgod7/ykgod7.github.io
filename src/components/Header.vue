<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="logo"> 
        <span class="name">Jihwan Shin</span>
        <span class="pc-only">/</span>
        <span class="major">Frontend Developer</span>
      </router-link>

      <button
        class="hamburger"
        type="button"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </button>

      <transition name="fade-in">
        <div v-if="isOpen" class="mobile-nav">
          <router-link to="/" class="nav-link home">Home</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/resume" class="nav-link">Resume</router-link>
        </div>
      </transition>

      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/resume" class="nav-link">Resume</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, Transition, watch } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);


// 라우트가 바뀌면(뒤로가기 포함) 메뉴 닫기
watch(() => route.fullPath, () => closeMenu());

// 메뉴 열릴 때 스크롤 잠금(선택)
watch(isOpen, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
  document.documentElement.style.overflow = v ? "hidden" : "";
});
</script>


<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 130px;
  background: var(--bg-main);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);

  .header-inner {
    padding: 0 50px;
    height: 100%;
    display: flex;
    align-items: center;  
    justify-content: space-between;

    .hamburger {
      display: none;
    }

    .mobile-nav {
      display: none;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--text-main);
      gap: 0 10px;
      font-size: 14px;
      font-weight: normal;

      .name {
        font-family: 'Poppins';
        font-size: 30px;
        font-weight: bold;
      }

      .major {
        font-size: 17px;
      }
    }

    .nav {
      display: flex;
      gap: 20px;

      .nav-link {
        font-size: 16px;
        color: var(--text-body);
        text-decoration: none;
        position: relative;
      
        &:hover {
          color: var(--primary);
        }
      
        &.router-link-active {
          color: var(--primary);
          font-weight: 600;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .site-header {
    height: 110px;

    .header-inner {
      .logo {
        .name {
          font-size: 28px;
        }
      }

      .nav {
        .nav-link {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .site-header {
    height: 90px;

    .header-inner {
      padding: 0 20px;

      .logo {
        .name {
          font-size: 24px;
        }

        .major {
          font-size: 15px;
        }
      }

      .nav {
        gap: 18px;

        .nav-link {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 530px) {
  .pc-only {
    display: none;
  }

  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
    will-change: opacity, transform;
  }

  /* 등장 시작 상태 */
  .fade-in-enter-from,
  .fade-in-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }

  /* 등장 완료 상태 */
  .fade-in-enter-to,
  .fade-in-leave-from  {
    opacity: 1;
    transform: translateY(0);
  }

  .site-header {
    height: 80px;

    .header-inner {
      .logo {
        flex-direction: column;
        align-items: unset;
      }

      .hamburger {
        z-index: 11;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        width: 44px;
        padding: 10px;

        .bar {
          display: block;
          height: 2px;
          margin: 3px 0;
          background: #111;
          border-radius: 2px;
        }
      }

      .mobile-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        inset: 0;
        width: 100%;
        height: 100dvh;
        background-color: var(--bg-section);

        .nav-link {
          font-size: 20px;
          font-family: 'Poppins';
          font-weight: bold;

          &.home {
            color: var(--primary);
          }
        }
      }

      .nav {
        display: none;
      }
    }
  }
}

</style>
