<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="logo"> 
        <span class="name">Jihwan Shin</span>
        <span>/</span>
        <span class="major">Frontend Developer</span>
      </router-link>

      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/resume" class="nav-link">Resume</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

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
        font-size: 14px;
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

</style>
