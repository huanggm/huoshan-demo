<template>
  <div class="about">
    <h1>This is an about page - 测试支付页面</h1>

    <div>
      <button @click="randomMoney" style="margin-top: 20px">
        随机生成支付金额：{{ money }}
      </button>
    </div>

    <div>
      <button @click="payMoney" style="margin-top: 20px">立即支付</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const money = ref(100);

    const randomMoney = () => {
      money.value = (Math.random() * 10000).toFixed(2);
    };

    const payMoney = () => {
      window.collectEvent("payOrder", {
        amount: +money.value,
      });
    };

    return {
      money,
      randomMoney,
      payMoney,
    };
  },
});
</script>
