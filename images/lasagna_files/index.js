/* eslint-disable no-useless-escape */
var JJBABY = JJBABY || {};

(function () {
	"use strict";

	var timeline;
	var wrapper, clickThrough, width = 300;
	var version = "primary", reportingTrigger = "NA", AMorPM, trigger;

	var _productName;
	var _bg;
	var _logo;
	var _product;
	var _productShadow;
	var _productY = 0;
	var _baby;
	var _retailer;

	var _f1_copy;
	var _f2_copy;
	var _end_frame_copy;

	var _f1_copy_style = "posX:0, posY:0";
	var _f2_copy_style = "posX:0, posY:0";
	var _end_frame_copy_style = "posX:0, posY:0";

	var _ctaCopy;
	var _cta_style;
	var _cta_style_CT = "fontColor:#06b1a5";
	var _cta_style_BL = "fontColor:#f33f66";
	var _cta_style_HTT = "fontColor:#64b2e9";
	var _cta_style_BT_Wash = "fontColor:#665092";
	var _cta_style_BT_Lotion = "fontColor:#8062b3";
	var _ctaX = 169, _ctaY = 211;
	var _clickTAG_url;

	var _isFF;
	var _inDEV;

	const YEK_IPA = "15942bab479e9324cbcffe2436f86e16";


	JJBABY.init = function () {
		// Initialize any variables here
		wrapper = document.getElementById('wrapper');
		clickThrough = document.getElementById('click_through');

		_isFF = JJBABY.detectFFbrowser();

		JJBABY.IDsToVars();
		JJBABY.buildDynamicContent();

	};

	JJBABY.finalSetup = function() {
		JJBABY.initClickTag();
		JJBABY.initAnimation();
		wrapper.classList.add('show');
		JJBABY.startAnimation();
	}

	JJBABY.initClickTag = function () {
		clickThrough.onclick = function () {
			//window.open(clickTag);
			Enabler.reportCustomVariableCount2(_productName + "_" + reportingTrigger + " Clicked");
			Enabler.exitOverride("Background Exit", _clickTAG_url);
		};
	};

	JJBABY.initAnimation = function () {

		timeline = new TimelineMax({
			delay: 0.2,
			onComplete: JJBABY.onAnimationComplete
		});

		timeline.pause();

		TweenMax.set([f1_copy, f2_copy, f3_copy], { alpha: 0, x: "-=" + 20 });
		TweenMax.set([product, productShadow], { x: -(width / 2), y: _productY });
		TweenMax.set(ctaBox, { alpha: 0, x: _ctaX, y: _ctaY });
		TweenMax.set(baby, { alpha: 0 })

		timeline.add([

			// f1
			TweenMax.to(baby, 1.2, { alpha: 1, ease: Cubic.easeInOut }),
			TweenMax.to(f1_copy, .8, { x: 0, alpha: 1, ease: Cubic.easeInOut, delay: .1 }),
			TweenMax.to([product, productShadow], .8, { x: 0, ease: Cubic.easeInOut, delay: .2 }),
			TweenMax.to(ctaBox, .8, { alpha: 1, ease: Cubic.easeInOut, delay: .3 }),

			// f2
			TweenMax.to(f1_copy, .8, { x: "+=" + 20, alpha: 0, ease: Cubic.easeInOut, delay: 2.5 }),
			TweenMax.to(f2_copy, .8, { x: 0, alpha: 1, ease: Cubic.easeInOut, delay: 2.5 }),

			// f3
			TweenMax.to(f2_copy, .8, { x: "+=" + 20, alpha: 0, ease: Cubic.easeInOut, delay: 5 }),
			TweenMax.to(f3_copy, .8, { x: 0, alpha: 1, ease: Cubic.easeInOut, delay: 5 }),


		]);

	};


	JJBABY.buildDynamicContent = function () {

    // Dynamic Content variables and sample values
		Enabler.setProfileId(10628148);
		var devDynamicContent = {};

		devDynamicContent.JJ_Baby_masterFeed = [{}];
		devDynamicContent.JJ_Baby_masterFeed[0]._id = 0;
		devDynamicContent.JJ_Baby_masterFeed[0].UID = 200001;
		devDynamicContent.JJ_Baby_masterFeed[0].ReportingLabel = "JBaby_Alwayson__BabyCenter Second Trimester \u2013 1 Year_N\/A_Cotton Touch Wash + Lotion_NA_NA_Image 1_Product_NA_NA_NA_160x600_AccuWeather_Weather&Geo_NA_NA_TARGET_NA_NA_NA_NA_NA_NA_NA_NA_NA_NA";
		devDynamicContent.JJ_Baby_masterFeed[0].startDate = {};
		devDynamicContent.JJ_Baby_masterFeed[0].startDate.RawValue = "1/3/2021 0:00:00";
		devDynamicContent.JJ_Baby_masterFeed[0].startDate.UtcValue = 1609632000000;
		devDynamicContent.JJ_Baby_masterFeed[0].endDate = {};
		devDynamicContent.JJ_Baby_masterFeed[0].endDate.RawValue = "1/3/2022 23:59:59";
		devDynamicContent.JJ_Baby_masterFeed[0].endDate.UtcValue = 1641254399000;
		devDynamicContent.JJ_Baby_masterFeed[0].isActive = true;
		devDynamicContent.JJ_Baby_masterFeed[0].isDefault = false;
		devDynamicContent.JJ_Baby_masterFeed[0].dimAudience = "BabyCenter Second Trimester \u2013 1 Year";
		devDynamicContent.JJ_Baby_masterFeed[0].dimContextual = "N\/A";
		devDynamicContent.JJ_Baby_masterFeed[0].dimTrigger = "NA";
		devDynamicContent.JJ_Baby_masterFeed[0].dimVersion = "Image 1";
		devDynamicContent.JJ_Baby_masterFeed[0].dimDimension = "160x600";
		devDynamicContent.JJ_Baby_masterFeed[0].devTrigger = "NA";
		devDynamicContent.JJ_Baby_masterFeed[0].geo_version = "NA";
		devDynamicContent.JJ_Baby_masterFeed[0].geo_target = "United States";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer = "TARGET";
		devDynamicContent.JJ_Baby_masterFeed[0].product_primary = "Cotton Touch Wash + Lotion";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200321065611296_CT_bg.jpg";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200321065621702_CT_logo.png";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200321065617492_CT_BodyLotion_Wash_product.png";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200324152859099_CT_BodyLotion_Wash_product_shadow.png";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200321065542329_CT_baby_1.png";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_primary.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_primary.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20200923102115028_target_logo_160x600.png";
		devDynamicContent.JJ_Baby_masterFeed[0].f1_copy_primary = "There\'s Nothing Micro About Supporting Your Baby\'s Microbiome";
		devDynamicContent.JJ_Baby_masterFeed[0].f2_copy_primary = "Ultralight Care Specially Designed for Newborns\' Sensitive Skin";
		devDynamicContent.JJ_Baby_masterFeed[0].first_and_last_copy = "Choose Gentle\u00AE<br>Choose Johnson\'s\u00AE";
		devDynamicContent.JJ_Baby_masterFeed[0].clickTag_URL_primary = {};
		devDynamicContent.JJ_Baby_masterFeed[0].clickTag_URL_primary.Url = "https://www.johnsonsbaby.com/";
		devDynamicContent.JJ_Baby_masterFeed[0].product_option_1 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_1 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_1.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_1.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].f1_copy_option_1 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].f2_copy_option_1 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].product_option_2 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_2 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_2.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_2.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].f1_copy_option_2 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].f2_copy_option_2 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].product_option_3 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].bg_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].logo_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].product_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].productShadow_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].baby_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_3 = {};
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_3.Type = "file";
		devDynamicContent.JJ_Baby_masterFeed[0].retailer_logo_img_option_3.Url = "https://s0.2mdn.net/ads/richmedia/studio/44660889/44660889_20180404142712739_transparentpixel.png";
		devDynamicContent.JJ_Baby_masterFeed[0].f1_copy_option_3 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].f2_copy_option_3 = "";
		devDynamicContent.JJ_Baby_masterFeed[0].end_frame_copy = "Choose Gentle\u00AE<br>Choose Johnson\'s\u00AE";
		devDynamicContent.JJ_Baby_masterFeed[0].ctaCopy = "SAVE NOW >";
		devDynamicContent.JJ_Baby_masterFeed[0].ctaCopy_style = "bgColor:#fefbf2, fontColor:#06b1a5";
		devDynamicContent.JJ_Baby_masterFeed[0].DEV = true;
		devDynamicContent.JJ_Baby_urlFeed = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
		devDynamicContent.JJ_Baby_urlFeed[0]._id = 0;
		devDynamicContent.JJ_Baby_urlFeed[0].unique_id = 1;
		devDynamicContent.JJ_Baby_urlFeed[0].reporting_label = "Cotton Touch Wash_Data Mining- Expectant Mothers_url_1";
		devDynamicContent.JJ_Baby_urlFeed[0].Product = "Cotton Touch Wash";
		devDynamicContent.JJ_Baby_urlFeed[0].Audience = ["Data Mining- Expectant Mothers"];
		devDynamicContent.JJ_Baby_urlFeed[0].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[0].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[0].URL_Rotation.Url = "https://attach.mikmak.tv/fb8a609f/4259ed11-d293-3865-cd6d-327fb9f54c2f?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=3p&adUnitCreative=cotton-touch-wash-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[0].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[0].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[0].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[1].unique_id = 10;
		devDynamicContent.JJ_Baby_urlFeed[1].reporting_label = "Cotton Touch Wash_Budget Conscious Consumer_url_2";
		devDynamicContent.JJ_Baby_urlFeed[1].Product = "Cotton Touch Wash";
		devDynamicContent.JJ_Baby_urlFeed[1].Audience = ["Budget Conscious Consumer"];
		devDynamicContent.JJ_Baby_urlFeed[1].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[1].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[1].URL_Rotation.Url = "https://attach.mikmak.tv/f750073a/0709f3bb-394e-3bca-5619-1c713d783d3c?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=3p&adUnitCreative=cotton-touch-wash-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[1].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[1].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[1].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[2].unique_id = 100;
		devDynamicContent.JJ_Baby_urlFeed[2].reporting_label = "Pink Lotion_BabyCenter Second Trimester \u2013 1 Year_url_2";
		devDynamicContent.JJ_Baby_urlFeed[2].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[2].Audience = ["BabyCenter Second Trimester \u2013 1 Year"];
		devDynamicContent.JJ_Baby_urlFeed[2].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[2].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[2].URL_Rotation.Url = "https://attach.mikmak.tv/42d0bb28/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=native&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[2].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[2].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[2].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[3].unique_id = 101;
		devDynamicContent.JJ_Baby_urlFeed[3].reporting_label = "Pink Lotion_Meredith: Expecting \/ New Parents with Children 0-1_url_1";
		devDynamicContent.JJ_Baby_urlFeed[3].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[3].Audience = ["Meredith: Expecting \/ New Parents with Children 0-1"];
		devDynamicContent.JJ_Baby_urlFeed[3].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[3].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[3].URL_Rotation.Url = "https://attach.mikmak.tv/2b669b8f/6206f2e6-5c89-09ae-4954-925e703d4dcc?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=native&adUnitCreative=pink-lotion-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[3].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[3].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[3].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[4].unique_id = 102;
		devDynamicContent.JJ_Baby_urlFeed[4].reporting_label = "Pink Lotion_Meredith: Expecting \/ New Parents with Children 0-1_url_2";
		devDynamicContent.JJ_Baby_urlFeed[4].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[4].Audience = ["Meredith: Expecting \/ New Parents with Children 0-1"];
		devDynamicContent.JJ_Baby_urlFeed[4].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[4].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[4].URL_Rotation.Url = "https://attach.mikmak.tv/42d0bb28/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=native&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[4].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[4].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[4].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[5].unique_id = 103;
		devDynamicContent.JJ_Baby_urlFeed[5].reporting_label = "Pink Lotion_Meredith: Hispanic Expecting \/ New Parents with Children 0-1_url_1";
		devDynamicContent.JJ_Baby_urlFeed[5].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[5].Audience = ["Meredith: Hispanic Expecting \/ New Parents with Children 0-1"];
		devDynamicContent.JJ_Baby_urlFeed[5].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[5].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[5].URL_Rotation.Url = "https://attach.mikmak.tv/2b669b8f/6206f2e6-5c89-09ae-4954-925e703d4dcc?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=native&adUnitCreative=pink-lotion-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[5].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[5].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[5].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[6].unique_id = 104;
		devDynamicContent.JJ_Baby_urlFeed[6].reporting_label = "Pink Lotion_Meredith: Hispanic Expecting \/ New Parents with Children 0-1_url_2";
		devDynamicContent.JJ_Baby_urlFeed[6].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[6].Audience = ["Meredith: Hispanic Expecting \/ New Parents with Children 0-1"];
		devDynamicContent.JJ_Baby_urlFeed[6].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[6].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[6].URL_Rotation.Url = "https://attach.mikmak.tv/42d0bb28/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=native&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[6].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[6].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[6].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[7].unique_id = 105;
		devDynamicContent.JJ_Baby_urlFeed[7].reporting_label = "Pink Lotion_Site and Search Direct PL & BED English_url_1";
		devDynamicContent.JJ_Baby_urlFeed[7].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[7].Audience = ["Site and Search Direct PL & BED English"];
		devDynamicContent.JJ_Baby_urlFeed[7].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[7].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[7].URL_Rotation.Url = "https://attach.mikmak.tv/6cfb87cb/6206f2e6-5c89-09ae-4954-925e703d4dcc?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[7].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[7].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[7].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[8].unique_id = 106;
		devDynamicContent.JJ_Baby_urlFeed[8].reporting_label = "Pink Lotion_Site and Search Direct PL & BED English_url_2";
		devDynamicContent.JJ_Baby_urlFeed[8].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[8].Audience = ["Site and Search Direct PL & BED English"];
		devDynamicContent.JJ_Baby_urlFeed[8].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[8].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[8].URL_Rotation.Url = "https://attach.mikmak.tv/5019598a/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[8].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[8].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[8].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[9].unique_id = 107;
		devDynamicContent.JJ_Baby_urlFeed[9].reporting_label = "Pink Lotion_Site and Search PL & BED LAL - English_url_1";
		devDynamicContent.JJ_Baby_urlFeed[9].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[9].Audience = ["Site and Search PL & BED LAL - English"];
		devDynamicContent.JJ_Baby_urlFeed[9].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[9].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[9].URL_Rotation.Url = "https://attach.mikmak.tv/6cfb87cb/6206f2e6-5c89-09ae-4954-925e703d4dcc?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[9].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[9].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[9].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[10].unique_id = 108;
		devDynamicContent.JJ_Baby_urlFeed[10].reporting_label = "Pink Lotion_Site and Search PL & BED LAL - English_url_2";
		devDynamicContent.JJ_Baby_urlFeed[10].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[10].Audience = ["Site and Search PL & BED LAL - English"];
		devDynamicContent.JJ_Baby_urlFeed[10].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[10].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[10].URL_Rotation.Url = "https://attach.mikmak.tv/5019598a/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[10].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[10].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[10].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[11].unique_id = 109;
		devDynamicContent.JJ_Baby_urlFeed[11].reporting_label = "Pink Lotion_Site and Search Direct PL & BED -Hispanic Consumer_url_1";
		devDynamicContent.JJ_Baby_urlFeed[11].Product = "Pink Lotion";
		devDynamicContent.JJ_Baby_urlFeed[11].Audience = ["Site and Search Direct PL & BED -Hispanic Consumer"];
		devDynamicContent.JJ_Baby_urlFeed[11].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[11].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[11].URL_Rotation.Url = "https://attach.mikmak.tv/6cfb87cb/6206f2e6-5c89-09ae-4954-925e703d4dcc?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[11].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[11].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[11].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[12].unique_id = 11;
		devDynamicContent.JJ_Baby_urlFeed[12].reporting_label = "Cotton Touch Wash_Hearst_url_1";
		devDynamicContent.JJ_Baby_urlFeed[12].Product = "Cotton Touch Wash + Lotion";
		devDynamicContent.JJ_Baby_urlFeed[12].Audience = ["Hearst"];
		devDynamicContent.JJ_Baby_urlFeed[12].version = "url_1";
		devDynamicContent.JJ_Baby_urlFeed[12].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[12].URL_Rotation.Url = "https://attach.mikmak.tv/fb8a609f/4259ed11-d293-3865-cd6d-327fb9f54c2f?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=3p&adUnitCreative=cotton-touch-wash-still&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[12].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[12].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[12].inRotation = true;
		devDynamicContent.JJ_Baby_urlFeed[13].unique_id = 110;
		devDynamicContent.JJ_Baby_urlFeed[13].reporting_label = "Pink Lotion_Site and Search Direct PL & BED -Hispanic Consumer_url_2";
		devDynamicContent.JJ_Baby_urlFeed[13].Product = "Cotton Touch Wash + Lotion";
		devDynamicContent.JJ_Baby_urlFeed[13].Audience = ["Site and Search Direct PL & BED -Hispanic Consumer"];
		devDynamicContent.JJ_Baby_urlFeed[13].version = "url_2";
		devDynamicContent.JJ_Baby_urlFeed[13].URL_Rotation = {};
		devDynamicContent.JJ_Baby_urlFeed[13].URL_Rotation.Url = "https://attach.mikmak.tv/5019598a/08e82d3f-895c-fbda-f7ee-b642b59e4e95?channelType=display&trafficType=paid&attachCampaignName=johnsons-baby-q2-brand-campaign&handle=johnsons-baby&platformType=dv360&adPlacementType=na&adUnitType=static-ad&paidAudienceType=1p&adUnitCreative=pink-lotion-video&campaignObjectiveType=conversion&siteId=%esid!";
		devDynamicContent.JJ_Baby_urlFeed[13].isActive = true;
		devDynamicContent.JJ_Baby_urlFeed[13].isDefault = false;
		devDynamicContent.JJ_Baby_urlFeed[13].inRotation = false;
		Enabler.setDevDynamicContent(devDynamicContent);

		// Set dev trigger;
		_inDEV = dynamicContent.JJ_Baby_masterFeed[0].DEV;		
		// Check Triggers
		trigger = dynamicContent.JJ_Baby_masterFeed[0].devTrigger;
		if (trigger.toLowerCase().includes("pm") || trigger.toLowerCase().includes("am")) AMorPM = true;
		// Determine if you need a to use one of the other options
		JJBABY.triggerCheck();

	}

	JJBABY.assignValues = function () {
		//  We have determined the version of creative
		//  To show, so let's add a custom variable impression.

		if (_inDEV) console.log(`Version Right After Trigger Check: ${version}`);

		_productName = dynamicContent.JJ_Baby_masterFeed[0]["product_" + version];
		_bg = dynamicContent.JJ_Baby_masterFeed[0]["bg_img_" + version].Url;
		_logo = dynamicContent.JJ_Baby_masterFeed[0]["logo_img_" + version].Url;
		_product = dynamicContent.JJ_Baby_masterFeed[0]["product_img_" + version].Url;
		_productShadow = dynamicContent.JJ_Baby_masterFeed[0]["productShadow_img_" + version].Url;
		_baby = dynamicContent.JJ_Baby_masterFeed[0]["baby_img_" + version].Url;
		_retailer = dynamicContent.JJ_Baby_masterFeed[0]["retailer_logo_img_"+version].Url;

		_f1_copy = dynamicContent.JJ_Baby_masterFeed[0]["f1_copy_" + version];
		_f2_copy = dynamicContent.JJ_Baby_masterFeed[0]["f2_copy_" + version];
		_end_frame_copy = dynamicContent.JJ_Baby_masterFeed[0].end_frame_copy;

		if (_end_frame_copy.includes("Choose Johnson")) {
			// Insert <br>
			_end_frame_copy = "Choose Gentle<sup class='sup'>&reg;</sup><br>Choose Johnson's<sup class='sup'>&reg;</sup>"
		}
		
		_ctaCopy = dynamicContent.JJ_Baby_masterFeed[0].ctaCopy;
		
		// If DFSI - use Feed Clickthrough
		if (trigger.toLowerCase().includes('dfsi')) {
			if (_inDEV) console.log('dfsi version');
			_clickTAG_url = dynamicContent.JJ_Baby_masterFeed[0].clickTag_URL_primary.Url
		} else {
			if (_inDEV) console.log('regular version');
			_clickTAG_url = JJBABY.selectFromUrlFeed(_productName);
		}

		var qa_exit = document.getElementById('QA_exit_url');
		qa_exit.innerText = _clickTAG_url;
		qa_exit.dataset.url = _clickTAG_url;

		/**
		 * Report on the Impression
		 */
		Enabler.reportCustomVariableCount1(_productName + "_" + reportingTrigger + " Impression");

		var _p = _productName.toLowerCase();
		var _cleanedProductName = _p.replace(/[^A-Z0-9]/ig, '')

		if (_p.search('cotton touch') > -1) {
			_cta_style = _cta_style_CT;
		} else if (_p.search('baby lotion') > -1 || _p.search('pink') > -1) {
			_cta_style = _cta_style_BL;
		} else if (_p.search('head to toe') > -1) {
			_cta_style = _cta_style_HTT;
		} else if (_p.search('bedtime wash') > -1) {
			_cta_style = _cta_style_BT_Wash;
		} else if (_p.search('bedtime') > -1) {
			_cta_style = _cta_style_BT_Lotion;
		} else {
			// Fall back to black if error
			_cta_style = "fontColor:#000000"
		}

		if (dynamicContent.JJ_Baby_masterFeed[0].retailer.length > 2  && dynamicContent.JJ_Baby_masterFeed[0].retailer != "N/A") {
			_ctaY = 198
		}

		if (_ctaCopy.toLowerCase().includes("compra")) {
			ctaCopy.style.fontSize = "11px";
			ctaCopy.style.padding = "10px 0px 4px";
		}

		JJBABY.checkCopyLength()

		if (_cleanedProductName.length>0) wrapper.classList.add(_cleanedProductName);

		JJBABY.insertImage(bg, _bg, true);
		JJBABY.insertImage(baby, _baby, true);
		JJBABY.insertImage(product, _product, true);
		JJBABY.insertImage(productShadow, _productShadow, true);
		JJBABY.insertImage(logo, _logo, true);
		JJBABY.insertImage(retailer, _retailer, true);

		
		JJBABY.insertCopy(f1_copy, _f1_copy, _f1_copy_style);
		JJBABY.insertCopy(f2_copy, _f2_copy, _f2_copy_style);
		JJBABY.insertCopy(f3_copy, _end_frame_copy, _end_frame_copy_style);

		JJBABY.insertCopy(ctaCopy, _ctaCopy, _cta_style);
		
		JJBABY.finalSetup()
	}

	JJBABY.insertCopy = function (_target, _copy, _style) {

		var _breakStr = _style.split(',');
		var _len = _breakStr.length;

		_target.innerHTML = _copy;

		var _styleValue;

		for (var i = 0; i < _len; i++) {
			var _a;

			if (_breakStr[i].search('posX:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				TweenMax.set(_target, { x: _styleValue });

			} else if (_breakStr[i].search('posY:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				TweenMax.set(_target, { y: _styleValue });

			} else if (_breakStr[i].search('fontSize:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.fontSize = _styleValue + "px";

			} else if (_breakStr[i].search('lineHeight:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.lineHeight = _styleValue + "px";

			} else if (_breakStr[i].search('width:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.width = _styleValue + 'px';

			} else if (_breakStr[i].search('height:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.height = _styleValue + 'px';

			} else if (_breakStr[i].search('fontColor:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.color = _styleValue;

			} else if (_breakStr[i].search('bgColor:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.backgroundColor = _styleValue;

			}

		}

		if (_target == ctaCopy && _isFF == true) {
			TweenMax.set(_target, { 'padding-top': "+=1" })
		}

	}

	JJBABY.insertImage = function (_target, _img, _isBackground) {
		if (_isBackground === true) {
			// _target.style.width = width + 'px';
			// _target.style.height = height + 'px';
			_target.style.backgroundSize = 'contain';
			_target.style.backgroundImage = "url('" + _img + "')";
		} else {
			_target.innerHTML = '<img src="' + _img + '" />';
		}

	}

	JJBABY.startAnimation = function () {
		// Code for animation		
		timeline.play();
	};

	JJBABY.onAnimationComplete = function () {
		// Log duration of timeline
		if (_inDEV) console.log('Animation Duration: ' + timeline.time() + 's');
	};

	JJBABY.IDsToVars = function () {
		var allElements = document.getElementsByTagName("*");

		for (var q = 0; q < allElements.length; q++) {
			var el = allElements[q];
			if (el.id) {
				window[el.id] = document.getElementById(el.id);
				el.style.position = "absolute";

			}
		}
	};

	JJBABY.detectFFbrowser = function () {
		var browser = navigator.userAgent.toLowerCase();
		if (browser.indexOf('firefox') > -1) return true;
	}

	JJBABY.checkCopyLength = function () {
		let copies = [[_f1_copy, f1_copy], [_f2_copy, f2_copy]];
		copies.forEach((copy) => {
			if (copy[0].length > 70 || (copy[0].split("<br>").length -1) > 1 || copy[0].includes("-")) {
				// Update styling to make it fit.
				copy[1].style.fontSize = "12px"
				copy[1].style.lineHeight = "14px"
				copy[1].style.width = "207px"
			}
		})
	}

	// Check if we have  a trigger than we need to activate.
	JJBABY.triggerCheck = function () {
		if (trigger.length > 0) {
			var _t = trigger.toLowerCase();
		}

		// Setup Switch Case
		switch (_t) {
			case "geo_fsi":
			case "geo_dfsi":
				JJBABY.geoFSI()
				break;
			case "weather":
				JJBABY.weatherCheck()
				break;
			case "am":
			case "pm":
			case "pm_weather":
			case "am_weather":
				JJBABY.checkTime(_t)
				break;
			default:
				// No active trigger to check.
				// Use Primary
				JJBABY.assignValues()
				break;
		}
	}

	JJBABY.geoFSI = function () {
		let promotionStart = new Date('05/10/2020'), promotionEnd = new Date('05/16/2020'), currentDate = new Date();
		reportingTrigger = "Geo";
		if (currentDate >= promotionStart && currentDate <= (promotionEnd.setDate(promotionEnd.getDate() + 1))) {
			// Since it's within the promotional  dates, override the primary with option 1 (DFSI) version
			version = "option_1";
			reportingTrigger = "DFSI"
		}
		JJBABY.assignValues()
	}

	JJBABY.checkTime = function (triggerValue) {
		// am 5:30 AM - 8:30 AM
		// pm 6 PM - 9 PM
		if ((morning() && /am/.test(triggerValue)) || (evening() && /pm/.test(triggerValue))) {
			reportingTrigger = triggerValue.slice(0, 2).toUpperCase();
			JJBABY.assignValues()
		} else if (/weather/.test(triggerValue)) {
			// check the weather version since it's
			// not am or pm and the trigger includes weather check
			JJBABY.weatherCheck()
		} else {
			//  We have a AM/PM check that failed.
			version = "option_1"
			if ( dynamicContent.JJ_Baby_masterFeed[0].product_option_2.length > 3 
				&& dynamicContent.JJ_Baby_masterFeed[0].product_option_1.length > 3) {
				//  Allows for a rotation of NA versions
				let options = ["option_1", "option_2"]
				version = options[Math.floor(Math.random()*options.length)]
			}
			JJBABY.assignValues()
		}
	}

	JJBABY.weatherCheck = function () {
		initOpenWeather(YEK_IPA, {
			inDevelopment: _inDEV
		})
		
		.then(data => {
			if (data["main"]["feels_like"] < 41.5) {
				if (AMorPM) version = "option_1"; //  since it's a  am/pm primary row and that didn't pass - we need option 1
				reportingTrigger = "COLDFRONT"
				if (_inDEV) console.log(`Version in Weather Check: ${version} and ${reportingTrigger}`);
			} else {
				JJBABY.determineOption();
			}
			JJBABY.assignValues();
		})
		.catch(error => {
			console.error(error)
			JJBABY.determineOption();
			JJBABY.assignValues();
		})
		
	}

	JJBABY.determineOption = function () {
		// Function only called from weatherCheck
		version = "option_1"
		if (AMorPM) {
			// Show NA copy and product version
			// Two choices - either option_2 or option_3
			// if option_3 has a value, then we need to randomly choose one of them.
			version = "option_2"
			if (dynamicContent.JJ_Baby_masterFeed[0].product_option_3.length > 3) {
				let options = ["option_2", "option_3"]
				version = options[Math.floor(Math.random()*options.length)]
			}
		}
	}

	JJBABY.selectFromUrlFeed = function(p) {

		var urls = dynamicContent.JJ_Baby_urlFeed;

		// Filter out only the URLs that match our Product
		var filteredUrls = urls.filter(function(url, index, arr) {
			return (url.Product == p && url.inRotation)
		})

		// Error Catch
		if (filteredUrls.length == 0) {
			console.log('Final product not available in list of URLs')
			return urls[0].URL_Rotation.Url
		}

		if (_inDEV) console.table(filteredUrls);
		
		// Select one of the final URLs at random
		var selectedUrl = rotatedUrls(filteredUrls)
		if (_inDEV) console.table(selectedUrl);
		return selectedUrl.URL_Rotation.Url
	}

})();

let morning = function () {
	let date = new Date(), hour = date.getHours(), minute = date.getMinutes();
	if ( ((hour == 5 && minute > 29) || hour > 6)
		&& ((hour == 8 && minute < 31) || hour < 8)) {
		return true;
	}
	return false;
}

let evening = function () {
	let date = new Date(), hour = date.getHours();
	if (hour >= 18 && hour < 21) return true;
	return false;
}

// Random function
let rotatedUrls = function(arr) {
	return arr[Math.floor(Math.random()*arr.length)]
}

