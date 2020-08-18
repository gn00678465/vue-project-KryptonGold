<template>
  <validation-provider class="form-group" tag="div" rules="required|excluded:0"
  v-slot="{ errors, classes }">
    <label for="payment">{{ label }}</label>
    <select class="form-control" id="payment" :class="classes"
    @input="$emit('input', $event.target.value)">
      <option disabled selected value="0">請選擇{{ label }}</option>
      <option v-for="(option, index) in options"
      :key="index" :value="option">{{ option }}</option>
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
