<template>
  <div class="footer">
    <div class="row picture ml-3">
      <div class="col-12 photo"></div>
    </div>
    <div class="row-sm-wrap row content px-5 pt-3">
      <div class="col-md-4 time">
        <h5>營業時間 :</h5>
        <p>Weekdays : 10:45-13:00 、15:30-21:00</p>
        <p>Saturday : 10:00-13:00</p>
        <p>Sunday : 公休</p>
        <div class="line my-3"></div>
        <h5>Get Social :</h5>
        <a href="https://www.curves.com.tw" target="_blank"><font-awesome-icon icon="fa-solid fa-globe" /></a>
        <!-- <a href="https://www.facebook.com/curves.shipai/?ref=page_internal"><font-awesome-icon icon="fa-brands fa-facebook" /></a> -->
      </div>
      <div class="col-md-4 contacts">
        <h5>Contacts :</h5>
        <p><font-awesome-icon class="icon-face" icon="fa-solid fa-location-dot" />&nbsp;&nbsp;112 臺北市北投區裕民六路120號5樓A</p>
        <p><font-awesome-icon class="icon-face" icon="fa-solid fa-phone" />&nbsp;&nbsp;(02)2820-0250</p>
        <p><font-awesome-icon class="icon-face" icon="fa-solid fa-envelope" />&nbsp;&nbsp;curves.ma0107@msa.hinet.net</p>
      </div>
      <div class="col-md-4 map">
        <img src="../assets/images/map.jpg">
      </div>
    </div>
    <div class="row remark mt-3">
      <p>@資料來源自Curves 官方網站與Curves 石牌店Facebook社群網站，如有侵權行為請來信告知，感謝!</p>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  .picture{
    width: 50%;
    display: flex;
    justify-content: center;
    z-index: 1;
      .photo{
        width: 100%;
        height: calc(100px + 23vw);
        background: url(~@/assets/images/教練.png) no-repeat center/cover;
      }
  }
  .content{
    background-color: rgb(69,74,77);
    z-index: 1;
    .time{
        color: white;
        .line{
          border-bottom: 1px solid white;
        }
        a{
          font-size: x-large;
          color: white;
          &:hover{
            color: rgb(40,174,147);
          }
        }
      }
    .contacts{
      color: white;
        p{
          padding-top: 20px;
        }
        .icon-face{
          font-size: x-large;
          color: rgb(40,174,147);
        }
    }
    .map{
        img{
          width: 90%;
        }
    }

  }
  .remark{
    width: 100%;
    background-color: rgb(50,56,59);
    z-index: 1;
      p{
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        margin: auto;
      }
  }
  .bottom{
    width: 100%;
    height: calc(90% - 10vw);
    background-color: rgb(69,74,77);
    position: absolute;
    bottom: 0;
  }
}
</style>
