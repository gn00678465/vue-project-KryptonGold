<template>
  <validation-provider
      tag="div"
      :rules="Attr.rules"
      class="form-group"
      v-slot="{ errors, classes }"
    >
    <!-- input -->
    <label>{{ label }}：</label>
    <input class="form-control" v-if="typeCheck" :type="Attr.type" :placeholder="Attr.placeholder"
    :name="label" :value="value" @input="$emit('input', $event.target.value)" :class="classes" />
    <!-- textarea -->
    <textarea class="form-control" v-else :name="label" :rows="rows" :class="classes"
    style="height: auto" :placeholder="Attr.placeholder" :value="value"
    @input="$emit('input', $event.target.value)"></textarea>
    <!-- 錯誤訊息 -->
    <span class="error">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: true,
    },
    attrs: {
      type: Object,
      required: true,
    },
    rows: {
      type: Number,
      default: 3,
    },
    value: {},
  },
  data() {
    return {};
  },
  computed: {
    Attr() {
      return this.attrs[this.label];
    },
    typeCheck() {
      return !(this.Attr.type === 'textarea');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/input.scss';

</style>
