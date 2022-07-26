/*
MY21 GLC Refresh
Adrian Velazquez
Creative Developer
2021
Email: adrian.velazquez@merkleyandpartners.com
For: Mercedes Benz
*/

/* Setup - size, preload assets
================================================= */
var machine = machine || {};
machine.main = function() {
  var width = 300,
      height = 250,
      images = [
        "bg_1.jpg",
      	"bg_2.jpg",
      	"bg_3.jpg",
      	"txt_3.png",
      	"txt_2.png",
      	"txt_1.png",
        "txt_3_1.png",
      	"txt_2_1.png",
        "txt_1_1.png",
      	"logo.png",
        "cta_txt.png",
      	"cta_arrow.png",
      ];

  /* Create Elements
	=============================================================== */
  machine.preloadImages(images, function() {

    // banner container element
    var banner = machine.createElement({id: "banner", width: width, height: height, backgroundColor: "#000", overflow: "hidden", cursor: "pointer", boxSizing: "border-box", parent: document.body});

    // create banner elements in here
    var bg_container = machine.createElement({id:"bg_container", width: width, height: "100%", parent: banner});
        var bg_1 = machine.createElement({id:"bg_1", backgroundImage: "bg_1.jpg", retina: true, parent: bg_container});
        var bg_2 = machine.createElement({id:"bg_2", backgroundImage: "bg_2.jpg", retina: true, parent: bg_container});
        var bg_3 = machine.createElement({id:"bg_3", backgroundImage: "bg_3.jpg", retina: true, parent: bg_container});
    var txt_3_1 = machine.createElement({id:"txt_3_1", backgroundImage: "txt_3_1.png", retina: true, parent: banner});
    var txt_2_1 = machine.createElement({id:"txt_2_1", backgroundImage: "txt_2_1.png", retina: true, parent: banner});
    var txt_1_1 = machine.createElement({id:"txt_1_1", backgroundImage: "txt_1_1.png", retina: true, parent: banner});
    var txt_3 = machine.createElement({id:"txt_3", backgroundImage: "txt_3.png", retina: true, parent: banner});
    var txt_2 = machine.createElement({id:"txt_2", backgroundImage: "txt_2.png", retina: true, parent: banner});
    var txt_1 = machine.createElement({id:"txt_1", backgroundImage: "txt_1.png", retina: true, parent: banner});
    var logo = machine.createElement({id:"logo", backgroundImage: "logo.png", retina: true, parent: banner});
    var cta_txt = machine.createElement({id:"cta_txt", backgroundImage: "cta_txt.png", left: 11, top: 207, retina: true, parent: banner});
    var cta = machine.createElement({id:"cta", width: 11, height: 11, left: 90, top: 217, border: "1.25px solid #27aae1", borderRadius: "4px", parent: banner})
        var cta_arrow = machine.createElement({id:"cta_arrow", backgroundImage: "cta_arrow.png", left: 4.25, top: 3, retina: true, parent: cta});
    // create banner elements in here

    // hit, border, studio enabler exit element
    var hit = machine.createElement({id: "hit", width: width, height: height, border: "solid 1px #ccc", boxSizing: "border-box", parent: banner});

    /* Element Workers - vars, const, obj, arrays
	  =============================================================== */
    TweenMax.set([txt_1, txt_2, txt_3, txt_1_1, txt_2_1, txt_3_1, cta_txt, cta], {opacity: 0});
    TweenMax.set([txt_1, txt_2, txt_3, txt_1_1, txt_2_1, txt_3_1], {x: "+15"});

    // frame text assets
    var frame_1_txt = [txt_1, txt_1_1];
    var frame_2_txt = [txt_2, txt_2_1];
    var cta_scale = [cta_txt, cta];

    // get bgs and banner individual widths
    var bg_1_width = bg_1.get("width");
    var bg_2_width = bg_2.get("width");
    var bg_3_width = bg_3.get("width");
    var banner_width = banner.get("width");

    /* Asset Adjustments - set elements for animation
	  =============================================================== */
    function stack_bgs(){
      // set the bg container height based on total bg heights
      TweenMax.set(bg_container, {width: bg_stacked_width, overflow: "hidden"});

      // stack bgs on top of each other using their stack height
      TweenMax.set(bg_1, {x: 0});// bg_1
      TweenMax.set(bg_2, {x: bg_1_width});// bg_2
      TweenMax.set(bg_3, {x: bg_2_width + bg_1_width});// bg_3
    };

    /* bg distance to travel calculations
	  =============================================================== */
    var move = {
      // pan_dist_1: function(){
      //   var move_1 = -bg_1_width -  -banner_width;
      //   console.log("bg 1 moved:" + move_1 + " px");
      //   return move_1;
      // },
      pan_dist_2: function(){
        var move_2 = -bg_1_width + -bg_2_width - -banner_width;
        console.log("bg 2 moved:" + move_2 + " px");
        return move_2;
      },
      pan_dist_3: function(){
        var move_3 = -bg_1_width + -bg_2_width + -bg_3_width - -banner_width;
        console.log("bg 3 moved:" + move_3 + " px");
        return move_3;
      }
    };

    /* Animations - individual timelines for aminations
	  =============================================================== */
    // pan bg container up into the viewbox, then up off of the viewbox
    var slide_in = function(dist){
      return new builderTimeLine()
        .to(bg_container, 2.25, {x: dist, ease: Power1.easeInOut});
    };

    var txt_slide_out = function(obj, dist){
      return new builderTimeLine()
        .to(obj, 2.25, {x: dist, ease: Power1.easeInOut});
    };

    var txt_in = function(obj){
      return new builderTimeLine()
        .to(obj, 0.75, {opacity: 1, x: 0, ease: Power2.easeInOut});
    };

    var fade_in = function(obj){
      return new builderTimeLine()
        .to(obj, 0.5, {opacity: 1, ease: Power2.easeInOut});
    };

    var fade_out = function(obj){
      return new builderTimeLine()
        .to(obj, 0.15, {opacity: 0, ease: Power1.easeInOut});
    };

    /* Main timeline - chain of animations
	  =============================================================== */
    main_tl = new builderTimeLine({})
      // stack bgs
      .add(stack_bgs)

      // frame 1
      .add(txt_in(txt_1))
      .offset(0.5)
      .add(txt_in(txt_1_1))
      .chain(1)
      .add(fade_out(frame_1_txt))
      .offset()

      // frame 2
      .add(slide_in(move.pan_dist_2))
      .offset(2)
      .add(txt_in(txt_2))
      .offset(0.5)
      .add(txt_in(txt_2_1))
      .chain(1)
      .add(txt_slide_out(frame_2_txt, move.pan_dist_2))
      .offset()

      // frame 3
      .add(slide_in(move.pan_dist_3))
      .offset(2)
      .add(txt_in(txt_3))
      .offset(0.5)
      .add(txt_in(txt_3_1))
      .chain()
      .add(fade_in([cta_txt, cta]))

      ; // main_tl

      scrubber(main_tl);

    /* User Interactions - clickthroughs, exits, events
	  =============================================================== */
    // cta animation on over
    hit.addEventListener("mouseenter", function(){
      return new builderTimeLine()
        .to(cta, 0.25, {backgroundColor: "#fff", ease: Power3.easeInOut})
        .offset()
        .to(cta_txt, 0.25, {scale: 1.05, transformOrigin: "center center", ease: Power3.easeInOut});
    });
    // cta animation on out
    hit.addEventListener("mouseleave", function(){
      return new builderTimeLine()
        .to(cta, 0.25, {backgroundColor: "trasparent", ease: Power3.easeInOut})
        .offset()
        .to(cta_txt, 0.25, {scale: 1, transformOrigin: "center center", ease: Power3.easeInOut});
    });

    /* Helper functions - utilities for banner
  	=============================================================== */
    // get total, stacked bg width
    function bg_stacked_width(){
      return bg_1_width + bg_2_width + bg_3_width;
    };

    /* Scrubber + Debugger
  	=============================================================== */
  	function scrubber(tl){

      // set up possible user locations
      var local_host = "http://localhost:8080",
          local_file = "file://",
          staging_server = "http://work.merkleyandpartners.com/";

      // check to see if GSAP has loaded
      function loaded(){
        var a = window.TweenMax;
        var b = window.machine;
        if(a && b){
          console.log("======================");
          console.log("LIBRARY INFO:");
          console.log("GSAP status: loaded");
          console.log("Machine status: loaded");
        };
      };

      // check users browser and run the scrubber and debugger
  		if (window.location.origin == local_host || window.location.origin == local_file){
  			machine.include(["../machine_scrubber.min.js"], function(){
          loaded(); // if in local dev, check lib status
  				if (machine.scrubberController)
            machine.scrubberController.create({"M+P timeline": tl});
  		  });
        machine.include(["../deBug.js"], function(){
          deBug(); // if in local dev, run the debugger
  		  });
  		} else if (window.location.origin == staging_server) {
        machine.include(["../../js/machine_scrubber.min.js"], function(){
          loaded(); // if in local dev, check lib status
  				if (machine.scrubberController)
            machine.scrubberController.create({"M+P timeline": tl});
  		  });
        machine.include(["../../js/deBug.js"], function(){
          deBug(); // if in staging, run the debugger
  		  });
      }; // conditional

  	}; // scrubber()

  }); // preloadImages()
}; // main()
