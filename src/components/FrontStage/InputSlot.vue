<template>
  <validation-provider class="form-group"
    tag="div" :rules="rules" v-slot="{ errors, classes }">
  <!-- 輸入框 -->
  <slot name="label"></slot>
  <slot name="input" :class="classes" class="test"></slot>
  <!-- 錯誤訊息 -->
  <span class="invalid-feedback">{{ errors[0] }}</span>
</validation-provider>
</template>

<script>

export default {
  name: 'InputSlot',
  props: {
    rules: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
