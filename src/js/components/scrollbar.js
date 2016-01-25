// (function() {
//   var prevOffset = document.querySelector('.card__full').offsetTop;
//   var didScroll = false;

//   window.onscroll = doThisStuffOnScroll;

//   function doThisStuffOnScroll() {
//       didScroll = true;
//   }

//   setInterval(function() {
//       if(didScroll) {
//         didScroll = false;

//         window.pageYOffset > prevOffset ? xxx : xxx;
//       }
//   }, 100);


// })();

class Searchbar {

  constructor(searchbar) {
    this.searchbar = searchbar;
  }

}

class MiniInfo extends Searchbar {

  variables() {
    this.a = window.pageYOffset;
    this.b = document.querySelector('.card__full').offsetTop;
    this.didScroll = false;
    window.onscroll = intervalScroll;
  }

  init() {
    addEventListener('scroll', this.intervalScroll);
  }

  intervalScroll() {
    this.didScroll = true;

    this.interval = setInterval(function() { 
      if ( this.didScroll ) {
        this.a > this.b ? this.addMini : this.removeMini;
      }
    }, 100);

  }

  addMini() {
    console.log('addMini');
  }

  removeMini() {
    console.log('removeMini');
  }
}

var SearchMiniInfo = new MiniInfo('.search-bar');
SearchMiniInfo.init();