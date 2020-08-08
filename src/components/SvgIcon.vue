<template>
  <svg class="svg-icon">
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>

.svg-icon {
  fill: currentColor;
}
</style>
