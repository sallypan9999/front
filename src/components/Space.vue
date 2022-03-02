<template>
<div class="mask">
  <img class="deck" src="../assets/images/遮罩02.png">
  <img class="gif_1" src="../assets/images/gif/ib-bold-1.gif">
  <img class="gif_2" src="../assets/images/gif/ib-bold-2.gif">
  <div class="content">
    <h1>活動空間</h1>
    <div class="read">
      <div class="sound"></div>
      <div class="alter"><a href="http://localhost:8080/#/exercisespace"><img src="../assets/images/readme.png"></a></div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.mask{
  width: 100vw;
  height: 100vh;
  background:url(~@/assets/images/環狀運動.jpg) no-repeat center/cover;
  background-attachment: fixed;
  position: relative;
    .deck{
      width: 100%;
      height: 100%;
    }
    .gif_1{
      width: calc(80px + 10vw);
      height: calc(100px + 12vw);
      position: absolute;
      left: 2%;
      bottom: 2%;
    }
    .gif_2{
      width: calc(35px + 5vw);
      height: calc(65px + 6vw);
      position: absolute;
      top: 20%;
      left: 3%;
    }
    .content{
      width: calc(200px + 8vw);
      height: calc(150px + 6vw);
      background: url(~@/assets/images/space_title.png) no-repeat center/cover;
      position: absolute;
      top: 35%;
      left: 12%;
      color: rgb(165, 216, 226);
        h1{
          font-size: calc(20px + 1vw);
          position: relative;
          top: 40%;
          left: 25%;
        }
        .read{
          width:  calc(150px + 6vw);
          height:  calc(50px + 2vw);
          position: absolute;
          bottom: 0;
          right: -15%;
            .sound{
              width:  calc(44px + 2vw);
              height:  calc(46px + 2vw);
              background: url(~@/assets/images/voice.png) no-repeat center/cover;
              position: absolute;
              top: 0;
              left: 0;
            }
            .alter{
              width:  calc(80px + 6vw);
              height:  calc(40px + 3vw);
              position: absolute;
              top: -30%;
              left: 40%;
              display: none;
                img{
                  width: 100%;
                  height: 100%;
                }
            }
        }
        .read:hover{
          .sound{
            width: calc(54px + 2vw);
            height: calc(57px + 2vw);
            cursor: pointer;
          }
          .alter{
            display: block;
          }
        }
    }
}
</style>
