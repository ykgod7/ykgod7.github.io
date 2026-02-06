<template>
  <section class="project-detail" aria-labelledby="detail-title">
    <div class="detail-inner">
      <div class="header-container">
        <header class="page-title">
          <h1 id="detail-title" class="title">{{ project.title }}</h1>
        </header>

        <div class="card header">
          <h3 class="overview-title">Overview</h3>
          <p class="overview-text">{{ project.overview }}</p>
          <h3 class="meta-title">Meta</h3>
          <dl class="meta-dl">
            <div 
              v-for="row in project.metaRows"
              :key="row.label"
              class="meta-row"
            >
              <dt class="meta-k">{{ row.label }}</dt>
              <dd class="meta-v">{{ row.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="card feature">
        <h2 class="card-title">Key Features</h2>
        <ul class="feature-container">
          <li
            v-for="feature in project.features"
            :key="feature.title"
            class="feature-item"
            >
            <span class="feature-title">{{ feature.title }}</span>
            <span class="feature-content">{{ feature.content }}</span>
          </li>
        </ul>
      </div>

      <div class="card normal mt60">
        <h2 class="card-title">Challenges & Solutions</h2>
        <div
          v-for="(data, idx) in project.CSData"
          :key="idx"
          class="cs-container"
        >
          <p class="text"><span class="bold">Challenge{{ idx + 1 }} : </span>{{ data.challenge }}</p>
          <p class="text"><span class="bold">Solution{{ idx + 1 }} : </span>{{ data.solution }}</p>
        </div>
      </div>

      <div class="img-container mt60">
        <div 
          v-for="(img, idx) in project.imgList"
          :key="idx"
          class="card"
        >
          <video 
            v-if="isVideo(img.src)" 
            :src="img.src" 
            controls 
            muted 
            playsinline 
            loop
          ></video>
          <img v-else :src="img.src" :alt="img.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { projects } from "../data/project";

const route = useRoute();

const project = projects.find(
  p => p.slug === route.params.slug
);

const isVideo = (src) => {
  if (!src) return false;
  return src.toLowerCase().endsWith('.mp4');
};
</script>

<style lang="scss" scoped>
.mt60 {
  margin-top: 60px;
}

.project-detail {
  background-color: var(--bg-section);
  padding: 40px 0 100px;

  .detail-inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 300px;

    .header-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      min-height: 300px;
      padding: 0 0 60px;

      .page-title {
        display: flex;
        align-items: center;
        justify-content: center;

        .title {
          position: relative;
          font-size: 64px;
          font-family: 'Poppins';
          font-weight: bold;

          &::before {
            z-index: 1;
            content: "Project";
            font-size: 24px;
            font-family: 'Poppins';
            position: absolute;
            top: -17px;
            left: 0;
          }

          &::after {
            content: "";
            background-color: var(--primary);
            width: 87px;
            height: 5px;
            position: absolute;
            top: 11px;
            left: 0;
          }
        }
      }

      .card {
        .overview-title {
          font-size: 24px;
          font-weight: bold;
          font-family: 'Poppins';
        }

        .overview-text {
          font-family: 'Pretendard';
          color: var(--text-body);
          margin-top: 10px;
          font-size: 18px;
          line-height: 1.5em;
          font-weight: 400;
        }

        .meta-title {
          margin-top: 30px;
          font-size: 24px;
          font-weight: bold;
          font-family: 'Poppins';
        }

        .meta-dl {
          .meta-row {
            display: grid;
            grid-template-columns: 90px 1fr;
            gap: 60px;
            padding: 10px 0;

            .meta-k {
              font-weight: bold;
              font-family: 'Poppins';
              font-size: 16px;
            }

            .meta-v {
              color: var(--text-body);
              font-weight: 300;
              font-size: 17px;
            }
          }
        }
      }
    }

    .img-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;

      .card {
        img, video {
          width: 100%;
          height: 350px;
          object-fit: contain;
        }
      }
    }
  }
}

.card {
  background-color: #fff;
  padding: 24px;
  box-shadow: -11.31px 11.31px 17px 0px rgba(138, 131, 124, 0.23);
  text-align: center;

  &.header {
    text-align: left;
  }

  &.feature {
    padding: 80px 60px;

    .feature-container {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 100px;

      .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .feature-title {
          font-family: 'Pretendard';
          font-size: 20px;
          font-weight: bold;
        }

        .feature-content {
          font-family: 'Pretendard';
          color: var(--text-body);
          margin-top: 12px;
          font-size: 16px;
          line-height: 1.8em;
        }
      }
    }
  }

  &.normal {
    padding: 80px 60px;
  }

  .cs-container {
    position: relative;
    margin-top: 70px;

    &::before {
      content: "";
      position: absolute;
      bottom: -35px;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 0.5px;
      background-color: var(--text-body);
    }

    &:last-of-type {
      &::before {
        content: none;
      }
    }

    &:first-of-type {
      margin-top: 50px;
    }

    .text {
      font-family: 'Pretendard';
      font-size: 17px;
      font-weight: 400;
      color: var(--text-body);
      max-width: 800px;
      margin: 15px auto 0;

      &:first-of-type {
        margin-top: 0;
      }

      .bold {
        font-family: 'Poppins';
        font-weight: bold;
      }
    }
  }

  .card-title {
    font-size: 36px;
    font-family: 'Poppins';
    font-weight: bold;
  }
}
</style>