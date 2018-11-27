# Things to add:

- https://www.youtube.com/watch?time_continue=2&v=H6SsB3JYqQg

<iframe width="560" height="315" src="https://www.youtube.com/embed/H6SsB3JYqQg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- https://www.volcanodiscovery.com/active-volcanoes-map/get-widget.html

<!-- Simple no enlarging -->
<!-- begin VolcanoWidget -->
<iframe id="VW_iframe" width="280px" height="NaN" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" src="https://earthquakes.volcanodiscovery.com"></iframe>
<!-- end VolcanoWidget / http://www.volcano-news.com/active-volcanoes-map/get-widget.html -->




<!-- With enlarging -->
<!-- begin VolcanoWidget -->
<div id="VW_bigMap" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;">
<div id="VW_backDiv" style="background:#000;filter:alpha(opacity=80);opacity:.8;height:100%;width:100%;position:absolute;top:0px;left:0px;z-index:-1;" onclick="switchFrame('VW_smallMap','VW_bigMap','enlarge','small map','100%','NaNpx',0,-180);return false;"></div></div>
<div id="VW_smallMap" style="clear:left"><div id="VW_mCont" style="width:100%;height:NaNpx;position:relative;margin:0;background:#fff;"><a name="VW_mCont"></a><div style="position:absolute;top:8px;right:28px;height:15px;text-align:right;vertical-align:middle;font:12px Verdana,sans-serif;font-weight:bold">[<a href="#" style="color:#bb202a" onclick="switchFrame('VW_smallMap','VW_bigMap','enlarge','small map','100%','NaNpx',0,-180);return false;"><span id="VW_mSwitch">enlarge</span></a>]</div><iframe id="VW_iframe" width="100%" height="100%" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" src="https://earthquakes.volcanodiscovery.com"></iframe></div></div>
<script type="text/javascript">function switchFrame(a,b,c,d,e,f,g,h){var i=document.getElementById("VW_mCont");var j=document.getElementById("VW_mSwitch").firstChild;if(j.nodeValue==c){j.nodeValue=d}else{j.nodeValue=c}var k=i.parentNode.getAttribute("id");if(k==a){var l=b}else{var l=a}var m=i.parentNode;var n=document.getElementById(l);n.appendChild(i);m.style.display="none";n.style.display="";if(l==a){i.style.width=e;i.style.height=f;i.style.margin=0;i.style.top=""}else{i.style.width="80%";i.style.height="80%";i.style.margin="auto";i.style.top="20px"}window.location.hash="VW_mCont"}</script>
<!-- end VolcanoWidget / http://www.volcano-news.com/active-volcanoes-map/get-widget.html -->

- Live weather

- Live underwater

- Live a things
- - some ski place
https://cortina.panomax.com/dolomiti

<script type="text/javascript" src="https://static.panomax.com/front/thumbnail/js/pmaxthumbnail.js"></script>
<script type="text/javascript">
PmaxThumbnail.place({
 instance: 1002
});
</script>

<iframe src="https://cortina.panomax.com/dolomiti" style="width: 100%; height: 650px; border: none;" allowfullscreen></iframe>