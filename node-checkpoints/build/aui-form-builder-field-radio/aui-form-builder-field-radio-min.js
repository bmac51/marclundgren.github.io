YUI.add("aui-form-builder-field-radio",function(e,t){var n=e.Lang,r=e.getClassName,i=r("field"),s=r("field","choice"),o=r("field","radio"),u=r("form-builder-field"),a=r("form-builder-field","node"),f=r("form-builder-field","options","container"),l='<div class="'+f+'"></div>',c='<div><input id="{id}" class="'+[i,s,o,a].join(" ")+'" name="{name}" type="radio" value="{value}" {checked} {disabled} /><label class="field-label" for="{id}">{label}</label></div>',h=e.Component.create({NAME:"form-builder-radio-field",ATTRS:{predefinedValue:{valueFn:"_valuePredefinedValueFn"},template:{valueFn:function(){return c}}},CSS_PREFIX:u,EXTENDS:e.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){return l},_uiSetDisabled:function(e){var t=this,n=t.get("templateNode");n.all("input").each(function(t){e?t.setAttribute("disabled",e):t.removeAttribute("disabled")})},_uiSetOptions:function(t){var r=this,i=[],s=0,o=!1,u=r.get("predefinedValue"),a=r.get("templateNode");e.each(t,function(t,a,f){var l=e.Array.indexOf(u,t.value)>-1;i.push(n.sub(c,{checked:l?'checked="checked"':"",disabled:r.get("disabled")?'disabled="disabled"':"",id:r.get("id")+s++,label:t.label,name:r.get("name"),value:t.value})),l&&(o=!0)}),r.optionNodes=e.NodeList.create(i.join("")),a.setContent(r.optionNodes),o||(r.set("predefinedValue",r._valuePredefinedValueFn()),r.get("builder").editField(r))},_uiSetPredefinedValue:function(e){var t=this,n=t.optionNodes;if(!n)return;n.set("checked",!1),n.all('input[value="'+e+'"]').set("checked",!0)},_valuePredefinedValueFn:function(){var e=this,t=e.get("options"),n;return t.length&&(n=t[0].value),n}}});e.FormBuilderRadioField=h,e.FormBuilder.types.radio=e.FormBuilderRadioField},"2.5.0",{requires:["aui-form-builder-field-base"]});
