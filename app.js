const img = document.querySelector('.home-mountains img')
const title = document.querySelector('.home-mountains h1')


gsap.to(img,{
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"home-mountains",
        scrub:true
    }
})

gsap.to(title,{
    y:500,
    duration:1,
    scrollTrigger:{
        trigger:"home-mountains",
        scrub:true
    }
})