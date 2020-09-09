<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col">
        <div class="sort">
          <div class="content">
            <button type="button" class="pure-button pure-button-outline-light" data-sort="所有品項"
              @click.prevent="goProducts($event)">查看所有啤酒</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="sort">
          <div class="content">
            <button type="button" class="pure-button pure-button-outline-light" data-sort="白啤酒"
              @click.prevent="goProducts($event)">查看所有白啤酒</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="sort">
          <div class="content">
            <button type="button" class="pure-button pure-button-outline-light" data-sort="水果酒"
              @click.prevent="goProducts($event)">查看所有水果酒</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SectionSort',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    goProducts(e) {
      const { sort } = e.currentTarget.dataset;
      this.$router.push({ name: 'products', params: { filter: sort } });
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 3px;
    background: rgba(black, 0.3);
  }
}
.content {
  position: relative;
  z-index: 2;
}

[class="col"] {
  &:nth-child(1) > .sort {
    background-image: url('https://images.unsplash.com/photo-1546388612-9e938bb6c057?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  }
  &:nth-child(2) > .sort {
    background-image: url('https://images.unsplash.com/photo-1596442149814-584dc6e92d01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
  }
  &:nth-child(3) > .sort {
    background-image: url('https://images.unsplash.com/photo-1595318644790-dc51bdc72248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80');
  }
}
</style>
