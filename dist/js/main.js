var app = new Vue({
  el: "#app",
  data: {
    currentSlide: 0,
    isPreviousSlide: false,
    isFirstLoad: true,
    slides: [
      {
        headlineFirstLine: "Mishima dojo",
        headlineSecondLine: "",
        sublineFirstLine: "Honmaru",
        sublineSecondLine: "Japan",
        bgImg: "https://i.imgur.com/iTroATK.png",
        rectImg: ""
      },
      {
        headlineFirstLine: "Dragon's nest",
        headlineSecondLine: "",
        sublineFirstLine: "Gāo yún",
        sublineSecondLine: "china",
        bgImg: "https://i.imgur.com/oYUcupH.png"
        // rectImg: "https://i.imgur.com/d7kwLTv.png"
      },
      {
        headlineFirstLine: "Howard",
        headlineSecondLine: "Estate",
        sublineFirstLine: "Howard Estate",
        sublineSecondLine: "Japan",
        bgImg:
          "https://i.jeuxactus.com/datas/jeux/t/e/tekken-7/xl/tekken-7-596e0c54f0d24.jpg"
        // rectImg:
        //   "https://i.jeuxactus.com/datas/jeux/t/e/tekken-7/xl/tekken-7-596e0c44073ba.jpg"
      }
    ]
  },
  mounted: function() {
    var productRotatorSlide = document.getElementById("app");
    var startX = 0;
    var endX = 0;

    productRotatorSlide.addEventListener(
      "touchstart",
      event => (startX = event.touches[0].pageX)
    );

    productRotatorSlide.addEventListener(
      "touchmove",
      event => (endX = event.touches[0].pageX)
    );

    productRotatorSlide.addEventListener(
      "touchend",
      function(event) {
        var threshold = startX - endX;

        if (threshold < 150 && 0 < this.currentSlide) {
          this.currentSlide--;
        }
        if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
          this.currentSlide++;
        }
      }.bind(this)
    );
  },
  methods: {
    updateSlide(index) {
      index < this.currentSlide
        ? (this.isPreviousSlide = true)
        : (this.isPreviousSlide = false);
      this.currentSlide = index;
      this.isFirstLoad = false;
    }
  }
});
