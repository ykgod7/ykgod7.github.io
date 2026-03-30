<template>
  <section class="project" aria-labelledby="project-title">
    <div class="project-inner">
      <header class="page-title">
        <h1 id="project-title" class="title">Projects</h1>
        <p class="text">
          Beyond simple coding, I build efficient and scalable web services with a focus on user experience. Here are my projects built from scratch using Vue.js and PHP, covering everything from planning to deployment.
        </p>
      </header>
      
      <section class="project-section">
        <div class="card-list">
          <router-link 
            v-for="project in projectList"
            :key="project.slug"
            :to="`/projects/${project.slug}`" 
            class="project-card-link"
          >
            <article class="project-card">
              <div class="card-left">
                <span class="accent-bar" aria-hidden="true"></span>
                <div class="card-left-inner">
                  <header class="card-head">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-role">{{ project.role }}</p>
                  </header>
  
                  <div class="project-body">
                    <p>{{ project.summary }}</p>
                  </div>
                </div>
              </div>
  
              <div class="card-right">
                <div class="thumb">
                  <img :src="project.thumbnail" alt="" />
                </div>
              </div>
            </article>
          </router-link>

        </div>
      </section>
  </div>    
  </section>
</template>

<script setup>
import { projects } from "../data/project";

const projectList = projects.map(p => ({
  slug: p.slug,
  title: p.title,
  role: p.role,
  summary: p.summary,
  thumbnail: p.thumbnail,
}));
</script>

<style lang="scss" scoped>
.project {
  background-color: var(--bg-section);

  .project-inner {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 100px 0 150px;

    .page-title {
      .title {
        font-family: 'Poppins';
        font-size: 35px;
        font-weight: bold;
        text-align: center;
      }

      .text {
        margin-top: 40px;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.5em;
      }
    }

    .project-section {
      margin-top: 60px;

      .project-card-link {
        display: block;

        &:hover {
          .project-card {
            transform: translateY(-4px);
            box-shadow: -14px 14px 26px 0px rgba(138, 131, 124, 0.32);
          }
        }
      }

      .card-list {
        max-width: 750px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 70px;

        .project-card {
          display: grid;
          grid-template-columns: 6fr 4fr;
          background-color: #fff;
          box-shadow: -11.31px 11.31px 17px 0px rgba(138, 131, 124, 0.23);
          min-height: 350px;
          transition: 0.4s ease;

          .card-left {
            position: relative;

            .accent-bar {
              position: absolute;
              left: 0;
              top: 60px;
              width: 6px;
              height: 55px;
              background: var(--primary);
            }

            .card-left-inner {
              padding: 60px 30px 70px 40px;

              .card-head {
                .project-title {
                  color: var(--primary);
                  font-size: 20px;
                  font-family: 'Poppins';
                  font-weight: bold;
                }

                .project-role {
                  margin-top: 2px;
                  font-size: 14px;
                  font-weight: 600;
                }
              }

              .project-body {
                font-family: 'Pretendard';
                margin-top: 40px;
                font-size: 17px;
                line-height: 1.5em;
                font-weight: 400;
              }
            }
          }

          .card-right {
            .thumb {
              height: 100%;

              img {
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .project {
    .project-inner {
      padding: 60px 24px 100px;
    }
  }
}

@media screen and (max-width: 530px) {
  .project {
    .project-inner {
      padding: 50px 20px 80px;

      .project-section {
        .card-list {
          gap: 40px;

          .project-card {
            grid-template-columns: 1fr;
            min-height: unset;

            .card-left {
              .accent-bar {
                top: 40px;
              }

              .card-left-inner {
                padding: 40px 24px 40px 32px;

                .project-body {
                  margin-top: 20px;
                  font-size: 15px;
                }
              }
            }

            .card-right {
              .thumb {
                height: 200px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>