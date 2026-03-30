<template>
  <section class="resume" aria-labelledby="resume-title">
    <div class="resume-inner">

      <!-- Page Title -->
      <header class="page-title">
        <h1 id="resume-title" class="title-text">Resume</h1>
      </header>

      <!-- Experience -->
      <section class="resume-section" aria-labelledby="exp-title">
        <header class="section-head">
          <h2 id="exp-title" class="section-title">Experience</h2>
        </header>

        <!-- Experience Cards -->
        <div class="card-list">
          <!-- Card 1 -->
          <article class="resume-card">
            <div class="card-left">
              <p class="period">2035 - Present</p>
              <p class="role">JOB POSITION</p>
              <p class="org">Company Name</p>
              <p class="loc">Company Location</p>
            </div>

            <div class="card-right">
              <p>
                I’m a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
              <p>
                I’m a great place for you to tell a story and let your users know
                a little more about you.
              </p>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="resume-card">
            <div class="card-left">
              <p class="period">2035 - 2035</p>
              <p class="role">JOB POSITION</p>
              <p class="org">Company Name</p>
              <p class="loc">Company Location</p>
            </div>

            <div class="card-right">
              <p>
                I’m a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
              <p>
                I’m a great place for you to tell a story and let your users know
                a little more about you.
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- Education -->
      <section class="resume-section" aria-labelledby="edu-title">
        <header class="section-head">
          <h2 id="edu-title" class="section-title">Education</h2>
        </header>

        <div class="card-list">
          <article class="resume-card">
            <div class="card-left">
              <p class="period">2035 - 2035</p>
              <p class="role">UNIVERSITY NAME</p>
              <p class="org">Degree Level</p>
              <p class="loc">University Location</p>
            </div>

            <div class="card-right">
              <p>
                I’m a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
              <p>
                I’m a great place for you to tell a story and let your users know
                a little more about you.
              </p>
            </div>
          </article>

          <article class="resume-card">
            <div class="card-left">
              <p class="period">2035 - 2035</p>
              <p class="role">UNIVERSITY NAME</p>
              <p class="org">Degree Level</p>
              <p class="loc">University Location</p>
            </div>

            <div class="card-right">
              <p>
                I’m a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
              <p>
                I’m a great place for you to tell a story and let your users know
                a little more about you.
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- Skills -->
      <section class="resume-section" aria-labelledby="skill-title">
        <header class="section-head">
          <h2 id="skill-title" class="section-title">Skills</h2>
        </header>

        <div class="card-list">
          <article class="resume-card">
            <ul class="skill-list">
              <li class="skill-item">
                <span class="skill-icon">
                  <img src="@/assets/icons/vue-icon.svg" alt="" />
                </span>
                <span class="skill-name">Vue.js</span>
              </li>

              <li class="skill-item">
                <span class="skill-icon">
                  <img src="@/assets/icons/react-icon.svg" alt="" />
                </span>
                <span class="skill-name">React.js</span>
              </li>

              <li class="skill-item">
                <span class="skill-icon">
                  <img src="@/assets/icons/js-icon.svg" alt="" />
                </span>
                <span class="skill-name">Javascript</span>
              </li>

              <li class="skill-item">
                <span class="skill-icon">
                  <img src="@/assets/icons/html-icon.svg" alt="" />
                </span>
                <span class="skill-name">HTML</span>
              </li>

              <li class="skill-item">
                <span class="skill-icon">
                  <img src="@/assets/icons/css-icon.svg" alt="" />
                </span>
                <span class="skill-name">CSS</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.resume {
  background-color: var(--bg-section);

  .resume-inner {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 100px 0;

    .page-title {      
      .title-text {
        font-family: 'Poppins';
        font-size: 35px;
        font-weight: bold;
        text-align: center;
      }
    }

    .resume-section {
      margin-top: 100px; 
      
      .section-head {
        .section-title {
          font-family: 'Poppins';
          font-size: 25px;
        }
      }
      
      .card-list {
        margin-top: 30px;     
        
        .resume-card {
          margin-top: 30px;
          background-color: #fff;
          box-shadow: -11.31px 11.31px 17px 0px rgba(138, 131, 124, 0.23);
          padding: 60px 45px;   
          display: flex;
          gap: 50px;

          &:first-of-type {
            margin-top: 0;
          }

          .card-left {
            width: 40%;
            font-size: 17px;

            .period {
              font-size: 20px;
              line-height: 1.5em;
              color: var(--primary);
              font-weight: bold;
              font-family: 'Poppins';
            }

            .role {
              margin-top: 6px;
              font-weight: 300;
            }

            .org {
              font-weight: 300;
              margin-top: 8px;
              font-size: 14px;
            }

            .loc {
              font-weight: 300;
              margin-top: 20px;
              font-size: 14px;
            }
          }

          .card-right {
            width: 60%;

            p {
              font-size: 17px;
              font-weight: 300;
              line-height: 1.5em;
            }
          }

          .skill-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 35px 70px;

            .skill-item {
              display: flex;
              align-items: center;
              gap: 14px;

              .skill-icon {
                width: 25px;
                height: 25px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .skill-name {
                font-size: 18px;
                font-weight: 300;
              }
            }
          }
        }
      }
    }


  }
}

@media screen and (max-width: 768px) {
  .resume {
    .resume-inner {
      padding: 60px 24px 80px;
    }
  }
}

@media screen and (max-width: 530px) {
  .resume {
    .resume-inner {
      padding: 50px 20px 60px;

      .resume-section {
        margin-top: 60px;

        .card-list {
          .resume-card {
            flex-direction: column;
            gap: 24px;
            padding: 36px 24px;

            .card-left {
              width: 100%;
            }

            .card-right {
              width: 100%;

              p {
                font-size: 15px;
              }
            }

            .skill-list {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 24px 40px;
            }
          }
        }
      }
    }
  }
}
</style>