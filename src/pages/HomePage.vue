<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-inner">
      <div class="hero-content">
        <aside class="hero-profile">
          <div class="profile-top">
            <div class="img-container">
              <img src="@/assets/images/profile_img.jpg" alt="본인 얼굴 사진" />
            </div>
  
            <h1 class="profile-name">Jihwan<br/>Shin</h1>
  
            <div class="divider"></div>
  
            <p class="profile-role">Frontend Developer</p>
          </div>
          <div class="profile-bottom">
            <a href="https://github.com/ykgod7" target="_blank">
              <img src="@/assets/images/github-icon.png" alt="" />
            </a>
            <a href="https://github.com/your-id" target="_blank">
              <img src="@/assets/images/instagram-icon.png" alt="" />
            </a>
          </div>
        </aside>

        <div class="hero-description">
          <h2 class="title">Hello, I'm Jihwan.</h2>
          <p class="subtitle">Frontend Developer building clear and scalable interfaces.</p>

          <div class="btn-container">
            <router-link to="/resume" class="btn primary">RESUME</router-link>
            <router-link to="/projects" class="btn ghost">PROJECTS</router-link>
          </div>

          <p class="description">
            I’m a frontend developer focused on building clean,<br/> 
            maintainable UI for real-world services. <br />
            I enjoy structuring complex data and logic <br/>
            into interfaces that feel simple and natural to use.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: var(--bg-main);
}

.hero-inner {
  position: relative;
  height: 100%;
  min-height: 90dvh;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    left: 0;
    width: 40%;
    background: var(--bg-section);
  }

  &::after {
    right: 0;
    width: 60%;
    background: var(--bg-main);
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 375px 1fr;
  gap: 45px;
  align-items: center;
  position: relative;
  z-index: 1;
  max-width: 1000px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);

  .hero-profile {
    height: 100%;
    box-shadow: -11.31px 11.31px 17px 0px rgba(138, 131, 124, 0.23);
    border-radius: 5px;
    
    .profile-top {
      text-align: center;
      background-color: var(--bg-profile);
      padding: 40px 0 50px;
      border-radius: 5px 5px 0 0;

      .img-container {
        margin: 0 auto 34px;
        width: 205px;
        height: 205px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .profile-name {
        font-size: 27px;
        text-align: center;
        line-height: 1.2em;
        font-weight: bold;
      }

      .divider {
        margin: 25px auto;
        width: 50px;
        height: 3px;
        background-color: var(--primary);
      }

      .profile-role {
        text-align: center;
        font-size: 17px;
      }
    }

    .profile-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px;
      border-radius: 5px;
      gap: 18px;
      box-shadow: -11.31px 11.31px 17px 0px rgba(138, 131, 124, 0.23);

      a {
        width: 25px;
        height: 25px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .hero-description {
    padding-top: 20px;

    .title {
      font-size: 60px;
      font-weight: bold;
    }

    .subtitle {
      font-size: 25px;
      font-weight: 600;
      margin-top: 20px;
      line-height: 1.2;
    }

    .btn-container {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 55px 0;

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        width: 130px;
        height: 35px;
        text-align: center;
        transition: all 0.3s;
        border-radius: 20px;
        font-weight: 500;

        &.primary {
          color: #fff;
          background-color: var(--primary);
          border: 2px solid var(--primary);

          &:hover {
            background-color: #fff;
            color: var(--text-main);
          }
        }

        &.ghost {
          color: var(--text-main);
          background-color: #fff;
          border: 1px solid var(--text-main);

          &:hover {
            background-color: var(--primary);
            border: 1xp solid var(--primary);
            color: #fff;
          }
        }
      }
    }

    .description {
      font-size: 17px;
      line-height: 1.5;
    }
  }
}

/* 모바일: 배경 분할 해제 + 카드 풀폭 */
@media (max-width: 900px) {
  .hero-inner::before {
    width: 100%;
    background: var(--bg-section);
  }
  .hero-inner::after {
    display: none;
  }

  .hero-content {
    left: 50%;
    width: calc(100% - 40px);
    padding: 28px 20px;
    border-radius: 14px;
  }
}
</style>
