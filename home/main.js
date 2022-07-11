// Scroll Arrow Animation

tlDwn = gsap.timeline({duration: 0.1, yoyo: true, repeat: -1});

tlDwn.fromTo($('#dwn'), {y: 0}, {y: 7})

// Parallax Effect using Lax.js

window.onload = function () {
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    lax.addElements('#mainImg', {
        scrollY: {
          opacity: [
            ["elInY", "elCenterY", "elOutY"],
            [1, 1, 0],
          ]
        }
      })
    lax.addElements('#sched', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#msg', {
        scrollY: {
          opacity: [
            ["elInY", "elCenterY", "elOutY"],
            [1, 1, 0],
          ]
        }
      })
    lax.addElements('#schedImg', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#pay', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#payImg', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#types', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#typesImg', {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ]
      }
    })
    lax.addElements('#form', {
        scrollY: {
          opacity: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 1, 0],
          ]
        }
      })
      lax.addElements('#formDesc', {
        scrollY: {
          opacity: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 1, 0],
          ]
        }
      })
      lax.addElements('#formHead', {
        scrollY: {
          opacity: [
            ["elInY", "elCenterY", "elOutY"],
            [0, 1, 0],
          ]
        }
      })
}


// Change image on resize for better appearance on mobile

if($(window).width() <= 1000){
    $('#mainImg').attr('src', 'https://media.istockphoto.com/photos/beautiful-afro-woman-with-perfect-makeup-picture-id1287400198?b=1&k=20&m=1287400198&s=170667a&w=0&h=sRLKJQl8Hk1hp5ZS2XcpKcSnhF7w5h2rkLEEGGthilA=')
  }
window.addEventListener('resize', function(){
    if($(window).width() <= 1000){
        $('#mainImg').attr('src', 'https://media.istockphoto.com/photos/beautiful-afro-woman-with-perfect-makeup-picture-id1287400198?b=1&k=20&m=1287400198&s=170667a&w=0&h=sRLKJQl8Hk1hp5ZS2XcpKcSnhF7w5h2rkLEEGGthilA=')
        
        
      }
      else{
        $('#mainImg').attr('src', 'https://img1.wsimg.com/isteam/stock/o30GPlr/:/rs=h:500,cg:true,m')
      }
})
