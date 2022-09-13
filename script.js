function animationpage1(){
gsap.to("#box2",{

y:-70,
duration:3,
ease:Expo.eseIn,
dealy:1,
repeat:-1,
yoyo:true,
});
gsap.to("#box1",{
    y:70,
duration:3,
ease:Expo.eseIn,
repeat:-1,
yoyo:true,
});
gsap.to(".text1",{
    opacity:1,
    repeat:-1,
    duration:3,
    yoyo:true,
});
gsap.to(".textt",{
    opacity:1,
    repeat:-1,
    duration:3,
    yoyo:true,
});
gsap.to("#box3 img",{
duration:3,
dealy:2,
scale:1.3,
repeat:-1,
yoyo:true,
});
};



function animationpage2(){
    gsap.to("#page1 #box2",{

        y:-70,
        duration:3,
        ease:Expo.eseIn,
        dealy:1,
        repeat:-1,
        yoyo:true,
        });
        gsap.to("#page1 #box1",{
            y:70,
        duration:3,
        ease:Expo.eseIn,
        repeat:-1,
        yoyo:true,
        });
        gsap.to("#page1 .text1",{
            opacity:1,
            repeat:-1,
            duration:3,
            yoyo:true,
        });
        gsap.to("#page1 .textt",{
            opacity:1,
            repeat:-1,
            duration:3,
            yoyo:true,
        });
        gsap.to("#page1 #box3 img",{
        duration:3,
        dealy:2,
        scale:1.3,
        repeat:-1,
        yoyo:true,
        })
};

function pagechane(){

    setTimeout(function(){
        gsap.to("#page1",{
            opacity:1,
            // duration:2,
            esae:Expo.easeInOut,
        })
        document.querySelector(".he1").style.opacity="1";
        document.querySelector(".he2").style.opacity="0.4";


    },7000);

};

setTimeout(function(){
    repeat();
},4000)
animationpage1();
pagechane();
animationpage2();