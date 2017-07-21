$(function(){

	var bar2 = document.getElementsByClassName('bar2')[0];
	var bar3 = document.getElementsByClassName('bar3')[0];
	var bar4 = document.getElementsByClassName('bar4')[0];
	var cross = document.getElementsByClassName('cross')[0];
	var profile = document.getElementsByClassName('footer')[0];
	var profileSect = document.getElementsByClassName('profile')[0];
	var navInfo = document.getElementsByClassName('nav-container')[0];
	var homeNav = document.getElementsByClassName('home-nav')[0];
	var activeNavv = false;
	var activeNav = false;

	TweenMax.set([homeNav, profileSect], {autoAlpha:0});
	TweenMax.set(bar2, {rotation:90, y:-2});
	
	navInfo.addEventListener('click', function(){
		if(activeNav == false) {

			activeNav = true;
			activeNavv = false;

			TweenMax.to(cross, .25, {rotation:45, ease:Power2.easeOut});
			TweenMax.to(homeNav,.5, {autoAlpha:1, ease:Power2.easeOut});
			TweenMax.to(profileSect,.5, {autoAlpha:0, ease:Power2.easeOut});

			var timeline2 = new TimelineMax();
			timeline2.add([
				TweenMax.to(bar3,.3,{rotation:0, ease:Power1.easeOut, onComplete: function(){
					TweenMax.to(bar4,.25,{y:6, ease:Power2.easeOut})
					TweenMax.to(bar3,.25,{y:0, ease:Power2.easeOut})
				}})
				
			]);

		} else if(activeNav == true) {
			
			activeNav = false;

			TweenMax.to(cross, .25, {rotation:0, ease:Power2.easeOut});
			TweenMax.to(homeNav,.5, {autoAlpha:0, ease:Power2.easeOut});
		}
 
	});

	
	TweenMax.set(bar4, {y:6});
	
	profile.addEventListener('click', function(){
		if(activeNavv == false) {
			activeNavv = true;
			activeNav = false;
			TweenMax.to(profileSect,.5, {autoAlpha:1, ease:Power2.easeOut});
			TweenMax.to(cross, .25, {rotation:0, ease:Power2.easeOut});
			TweenMax.to(homeNav,.5, {autoAlpha:0, ease:Power2.easeOut});
			var timeline1 = new TimelineMax();
			timeline1.add([
				TweenMax.to(bar4,.25,{y:1, ease:Power2.easeOut}),
				TweenMax.to(bar3,.25,{y:3, ease:Power2.easeOut, onComplete: function(){
					TweenMax.to(bar3,.3,{rotation:90, ease:Power1.easeOut})
				}}),
				
			]);
		} else if(activeNavv == true) {
			activeNavv = false;
			TweenMax.to(profileSect,.5, {autoAlpha:0, ease:Power2.easeOut});
			var timeline2 = new TimelineMax();
			timeline2.add([
				TweenMax.to(bar3,.3,{rotation:0, ease:Power1.easeOut, onComplete: function(){
					TweenMax.to(bar4,.25,{y:6, ease:Power2.easeOut})
					TweenMax.to(bar3,.25,{y:0, ease:Power2.easeOut})
				}})
				
			]);
		}
	});



});