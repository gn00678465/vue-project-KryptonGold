<template>
  <div>
    <h4 class="h4 brush">輸入訂購人資料</h4>
    <div class="row">
      <div class="col">
        <InputSlot rules="required|is_not:0">
          <template #label>
              <label for="payment">付款方式<small class="required">*</small></label>
          </template>
          <template #input>
            <select class="form-control custom-select" id="payment" v-model="form.payment">
              <option selected disabled value="0">請選擇付款方式</option>
              <option v-for="(pay, i) in payments" :key="i" :value="pay">{{ pay }}</option>
            </select>
          </template>
        </InputSlot>
        <validation-provider class="form-group"
            tag="div" rules="required" v-slot="{ errors, classes }">
          <label for="name">姓名<small class="required">*</small></label>
          <input type="text" :class="classes" name="付款人姓名" class="form-control"
          id="name" placeholder="付款人姓名" v-model="form.name">
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="form-group"
            tag="div" rules="required|email" v-slot="{ errors, classes }">
          <label for="email">信箱<small class="required">*</small></label>
          <input type="email" :class="classes" name="付款人信箱" class="form-control" id="email"
          placeholder="HexSchool@example.com" inputmode="email" v-model="form.email">
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="form-group"
            tag="div" rules="required|integer|min:8" v-slot="{ errors, classes }">
          <label for="tel">電話<small class="required">*</small></label>
          <input type="tel" :class="classes" name="付款人電話" class="form-control"
          id="tel" placeholder="付款人電話" v-model="form.tel">
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="form-group"
            tag="div" rules="required" v-slot="{ errors, classes }">
          <label for="address">地址<small class="required">*</small></label>
          <input type="text" :class="classes" name="付款人地址" class="form-control"
          id="address" placeholder="付款人地址" v-model="form.address">
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="form-group"
            tag="div" rules="" v-slot="{ errors, classes }">
          <label for="message">留言</label>
          <textarea class="form-control" :class="classes" id="message" rows="3"
            v-model="form.message" placeholder="輸入你的留言"></textarea>
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
      </div>
    </div>
  </div>
</template>

<script>
import InputSlot from 'components/FrontStage/InputSlot.vue';

export default {
  name: 'Detail',
  components: { InputSlot },
  data() {
    return {
      payments: ['WebATM', 'ATM', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
      form: {
        name: null,
        email: null,
        tel: null,
        address: null,
        payment: 0,
        message: null,
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';

.h4 {
  font-weight: bold;
  display: inline-block;
}

small.required {
  color: red;
  margin-left: 2px;
  font-weight: 900;
}
</style>
