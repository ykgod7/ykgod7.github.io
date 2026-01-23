<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-right">
        <div class="footer-block">
          <p class="footer-label">Call</p>
          <a class="footer-link" href="tel:+821012345678">+82 10-8424-7446</a>
        </div>

        <div class="footer-block">
          <p class="footer-label">Write</p>
          <a class="footer-link" href="mailto:jihwan@example.com">ejihwan7@gmail.com</a>
        </div>

        <!-- Follow -->
        <div class="footer-block">
          <p class="footer-label">Follow</p>
          <div class="footer-social" aria-label="Social links">
            <a class="icon-link" href="https://github.com/ykgod7" target="_blank" rel="noopener" aria-label="GitHub">
              <img src="@/assets/images/github-icon.png" alt="" />
            </a>
            <a class="icon-link" href="javascript:void(0)" target="_blank" rel="noopener" aria-label="Instagram">
              <img src="@/assets/images/instagram-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  width: 100%;

  .footer-inner {
    display: flex;
    justify-content: flex-end;
    padding: 40px 50px;

    .footer-right {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 72px;
      align-items: start;

      .footer-label {
        text-align: center;
        font-size: 14px;
        line-height: 1;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .footer-link {
        font-size: 14px;
        line-height: 1;
      }

      .footer-social {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        .icon-link {
          width: 20px;
          height: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .site-footer {
    .footer-inner {
      padding: 30px 25px;
      justify-content: flex-start;

      .footer-right {
        grid-template-columns: 1fr 1fr;
        gap: 30px;

        .footer-label {
          text-align: left;
          margin-bottom: 4px;
        }

        .footer-social {
          padding-top: 5px;
          justify-content: flex-start;

          .icon-link {
            width: 27px;
            height: 27px;
          }
        }
      }
    }
  }
}
</style>