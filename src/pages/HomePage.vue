<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-inner">
      <div class="hero-content">
        <aside class="hero-profile">
          <div class="profile-top">
            <div class="img-container">
              <img src="@/assets/images/profile_img.jpg" alt="본인 얼굴 사진" />
            </div>
  
            <h1 class="profile-name">Jihwan<br/> Shin</h1>
  
            <div class="divider"></div>
  
            <p class="profile-role">Frontend Developer</p>
          </div>
          <div class="profile-bottom">
            <a href="https://github.com/ykgod7" target="_blank">
              <img src="@/assets/images/github-icon.png" alt="" />
            </a>
            <a href="https://www.instagram.com/ykgod7" target="_blank" rel="noopener">
              <img src="@/assets/images/instagram-icon.png" alt="" />
            </a>
            <a href="https://velog.io/@ykgod7/posts" target="_blank" rel="noopener" aria-label="velog">
              <img src="@/assets/images/velog-icon.svg" alt="" />
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
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: #f9f7f7;
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

@media screen and (max-width: 1024px) {
  .hero-content {
    width: 90%;
    min-height: 530px;

    .hero-profile {
      .profile-top {
        height: calc(100% - 53px);
      }
    }

    .hero-description {
      .title {
        font-size: 58px;
        line-height: 1.3;
      }

      .subtitle {
        margin-top: 15px;
      }

      .btn-container {
        margin: 45px 0;
      }

      .description {
        br {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .hero-inner {
    &::before {
      width: 100%;
      height: 65%;  
      left: 0;
      bottom: 0;
      top: unset;
      right: unset;
    }

    &::after {
      width: 100%;
      height: 35%;
      left: 0;
      top: 0;
      bottom: unset;
      right: unset;
    }
  }

  .hero-content {
    padding: 50px 30px 70px;
    width: 100%;
    grid-template-columns: 1fr;
    background-color: transparent;
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    

    .hero-profile {
      height: unset;
      width: min(70%, 380px);
      margin: 0 auto;

      .profile-top {
        height: unset;
        padding: 50px 0 40px;

        .profile-name {
          font-size: 28px;
        }

        .divider {
          margin: 20px auto;
          width: 45px;
        }

        .img-container {
          width: 195px;
          height: 195px;
        }

        .profile-name {
          br {
            display: none;
          }
        }
      }

      .profile-bottom {
        background-color: #fff;
        border-radius: 0 0 5px 5px;
      }

    }
  }
}

@media screen and (max-width: 530px) {
  .hero-inner {
    &::after {
      height: 25%;
    }

    &::before {
      height: 75%;
    }
  }

  .hero-content {
    padding: 30px 25px 50px;

    .hero-profile {
      width: min(90%, 320px);

      .profile-top {
        padding: 40px 0 30px;

        .img-container {
          width: 180px;
          height: 180px;
        }
      }
    }

    .hero-description {
      .title {
        font-size: 40px;
      }

      .subtitle {
        font-size: 19px;
      }

      .btn-container {
        margin: 30px 0;

        .btn {
          width: 120px;
          height: 33px;
          font-size: 14px;
        }
      }

      .description {
        font-size: 16px;
      }
    }
  }
}
</style>
