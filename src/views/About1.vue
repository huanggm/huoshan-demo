<template>
  <div class="about">
    <h1>This is an about page - 测试同层实验</h1>
    <button @click="clickBtn1" :style="styles1">
      同层实验测试按钮颜色+形状
    </button>
    <div style="margin-top: 20px">
      {{ styles1.color === "blue" ? "蓝色" : "红色" }}
      {{ styles1.borderRadius === "0" ? "矩形" : "圆形" }}
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const styles1 = reactive({
      display: "none",
      color: "blue",
      borderRadius: "0",
    });

    window.collectEvent("getVar", "same_layer_color", "blue", function (value) {
      console.log("same_layer_color :>> ", value);
      styles1.color = value;
    });

    window.collectEvent(
      "getVar",
      "same_layer_shape",
      "square",
      function (value) {
        console.log("same_layer_shape :>> ", value);
        if (value === "circle") {
          styles1.borderRadius = "100%";
        }
        styles1.display = "";
      }
    );

    const clickBtn1 = () => {
      window.collectEvent("clickBtnTimes");
    };

    return {
      styles1,
      clickBtn1,
    };
  },
});
</script>
