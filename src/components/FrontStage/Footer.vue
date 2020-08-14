<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="copyright">
            © 2020 MADAO All Rights Reserved.
            圖片為練習使用，無商業用途。
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li>
              <a class="github" href="#">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li>
              <router-link class="cog" to="/admin">
                <font-awesome-icon :icon="['fas', 'cog']" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>

$social-colors: (
  facebook: #3b5998,
  twitter: #00aced,
  github: #2b3137,
  cog: #007bb6,
);

@each $key, $val in $social-colors {
  .social-icons {
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
  background-color:#26272b;
  padding:10px 0;
  font-size:15px;
  line-height:24px;
  color:#737373;
  z-index: 20;
  .copyright {
    word-break: keep-all;
  }
}

.social-icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    text-align: center;
    transition: all .2s linear;
    &:hover {
      color: #fff;
    }
  }
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
  .social-icons {
    justify-content: flex-end;
  }
}
</style>
