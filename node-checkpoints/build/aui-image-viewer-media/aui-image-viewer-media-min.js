YUI.add("aui-image-viewer-media",function(e,t){var n=e.Lang,r=e.Do,i={height:360,width:640,wmode:"embed"},s="https?://(?:www\\.)?{domain}",o="(?:[\\?&]|^){param}=([^&#]*)",u=e.Component.create({NAME:"mediaViewerPlugin",NS:"media",ATTRS:{providers:{validator:n.isObject,value:{flash:{container:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{media}" /><embed src="{media}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',matcher:/\b.swf\b/i,options:i,mediaRegex:/([^?&#]+)/},youtube:{container:'<iframe width="{width}" height="{height}" src="http://www.youtube.com/embed/{media}" frameborder="0" allowfullscreen></iframe>',matcher:new RegExp(n.sub(s,{domain:"youtube.com"}),"i"),options:i,mediaRegex:/[\?&]v=([^&#]*)/i},vimeo:{container:'<iframe src="http://player.vimeo.com/video/{media}?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="{width}" height="{height}" frameborder="0"></iframe>',matcher:new RegExp(n.sub(s,{domain:"vimeo.com"}),"i"),options:i,mediaRegex:/\/(\d+)/}}}},EXTENDS:e.Plugin.Base,prototype:{initializer:function(e){var t=this,n=t._handles;n.changeReqeust=t.afterHostMethod("_changeRequest",t._restoreMedia),n.close=t.beforeHostMethod("close",t.close),n.loadMedia=t.beforeHostMethod("loadImage",t.loadMedia),n.preloadImage=t.beforeHostMethod("preloadImage",t.preloadImage)},close:function(){var e=this,t=e.get("host"),n=t.getCurrentLink(),r=e._getMediaType(n.attr("href"));r!="image"&&(e._redirectIframe("about:blank"),t.setStdModContent("body",""))},loadMedia:function(t){var i=this,s=i.get("host"),o=i._getMediaType(t),u=!0;i._redirectIframe("about:blank");if(o!="image"){var a=i.get("providers")[o],f=s.getCurrentLink(),l=i._updateOptions(f,e.clone(a.options)),c=a.mediaRegex.exec(t);c&&(l.media=c[1]);var h=n.sub(a.container,l);s.setStdModContent("body",h),s._syncImageViewerUI(),i._uiSetContainerSize(l.width,l.height),s._setAlignCenter(!0),s.set("loading",!1),s.fire("load",{media:c});if(s.get("preloadNeighborImages")){var p=s.get("currentIndex");s.preloadImage(p+1),s.preloadImage(p-1)}u=new r.Prevent}return u},preloadImage:function(e){var t=this,n=t.get("host"),i=n.getLink(e),s=new r.Prevent;if(i){var o=i.attr("href"),u=t._getMediaType(o);u=="image"&&(s=!0)}return s},_getMediaType:function(t){var n=this,r=n.get("providers"),i="image";return e.some(r,function(e,n,r){return e.matcher.test(t)&&(i=n)}),i},_redirectIframe:function(e){var t=this,n=t.get("host.bodyNode");if(n){var r=n.one("iframe");r&&r.attr("src",e)}},_restoreMedia:function(e){var t=this,n=t.get("host"),r=n.getCurrentLink(),i=r.attr("href"),s=t._getMediaType(i);s!="image"&&!n.getStdModNode("body").html()&&n._processChangeRequest()},_uiSetContainerSize:function(e,t){var n=this,r=n.get("host"),i=r.bodyNode,s=r.footerNode;s.setStyle("width",e),i.setStyles({height:t,width:e})},_updateOptions:function(t,r){var i=t.attr("data-options"),s=t.attr("href");return e.each(r,function(e,t,u){var a=new RegExp(n.sub(o,{param:t})),f=a.exec(i)||a.exec(s);f&&(r[t]=f[1])}),r},_handles:{}},DATA_OPTIONS:"data-options",DEFAULT_OPTIONS:i,REGEX_DOMAIN:s,REGEX_PARAM:o});e.MediaViewerPlugin=u,e.MediaViewer=e.ImageViewer},"2.5.0",{requires:["plugin","aui-image-viewer-base","aui-pagination","aui-toolbar"]});