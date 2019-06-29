<template>
  <div class="slider">
    <div class="carousel">
      <img class="slideImg" :src="path" alt="" />
      <button @click="leftHandler" class="left"> &#9668; </button>
      <button @click="rigthHandler" class="rigth"> &#9658; </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      path: 'slide_1.jpg',
      photos: ['slide_1.jpg', 'slide_2.jpg', 'slide_3.png'],
      number: 0,
      slideImg: null
    }
  },
  mounted() {
    this.slideImg = document.getElementsByClassName('slideImg')[0].style
  },
  methods: {
    leftHandler(){
      if(this.number === 0){
        this.path = this.photos[this.photos.length-1]
        this.number = this.photos.length - 1
      } else if(this.number === this.photos.length-1){
        this.number--
        this.path = this.photos[this.number]
      } else {
        this.number--
        this.path = this.photos[this.number]
      }
    },
    rigthHandler(){
      if(this.number === 0){
        this.number++
        this.path = this.photos[this.number]
      } else if(this.number === this.photos.length - 1){
        this.path = this.photos[0]
        this.number = 0
      } else {
        this.number++
        this.path = this.photos[this.number]
      }
    }
  }
}
</script>

<style scoped>
  .slider{
    width: 75%;
    margin: 0 auto -2rem;
  }

  .carousel{
    height: 100%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .slideImg{
    height: 500px;
    transition: all .5s;
  }

  button{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 39px;
    border-radius: 50px;
    border: none;
    background: rgba(170, 144, 144, 0.288);
    position: absolute;
    z-index: 10;
    top: 50%;
    color: #fff;
    transition: .5s;
  }

  button:hover{
    background: rgba(92, 73, 73, 0.288);
    cursor: pointer;
    transition: .5s;
  }

  .left{
    left: 10%;
  }

  .rigth{
    right: 10%;
  }

  @media only screen and (max-width: 860px) {
    .slider{
      width: 90%;
    }

    .slideImg{
      height: auto;
    }
  }

  @media only screen and (max-width: 790px) {
    .slider{
      width: 100%;
    }

    .carousel{
      padding-top: 2rem;
    }
  }
</style>

