<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickBtn1" :style="styles1">
      同层实验测试按钮颜色+形状
    </button>
    <div style="margin-top: 20px">
      {{ styles1.color === "blue" ? "蓝色" : "红色" }}
      {{ styles1.borderRadius === "0" ? "矩形" : "圆形" }}
    </div>

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
    const styles1 = reactive({
      display: "none",
      color: "blue",
      borderRadius: "0",
    });

    const styles2 = reactive({
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

    const clickBtn1 = () => {
      window.collectEvent("clickBtnTimes");
    };

    const clickBtn2 = () => {
      window.collectEvent("clickBtnTimes");
    };

    return {
      styles1,
      styles2,
      clickBtn1,
      clickBtn2,
    };
  },
});
</script>
