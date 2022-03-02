<template>
<div class="mask">
  <video autoplay muted allowfullscreen id="myVideo">
    <source src="../assets/images/shero.mp4" type="video/mp4">
  </video>
  <div class="content">
    <img src="../assets/images/遮罩1.1.png">
  </div>
</div>
</template>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  height:140%;
}
.content {
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 102%;
    img {
      width: 100%;
      height: 100%;
    }
}
</style>
