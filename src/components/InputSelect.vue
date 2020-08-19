<template>
  <validation-provider class="form-group" tag="div" rules="required"
    v-slot="{ errors, classes }">
    <label for="payment">{{ label }}</label>
    <select class="form-control" id="payment" :class="classes"
      @change="$emit('input', $event.target.value)">
      <option value="" disabled selected>請選擇付款方式</option>
      <option value="WebATM">WebATM</option>
      <!-- <option v-for="option in options"
      :key="option" :value="option">{{ option }}</option> -->
    </select>
    <small class="invalid-feedback">{{ errors[0] }}</small>
  </validation-provider>
</template>

<script>
export default {
  name: 'InputSelect',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
    },
    value: {},
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/input.scss';

</style>
