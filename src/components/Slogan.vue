<template>
  <div class="container mt-5">
    <div class="row m-auto">
      <div class="col-sm-6 col-md-4 action_1"><div class="slogan icon_1"></div><p>專為女性打造30分鐘省時又有效</p></div>
      <div class="col-sm-6 col-md-4 action_2"><div class="slogan icon_2"></div><p>肌力訓練+有氧運動+伸展訓練運動三要素一次達成</p></div>
      <div class="col-sm-6 col-md-4 action_3"><div class="slogan icon_3"></div><p>全台百間分店免費跨店運動超方便</p></div>
      <div class="col-sm-6 col-md-4 action_4"><div class="slogan icon_4"></div><p>女性教練免費指導無負擔</p></div>
      <div class="col-sm-6 col-md-4 action_5"><div class="slogan icon_5"></div><p>器材安全易上手適合各年齡層女性</p></div>
      <div class="col-sm-6 col-md-4 action_6"><div class="slogan icon_6"></div><p>每月一對一量身面談掌握運動成效</p></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p{
  font-size: calc(10px + 1vw);
  font-weight: bold;
  text-align: center;
  visibility: hidden;
}
.slogan{
  width:  calc(100px + 8vw);
  height: calc(100px + 8vw);
  margin: auto;
}
.icon_1{
  background: url(../assets/images/icons/30分.png) no-repeat center/cover;
}
.icon_2{
  background: url(../assets/images/icons/3in1.png) no-repeat center/cover;
}
.icon_3{
  background: url(../assets/images/icons/定位.png) no-repeat center/cover;
}
.icon_4{
  background: url(../assets/images/icons/教練.png) no-repeat center/cover;
}
.icon_5{
  background: url(../assets/images/icons/運動.png) no-repeat center/cover;
}
.icon_6{
  background: url(../assets/images/icons/量身.png) no-repeat center/cover;
}
.action_1{
  &:hover{
    .icon_1{
      background: url(../assets/images/icons/30分_2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}
.action_2{
  &:hover{
    .icon_2{
      background: url(../assets/images/icons/3in1_2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}
.action_3{
  &:hover{
    .icon_3{
      background: url(../assets/images/icons/定位_2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}
.action_4{
  &:hover{
    .icon_4{
      background: url(../assets/images/icons/教練2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}
.action_5{
  &:hover{
    .icon_5{
      background: url(../assets/images/icons/運動_2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}
.action_6{
  &:hover{
    .icon_6{
      background: url(../assets/images/icons/量身_2.png) no-repeat center/cover;
      transform: translateY(-30px);
    }
    p{
      visibility: visible;
    }
  }
}

</style>
