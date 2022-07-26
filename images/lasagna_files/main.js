/*
MY21 GLE INTEREST
Adrian Velazquez
Creative Developer
2020
Email: adrian.velazquez@merkleyandpartners.com
For: Mercedes Benz
*/

/* Setup - size, preload assets
================================================= */
var machine = machine || {};
machine.main = function() {
  var width = 728,
      height = 90,
      images = [
        "bg_1.jpg",
      	"bg_2.jpg",
      	"bg_3.jpg",
      	"txt_3.png",
      	"txt_2.png",
      	"txt_1.png",
        "txt_3_1.png",
        "txt_2_2.png",
      	"txt_2_1.png",
        "txt_1_2.png",
      	"txt_1_1.png",
      	"logo.png",
        "cta_txt.png",
      	"cta_arrow.png"
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
    var txt_2_2 = machine.createElement({id:"txt_2_2", backgroundImage: "txt_2_2.png", retina: true, parent: banner});
    var txt_1_2 = machine.createElement({id:"txt_1_2", backgroundImage: "txt_1_2.png", retina: true, parent: banner});
    var txt_2_1 = machine.createElement({id:"txt_2_1", backgroundImage: "txt_2_1.png", retina: true, parent: banner});
    var txt_1_1 = machine.createElement({id:"txt_1_1", backgroundImage: "txt_1_1.png", retina: true, parent: banner});
    var txt_3 = machine.createElement({id:"txt_3", backgroundImage: "txt_3.png", retina: true, parent: banner});
    var txt_2 = machine.createElement({id:"txt_2", backgroundImage: "txt_2.png", retina: true, parent: banner});
    var txt_1 = machine.createElement({id:"txt_1", backgroundImage: "txt_1.png", retina: true, parent: banner});
    var logo = machine.createElement({id:"logo", backgroundImage: "logo.png", retina: true, parent: banner});
    var cta_txt = machine.createElement({id:"cta_txt", backgroundImage: "cta_txt.png",retina: true, parent: banner});
    var cta = machine.createElement({id:"cta", width: 11, height: 11, left: 332, top: 51, border: "1px solid #27aae1", borderRadius: "4px", parent: banner});
        var cta_arrow = machine.createElement({id:"cta_arrow", backgroundImage: "cta_arrow.png", left: 4.85, top: 2.5, retina: true, parent: cta});
    // create banner elements in here

    // hit, border, studio enabler exit element
    var hit = machine.createElement({id: "hit", width: width, height: height, border: "solid 1px #ccc", boxSizing: "border-box", parent: banner});

    /* Element Workers - vars, const, obj, arrays
	  =============================================================== */
    TweenMax.set([txt_1, txt_2, txt_3, txt_1_1, txt_2_1, txt_1_2, txt_2_2, txt_3_1, cta_txt, cta], {opacity: 0});
    TweenMax.set([txt_1, txt_2, txt_3, txt_1_1, txt_2_1, txt_1_2, txt_2_2, txt_3_1], {x: "+15"});

    // frame text assets
    var frame_1_txt = [txt_1, txt_1_1, txt_1_2];
    var frame_2_txt = [txt_2, txt_2_1, txt_2_2];

    // get bgs and banner individual widths
    var bg_1_height = bg_1.get("height");
    var bg_2_height = bg_2.get("height");
    var bg_3_height = bg_3.get("height");
    var banner_height = banner.get("height");

    /* Asset Adjustments - set elements for animation
	  =============================================================== */
    function stack_bgs(){
      // set the bg container height based on total bg heights
      TweenMax.set(bg_container, {height: bg_stacked_height, overflow: "hidden"});

      // stack bgs on top of each other using their stack height
      TweenMax.set(bg_1, {y: 0});// bg_1
      TweenMax.set(bg_2, {y: bg_1_height});// bg_2
      TweenMax.set(bg_3, {y: bg_2_height + bg_1_height});// bg_3
    };

    /* bg distance to travel calculations
	  =============================================================== */
    var move = {
      pan_dist_1: function(){
        var move_1 = -bg_1_height -  -banner_height;
        console.log("bg 1 moved:" + move_1 + " px");
        return move_1;
      },
      pan_dist_2: function(){
        var move_2 = -bg_1_height + -bg_2_height - -banner_height;
        console.log("bg 2 moved:" + move_2 + " px");
        return move_2;
      },
      pan_dist_3: function(){
        var move_3 = -bg_1_height + -bg_2_height + -bg_3_height - -banner_height;
        console.log("bg 3 moved:" + move_3 + " px");
        return move_3;
      }
    };

    /* Animations - individual timelines for aminations
	  =============================================================== */
    // pan bg container up into the viewbox, then up off of the viewbox
    var slide_in = function(dist){
      return new builderTimeLine()
        .to(bg_container, 2, {y: dist, ease: Power1.easeInOut});
    };

    var txt_slide_out = function(obj, dist){
      return new builderTimeLine()
        .to(obj, 2, {y: dist, ease: Power1.easeInOut});
    };

    var txt_in = function(obj){
      return new builderTimeLine()
        .to(obj, 0.5, {opacity: 1, x: 0, ease: Power2.easeInOut});
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
    main_tl = new builderTimeLine()
      // stack bgs
      .add(stack_bgs)

      // frame 1
      .add(txt_in(txt_1))
      .offset(1)
      .add(txt_in(txt_1_1))
      .offset(1)
      .add(txt_in(txt_1_2))
      .offset()
      .add(slide_in(move.pan_dist_1))
      .chain(0.75)
      .add(fade_out(frame_1_txt))
      .offset()

      // frame 2
      .add(slide_in(-140))
      .offset(1.25)
      .add(txt_in(txt_2))
      .offset(1)
      .add(txt_in(txt_2_1))
      .offset(1)
      .add(txt_in(txt_2_2))
      .offset()
      .add(slide_in(-185))
      .chain(0.5)
      .add(txt_slide_out(frame_2_txt, -height))
      .offset()

      // frame 3
      .add(slide_in(move.pan_dist_3))
      .offset(2)
      .add(txt_in(txt_3))
      .offset(1)
      .add(txt_in(txt_3_1))
      .chain(0)
      .add(fade_in([cta_txt, cta]))
      ; // main_tl

      scrubber(main_tl);

    /* User Interactions - clickthroughs, exits, events
	  =============================================================== */
    // cta animation on over
    hit.addEventListener("mouseenter", function(){
      return new builderTimeLine()
        .to(cta, 0.25, {backgroundColor: "#fff", ease: Power3.easeInOut})
        .offset(0.25)
        .to(cta_arrow, 0.15, {x: "+1", ease: Power3.easeOut});
    });

    // cta animation on out
    hit.addEventListener("mouseleave", function(){
      return new builderTimeLine()
        .to(cta, 0.25, {backgroundColor: "trasparent", ease: Power3.easeInOut})
        .offset(0.25)
        .to(cta_arrow, 0.15, {x: 0, ease: Power3.easeIn});
    });

    /* Helper functions - utilities for banner
  	=============================================================== */
    // get total, stacked bg height
    function bg_stacked_height(){
      return bg_1_height + bg_2_height + bg_3_height;
    };

    /* Debug - Banner testing and asset info
  	=============================================================== */
    function loaded(){
      // check to see if GSAP has loaded
      var a = window.TweenMax;

      if(a){
        console.log("GSAP status: loaded");
      };

    };

    function deBug(){
      // banner info
      var time = main_tl.duration(),
          time_scale = main_tl.timeScale(),
          time_delay = main_tl.delay(),
          banner_width = banner.get("width"),
          banner_height = banner.get("height"),

      // img asset dimensions
          hit_width = hit.clientWidth,
          hit_height = hit.clientHeight,

      // browser info
          userAgent = navigator.userAgent,
          opera = (userAgent.indexOf("Opera") != -1),
          ie = (userAgent.indexOf("MSIE") != -1),
          gecko = (userAgent.indexOf("Gecko") != -1),
          netscape = (userAgent.indexOf("Mozilla") != -1),
          version = navigator.appVersion;

      if(opera){
          console.log("User browser info: OPERA based browser - ") + version;
      }else if(ie){
          console.log("User browser info: IE based browser - " + version);
      }else if(gecko){
          console.log("User browser info: GECKO based browser - " + version);
      }else if(netscape){
          console.log("User browser info: NETSCAPE based browser - " + version);
      }else{
          console.log("User browser info: Unknown browser - " + version);
      };

      // log debugging info
      console.log("======================");
      console.log("BANNER INFO:");
      console.log("======================");
      console.log("Current location: " + window.location.origin);
      console.log("Banner animation length: " + time + " seconds");
      console.log("Banner time scale: " + time_scale);
      console.log("Banner time delay: " + time_delay);
      console.log("Banner dimensions: " + banner_width + "x" + banner_height);
      console.log("Banner resolution at double density: " + width * height * 4 + "px");
      console.log("Hit div dimensions: " + hit_width + "x" + hit_height);
      console.log("======================");

    }; // deBug()

    /* Scrubber
  	=============================================================== */
  	function scrubber(tl){
      var local_host = "http://localhost:8080",
          local_file = "file://",
          staging_server = "http://work.merkleyandpartners.com/";

  		if (window.location.origin == local_host || window.location.origin == local_file){
  			machine.include(["../machine_scrubber.min.js"], function(){
          // if in local dev, run the debugger
          deBug();
          // if in local dev, check lib status
          loaded();
  				if (machine.scrubberController)
            machine.scrubberController.create({"M+P timeline": tl});
  		  });
  		}else if (window.location.origin == staging_server) {
        machine.include(["../../js/machine_scrubber.min.js"], function(){
          // if in staging, run the debugger
          deBug();
          // if in local dev, check lib status
          loaded();
  				if (machine.scrubberController)
            machine.scrubberController.create({"M+P timeline": tl});
  		  });
      };

  	}; // scrubber()

  }); // preloadImages()
}; // main()
