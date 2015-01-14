YUI.add("aui-datatable-highlight",function(e,t){var n=e.Lang,r=n.isArray,i=n.isString,s=n.isBoolean,o=function(t){var s=this,o=0,u;i(t)?t=n.trim(t).replace(/\s+/g," ").split(" "):r(t)||(t=e.Array(t));for(u=4-t.length;o<u;o++)t.push(t[o]);return e.Array.map(t,parseFloat)},u=e.Base.create("datatable-highlight",e.Plugin.Base,[],{CLASS_NAMES:null,TPL_FRAME:'<div class="{overlay}"><div class="{border}"></div><div class="{border}"></div><div class="{border}"></div><div class="{border}"></div></div>',_lastActiveRow:null,_nodes:null,initializer:function(){var e=this,t=e.get("host");e.CLASS_NAMES={active:t.getClassName("active"),border:t.getClassName("highlight","border"),highlight:t.getClassName("highlight"),overlay:t.getClassName("highlight","overlay"),overlayActive:t.getClassName("highlight","overlay","active")},e.afterHostEvent("activeCoordChange",e._afterActiveCoordChange),e.afterHostEvent("selectionChange",e._afterSelectionChange),e.afterHostEvent("dataChange",e._afterDataChange)},clear:function(){var e=this,t=e.get("host"),n=t.get("activeCell");n&&n.removeClass(e.CLASS_NAMES.active),e._clearBorders(),e._clearHighlights()},getActiveRegion:function(){var e=this,t=e.get("host"),n=e.get("type"),r=null,i;return n==="rows"?i=t.get("activeRow"):i=t.get("activeCell"),i&&(r=i.get("region")),r},getSelectionRegion:function(){var e=this,t=e._nodes,n=t[0].get("region"),r=t[t.length-1].get("region");return{0:n.top,1:n.left,bottom:r.bottom,height:r.bottom-n.top,left:n.left,right:r.right,top:n.top,width:r.right-n.left}},_afterActiveCoordChange:function(e){var t=this,n=t.get("host"),r=t.get("activeBorderWidth"),i=t.get("overlayActiveNode"),s=t.CLASS_NAMES,o=n.get("activeRow"),u=t._lastActiveRow;if(!t.get("type"))return;t.clear(),u&&u.removeClass(s.active),o&&(t._alignBorder(i,t.getActiveRegion(),r),o.addClass(s.active)),t._lastActiveRow=o},_afterDataChange:function(e){var t=this;t.clear()},_afterSelectionChange:function(t){var n=this,r,i=n.get("highlightRange"),s=n.get("overlayNode"),o=n.get("rangeBorderWidth");if(!n.get("type"))return;n._clearHighlights(),r=n._collectNodes(t.newVal),i&&r&&r.length>1&&(n._alignBorder(s,n.getSelectionRegion(),o),e.Array.each(r,function(e){e.addClass(n.CLASS_NAMES.highlight)}))},_alignBorder:function(e,t,n){var r=this,i=r.get("host");i._tableNode.appendChild(e);if(t){var s=e.get("children"),o=s.item(0),u=s.item(1),a=s.item(2),f=s.item(3);e.setXY([t.left,t.top]),o.sizeTo(t.width,n[0]),f.sizeTo(n[3],t.height-n[2]),a.sizeTo(t.width,n[2]),u.sizeTo(n[1],t.height-n[2]),o.setXY([t.left,t.top]),f.setXY([t.left,t.top]),a.setXY([t.left,t.bottom-n[2]]),u.setXY([t.right-n[1],t.top])}},_collectNodes:function(e){var t=this,n=t.get("type");return!n||!e?null:t._nodes=e[n]},_clearBorders:function(){var e=this;e.get("overlayNode").remove(),e.get("overlayActiveNode").remove()},_clearHighlights:function(){var t=this;e.Array.each(t._nodes,function(e){e&&e.removeClass(t.CLASS_NAMES.highlight)})},_validateType:function(e){return e==="cells"||e==="rows"||e===null}},{NS:"highlight",NAME:"datatable-highlight",ATTRS:{activeBorderWidth:{setter:o,value:2},overlayActiveNode:{setter:function(t){var r=this,i=r.CLASS_NAMES;return t||(t=e.Node.create(n.sub(r.TPL_FRAME,i)),t.addClass(i.overlayActive)),t},value:null},overlayNode:{setter:function(t){var r=this;return t||(t=e.Node.create(n.sub(r.TPL_FRAME,r.CLASS_NAMES))),t},value:null},highlightRange:{validator:s,value:!0},rangeBorderWidth:{setter:o,value:1},type:{validator:"_validateType",value:"cells"}}});e.namespace("Plugin").DataTableHighlight=u},"2.5.0",{requires:["aui-datatable-selection"],skinnable:!0});