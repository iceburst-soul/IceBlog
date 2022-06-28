<template>
  <header class="header" style="height: 100vh">
    <!-- 中间抖音风博客名-->
    <div class="text-malfunction name" data-word="Iceburst's Blog">
      <div class="line"></div>
    </div>
    <!-- 下方的下滑箭头-->
      <div id="headerDown" class="headertop-down " @click="scrollDown">
        <i aria-hidden="true" class="fa fa-chevron-down faa-bounce faa-reverse animated"></i>
      </div>

  </header>

</template>

<script>

export default {
  name: "Header",
  props: {
    msg: String
  },
  methods:{
    scrollDown() {
      var photoH = document.querySelector('.header').offsetHeight
      window.scrollTo({top: photoH, behavior:"smooth"})
    }
  }


}
</script>

<style scoped>

.text-malfunction {
  position: absolute;
  top: 40%;
  left: 51.5%;
  transform: translate(-50%, -50%) scale(2.5);
  width: 240px;
  font-size: 34px;
  font-family: sans-serif;
  color: transparent;
}

.line {
  position: absolute;
  width: 240px;
  left: -1px;
  height: 1px;
  background: black;
  z-index: 50;
  animation: lineMove 5s ease-out infinite;
}

.text-malfunction:before, .text-malfunction:after {
  content: attr(data-word);
  position: absolute;
  top: 0;
  height: 45px;
  overflow: hidden;
  filter: contrast(200%);
}

.text-malfunction:before {
  left: 0;
  color: red;
  text-shadow: 1px 0 0 red;
  z-index: 30;
  animation: malfunctionAni 0.95s infinite;
}

.text-malfunction:after {
  left: -1px;
  color: cyan;
  text-shadow: -1px 0 0 cyan;
  z-index: 40;
  mix-blend-mode: lighten;
  animation: malfunctionAni 1.1s infinite 0.2s;
}

@keyframes lineMove {
  9% {
    top: 38px;
  }
  14% {
    top: 8px;
  }
  18% {
    top: 42px;
  }
  22% {
    top: 1px;
  }
  32% {
    top: 32px;
  }
  34% {
    top: 12px;
  }
  40% {
    top: 26px;
  }
  43% {
    top: 7px;
  }
  99% {
    top: 30px;
  }
}

@keyframes malfunctionAni {
  10% {
    top: -0.4px;
    left: -1.1px;
  }
  20% {
    top: 0.4px;
    left: -0.2px;
  }
  30% {
    left: .5px;
  }
  40% {
    top: -0.3px;
    left: -0.7px;
  }
  50% {
    left: 0.2px;
  }
  60% {
    top: 1.8px;
    left: -1.2px;
  }
  70% {
    top: -1px;
    left: 0.1px;
  }
  80% {
    top: -0.4px;
    left: -0.9px;
  }
  90% {
    left: 1.2px;
  }
  100% {
    left: -1.2px;
  }
}

.headertop-down {
  position: absolute;
  line-height: 120px;
  text-align: center;
  margin: auto;
  width: 90px;
  left: 0;
  right: 0;
  bottom: -10px;
  cursor: pointer;
  z-index: 5
}

.headertop-down i {
  font-size: 28px;
  color: #fff;
  -ms-transform: scale(1.5, 1);
  -webkit-transform: scale(1.5, 1);
  transform: scale(1.5, 1)
}
</style>