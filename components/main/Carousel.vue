<template>
  <el-carousel class="slider"  height="450px">
    <el-carousel-item class="num">
      <img src="https://misanec.ru/wp-content/uploads/2018/10/2650299.jpg" alt="">
    </el-carousel-item >
    <el-carousel-item class="num">
      <img src="https://gorlozdorovo.ru/wp-content/uploads/2015/06/doktor-1024x676.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item class="num">
      <img src="https://clipart-db.ru/file_content/rastr/doctor-010.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
  .num{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    height: 100%;
  }

  .slider{
    width: 75%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 942px) {
    .slider{
      margin-top: 4rem;
    }
  }

  @media only screen and (max-width: 540px) {
    .slider{
      margin-top: 7rem;
    }
  }

  @media only screen and (max-width: 449px) {
    .slider{
      margin-top: 11rem;
    }
  }
</style>

