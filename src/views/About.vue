<template>
<div id="app2" :style="dynamicColor" @dblclick="toggleHoverEffect">
    <div id="card">
      <navbar></navbar><br>
      <h1>ABOUT </h1>
       <div class="card2">
        <p>Imagine spending all your life savings on a home for your family, one night you hear pounding on the doors, people demanding you evacuate the house immediately.
            <br>
        You purchased your property but don’t have the legal papers to back up your claim. For dozens of possible reasons; you either bought your house from someone who didn’t have them or faked them, you lost these papers, the agencies didn’t have the proper information or maybe you couldn’t afford the process.
        <br>
        Blockchain comes with some properties that can solve these kinds of problems, my goal for creating of this project is to save and keep the estates of people.

        <br><br>
        You can find me on social medias:<br>
        Twitter:<a href="https://twitter.com/FaezaKazeme?t=4sA7_nP2fUeJNjzykp2SUw&s=09"> Faeza Kazemi</a><br>
        LinkdIn:<a href=""> Faeza Kazemi</a>
        </p>
      </div> 
    </div>
</div>
</template>

<script>
import navbar from "../component/navbar.vue";
export default {
  components:{
    navbar
  },
    data(){
        return{
            clientX: 0,
            clientY: 0,
            windowWidth: 0,
            windowHeight: 0,
            colorLightness: 35,
            colorAlpha: 1,
            hoverActive: true 
                }
            },

    computed: {
    colorHue() {
      const hue = 360 / this.windowWidth * this.clientX;
      return parseInt(hue, 10);
    },
    colorSaturation() {
      const saturation = 100 / this.windowHeight * this.clientY;
      return parseInt(saturation, 10);
    },
    dynamicColor() {
      return {
        backgroundColor: `hsla(${this.colorHue},
          ${this.colorSaturation}%,
          ${this.colorLightness}%,
          ${this.colorAlpha})` };

    } },
methods: {
    toggleHoverEffect() {
      this.hoverActive = !this.hoverActive;
    },
    updateMouseLocation(e) {
      let { clientX, clientY } = e;

      if (this.hoverActive) {
        this.clientX = clientX;
        this.clientY = clientY;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    } },
    created() {
    window.addEventListener("resize", this.handleResize);
    document.
    getElementsByTagName("body")[0].
    addEventListener("mousemove", this.updateMouseLocation);
    this.handleResize();
  },

}
</script>

<style>
html,
body,
#app2 {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}
#card{
    position: absolute;
    top:1px;
    width: 100%;
  background-color: white;
}
.card2{
  width: 100%;
  height: 50%;
  background-color: rgb(71, 70, 70);
  color: white;
  font-size: 17px;
  padding: 3% 5%;
  margin: 0% auto;
}
</style>