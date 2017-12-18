// var loading = document.querySelector(".loading");
// var loadingProcess = loading.getElementsByTagName("p")[0];
// var swiperWrapper = document.querySelector(".swiper-wrapper");
// var swiperSlide = document.querySelectorAll(".swiper-slide");
// var picArr = [
//     "images/1/arrow.png","images/1/bling.png","images/1/bottomBlank.png","images/1/bottomFlower.png","images/1/fontLeftBottom.png","images/1/fontRightTop.png",
//     "images/1/hot.png","images/1/in.png","images/1/lightSpot.png","images/1/logoName.png","images/1/out.png","images/1/topLight.png","images/1/topStar.png",
//     "images/2/pic.png","images/3/flower.png","images/3/icon.png","images/3/bg.png","images/3/nailer.png","images/3/pic1.png","images/3/pic2.png","images/4/a.png","images/4/b.png",
//     "images/4/c.png","images/4/d.png","images/4/pic.png","images/5/circle.png","images/5/pic1.png","images/5/icon.png","images/6/icon.png","images/6/pic1.png",
//     "images/6/pic5.png","images/8/pic1.png","images/8/pic2.png","images/8/pic3.png","images/9/pic1.png","images/9/pic2.png","images/9/icon.png",
//     "images/9/two2.png","images/bg.png","images/btnbg.png","images/commonIcon1.png","images/commonIcon2.png","images/flower1.png",
//     "images/flower2.png","images/lightSpot.png","images/topFlower.png","images/topFlower2.png",
// ]
// var img =  new Image();
// var sum = picArr.length;
// var now = 0;

// loadImg();
// function loadImg(){
// 	img.src = picArr[now]; 
// 	function go () {
// 		now ++ ;
//     loadingProcess.innerHTML = parseInt( now/sum *100 ) + "%";
//     console.log(loadingProcess.innerHTML)    
// 		if(now < picArr.length){
// 			loadImg();
// 		}else{
// 			console.log("全部加载完成");
// 			loading.style.display = "none";
// 			swiperWrapper.style.opacity = "1";
// 			action();
// 		}
// 	}
// 	img.onerror = go;
// 	img.onload = go;
// }

// $(function () {
//   $("button").click(function () {
//     $(this).css("backgroundColor", "#bfa26a")
//   })

//   var wid = window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;

//   if (wid > 750) {
//     $("html").width("375px");
//     $("html").height("590px");
//   }
// })
function action() {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onSlideChangeEnd: function (swiper) {
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
    onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      setTimeout(function () {
        swiperAnimate(swiper); //初始化完成开始动画
      }, 200);
    }
  });
}
