<template>
  <div class="about">
    <h1>This is an about page - 测试不同层的按钮</h1>

    <button @click="clickBtn2" :style="styles2" style="margin-top: 20px">
      不同层实验测试按钮颜色+形状
    </button>
    <div style="margin-top: 20px">
      {{ styles2.color === "blue" ? "蓝色" : "红色" }}
      {{ styles2.borderRadius === "0" ? "矩形" : "圆形" }}
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const styles2 = reactive({
      display: "none",
      color: "blue",
      borderRadius: "0",
    });

    window.collectEvent("getVar", "color", "blue", function (value) {
      console.log("color :>> ", value);
      styles2.color = value;
    });

    window.collectEvent("getVar", "shape", "square", function (value) {
      console.log("shape :>> ", value);
      if (value === "circle") {
        styles2.borderRadius = "100%";
      }
      styles2.display = "";
    });

    const clickBtn2 = () => {
      window.collectEvent("clickBtnTimes");
    };

    return {
      styles2,
      clickBtn2,
    };
  },
});
</script>
