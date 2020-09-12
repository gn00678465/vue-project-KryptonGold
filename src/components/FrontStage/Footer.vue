<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-xs-12">
          <p class="copyright">
            © 2020 MADAO All Rights Reserved.
            圖片為練習使用，無商業用途。
          </p>
        </div>
        <div class="col">
          <ul class="social__icons">
            <li>
              <a class="social__icon facebook" href="#">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </li>
            <li>
              <a class="social__icon twitter" href="#">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li>
              <a class="social__icon github" href="#">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li>
              <router-link class="social__icon cog" to="/admin">
                <font-awesome-icon :icon="['fas', 'cog']" />
              </router-link>
            </li>
          </ul>
        </div>
        <p class="alert">喝酒過量，有礙健康！喝酒勿開車！</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
};
</script>

<style lang="scss" scoped>

$social-colors: (
  facebook: #3b5998,
  twitter: #00aced,
  github: #2b3137,
  cog: v(primary),
);

@each $key, $val in $social-colors {
  .social__icons {
    .#{$key}:hover {
      background: $val;
      cursor: pointer;
    }
  }
};

.footer {
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  background-color:v(dark);
  padding:10px 0;
  font-size:15px;
  line-height:24px;
  color:v(light);
  z-index: 20;
  .copyright {
    word-break: keep-all;
  }
}

.social {
  &__icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  &__icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: v(secondary);
    color: v(light);
    font-size: 16px;
    display: inline-block;
    text-align: center;
    transition: all .2s linear;
    &:hover {
      color: #fff;
    }
  }
}

.alert {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  letter-spacing: 0.5rem;
  font-size: 2rem;
  line-height: 1.5;
  color: #fff;
}

@media (min-width: 768px) {
  .footer {
    padding:20px 0;
  }
  .social-icons {
    margin-top: 0;
  }
}

@media (min-width: 992px) {
  .copyright {
    text-align: left;
    line-height: 40px;
  }
  .social__icons {
    margin-top: 0;
    justify-content: flex-end;
  }
}
</style>
