$(function () {

    $('.slide').slick({
        dots: true,
        infinite: true,
        // autoplay:true, /*자동재생*/
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    //menu
    $(".menu li,nav").on({
        mouseenter:function(){
            $("nav").stop(true).animate({marginTop:"300px"},800,'linear')
        },
        mouseleave:function(){
            $("nav").stop(true).animate({marginTop:"-200px"},800,'linear')
        }
    });

    //section2
    let title = document.querySelector(".s1");
    let text = document.querySelector(".ss1");
    let simg1 = document.querySelector(".simg1")
    let simg2 = document.querySelector(".simg2")
    let simg3 = document.querySelector(".simg3")

    let a ="버츄오넥스트"
    let b ="버츄오 플러스 화이트"
    let c ="버츄오 팝 코코넛 화이트"
    let text1 = "회전 추출로 탄생한 풍성한 크레마와 깊은 바디감의 커피를 즐길 수 있는 버츄오 머신"
    let text2 = "자동 오픈 헤드로 완성하는 프리미엄한 버츄오 커피 모먼트"
    let text3 = "팩트해진 사이즈와 다양하고 개성있는 색상, 미니멀한 버츄오 머신"

    simg1.addEventListener('mouseover',function(){
        title.innerHTML=a
        text.innerHTML=text1
    });
    simg2.addEventListener('mouseover',function(){
        title.innerHTML=b
        text.innerHTML=text2
    });
    simg3.addEventListener('mouseover',function(){
        title.innerHTML=c
        text.innerHTML=text3
    });

    let title2 = document.querySelector(".c1");
    let text01 = document.querySelector(".cc1");
    let cimg1 = document.querySelector(".cimg1")
    let cimg2 = document.querySelector(".cimg2")
    let cimg3 = document.querySelector(".cimg3")

    let d ="이스피라치오네 제노바 리반토"
    let e ="아르페지오"
    let f ="부에노스 아이레스 룽고"
    let text001 = "균형 잡힌 꽃 향과 구운 시리얼 향과 달콤한 캐러멜 향을 느낄 수 있는 캡슐"
    let text002 = "짧은 시간 동안 다크 로스팅 해 완성한 예술 작품 같은 캡슐"
    let text003 = "원두를 라이트로스팅하여 고소한 곡물향과 스윗한 팝콘향을 느낄 수 있는 캡슐"

    cimg1.addEventListener('mouseover',function(){
        title2.innerHTML=d
        text01.innerHTML=text001
    });
    cimg2.addEventListener('mouseover',function(){
        title2.innerHTML=e
        text01.innerHTML=text002
    });
    cimg3.addEventListener('mouseover',function(){
        title2.innerHTML=f
        text01.innerHTML=text003
    });


    //section3 card
    // $(".card-front,.card-back").on({
    //     mouseenter:function(){
    //         $(".card-front").stop(true).animate({transform:perspective});
    //     }
    // });


    //topbtn
    $(".topbtn").click(function(){
        $(window).scrollTop(0);
    });











});
