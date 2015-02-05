$(function() {

	var _m = true;

	$(window).resize(function() {
		var h = $(window).outerHeight();
		$('#content .doc').each(function() {
			var dh = $(this).outerHeight(), ch = $(this).next('.code').outerHeight();
			if ( dh > ch ) { $(this).css({height: dh}); $(this).next('.code').css({height: ( dh + 1 )}); }
			else { $(this).css({height: ch}); $(this).next('.code').css({height: ( ch + 1 )}); }
		});
		$('.selector').css({width: $('#_code').css('width')});
	}).trigger('resize');

	$(window).scroll(function() {

		var s = $(window).scrollTop();
		$('#navigation').css({paddingTop: ( 15 + ( 50 - ( s > 50 ? 50 : s ) ))});

		if ( _m ) {
			var i;
			$('#navigation .active').removeClass('active');
			$('.dropdown-menu').css({display: 'none'});
	        $('#content .doc').each(function() {
	            var pos = $(this).position().top - $(window).scrollTop();
	            if (pos <= 100) { i = $(this); }
	        });
			if ( i != null ) {
				history.pushState(null, null, '#'+i.attr('id').replace('_code', ''));
				var o = $('#navigation a[href="#'+i.attr('id').replace('_code', '')+'"]');
				$('title').text(o.text()+' | Moltin');
				o.parent().addClass('active');
				o.siblings('.dropdown-menu').css({display: 'block'});
				o.parents('.dropdown-menu').css({display: 'block'});
				i = null;
			}
		}

	}).trigger('scroll');

	$(document).ready(function() { 

		$('pre code').each(function(i, e) { hljs.highlightBlock(e); });

		$('a[href*=http]').attr('target', '_blank');

		$('.toggle-navigation').on('click', function(e) {
			e.preventDefault();
			if ( $('#navigation').position().left < 0 ) { $('#navigation').stop().animate({left: 0, right: 250}, 350); }
			else { $('#navigation').stop().animate({left: -260, right: 10}, 350); }
		});

		$('a[href*=#]:not(a[href=#])').click(function(e) {
			_m = false;
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: ( target.offset().top - 43 )
					}, 0, function() { _m = true; $(window).trigger('scroll'); });
					return false;
				}
			}
		});

		$('.selector a').unbind('click').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('.selector li').removeClass('selected');
			$(this).parent().addClass('selected');
			var type = $(this).attr('href').replace('#', '');
			var n = $('.code.nine pre:not(.'+type+')'), t = $('.code.nine pre.'+type);
			n.hide(); n.prev('h4,h3').hide();
			t.show(); t.prev('h4,h3').show();
			$(window).trigger('resize');
		});

		$('.selector .selected a').click();

		// hide empty code blocks
		var codeblocks = $('#content .code');
		codeblocks.each(function() {
		    var $this = $(this);
		    if($.trim($(this).html()).length == 0) {
		    	$(this).addClass('no-padding');
		    }
		})
	});

	/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
	f[z]=function(){
	(a.s=a.s||[]).push(arguments)};var a=f[z]._={
	},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
	f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
	0:+new Date};a.P=function(u){
	a.p[u]=new Date-a.p[0]};function s(){
	a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
	hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
	return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
	b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
	b.contentWindow[g].open()}catch(w){
	c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
	var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
	b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
	loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
	olark.identify('7399-217-10-2467');/*]]>*/

	olark('api.box.show');

  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  	ga('create', 'UA-43794165-1', 'molt.in');
  	ga('send', 'pageview');

});