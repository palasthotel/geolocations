!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.plugins,l=window.wp.editPost,r=window.wp.data,o=window.wp.components,a=e=>{let{fields:n}=e;const[l,a]=(()=>{const e=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("geolocation"))),{editPost:t}=(0,r.dispatch)("core/editor");return[e,n=>{t({geolocation:{...e,...n}})}]})(),[s,i]=(0,t.useState)(!1),[c,u]=(0,t.useState)(""),[m,d]=(0,t.useState)([]),[g,p]=(0,t.useState)(!1),h=(0,t.useMemo)((()=>n.filter((e=>{let{hide:t}=e;return!t}))),[n.map((e=>{let{key:t}=e;return t}))]),E=function(e,n){const[l,r]=(0,t.useState)(e);return(0,t.useEffect)((()=>{const t=setTimeout((()=>{r(e)}),600);return()=>{clearTimeout(t)}}),[e,600]),l}(c);return(0,t.useEffect)((()=>{if(E.length<3)return void d([]);const e=new AbortController,t=new URLSearchParams({action:"geolocations_admin",term:E});return p(!0),fetch(ajaxurl+"?"+t,{signal:e.signal}).then((e=>e.json())).then(d).finally((()=>p(!1))),()=>{p(!1),e.abort()}}),[E]),(0,t.createElement)("div",null,s?(0,t.createElement)("div",{className:"geolocations__suggestions-wrapper"},(0,t.createElement)(o.TextControl,{label:"Von vorhandener Adresse kopieren",value:c,onChange:u,placholder:"Nach Adresse suchen"}),g?(0,t.createElement)("span",{className:"spinner is-active"}):null,(0,t.createElement)("div",{className:"geolocations__suggestions"},m.map((e=>(0,t.createElement)("div",{className:"geolocations__suggestions-item",key:e.ID,onClick:()=>{return t=e,i(!1),void a({...t.values});var t}},(0,t.createElement)("div",null,e.post_title),(0,t.createElement)("div",null,e.address)))))):(0,t.createElement)("a",{href:"#",onClick:e=>{e.preventDefault(),i(!0)}},"Von vorhandener Adresse kopieren"),(0,t.createElement)("hr",null),h.map((e=>{let{key:n,label:r,readonly:s}=e;return(0,t.createElement)(o.TextControl,{key:n,label:r,readOnly:s,value:l[n]||"",onChange:e=>{a({[n]:e})}})})))};const s=(0,r.withSelect)((e=>({postType:e("core/editor").getCurrentPostType()})))((e=>{let{postType:n}=e;return Geolocations.postTypes.includes(n)?(0,t.createElement)(l.PluginDocumentSettingPanel,{title:"Geolocation",icon:"location-alt"},(0,t.createElement)(a,Geolocations)):null}));(0,n.registerPlugin)("geolocation-document-panel",{render:()=>(0,t.createElement)(s,null)});var i=window.wp.blocks,c=window.wp.blockEditor,u=window.wp.serverSideRender,m=e.n(u);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}const g=e=>{let{string:n,isHighlighted:l}=e;return(0,t.createElement)(t.Fragment,null,l?(0,t.createElement)("strong",null,n):n)},p=e=>{let{ID:n,address:l,post_title:r,highlightID:o,highlightTitle:a,highlightAddress:s,onClick:i}=e;return(0,t.createElement)("div",{className:"geolocations-single-address-suggestion",onClick:i,style:{borderBottom:"1px solid #efefef",padding:"10px 0"}},(0,t.createElement)("small",null,(0,t.createElement)(g,{string:n,isHighlighted:o})),(0,t.createElement)("br",null),(0,t.createElement)(g,{string:r,isHighlighted:a}),(0,t.createElement)("br",null),(0,t.createElement)("i",null,(0,t.createElement)(g,{string:l,isHighlighted:s})))},h=e=>{let{ID:n,address:l,post_title:r,onRemove:a}=e;return(0,t.createElement)("div",{style:{border:"1px solid #efefef",borderColor:"var(--wp-admin-theme-color)",padding:10,marginLeft:-10,marginRight:-10,marginBottom:20,position:"relative"}},(0,t.createElement)("small",null,n),(0,t.createElement)("br",null),r,(0,t.createElement)("br",null),(0,t.createElement)("i",null,l),(0,t.createElement)("span",{style:{position:"absolute",right:10,top:10,cursor:"pointer"},onClick:a},(0,t.createElement)(o.Icon,{icon:"no"})))},E=(e,t)=>e.toLowerCase().indexOf(t.toLowerCase())>=0;var f=e=>{let{attributes:n,setAttributes:l}=e;const{i18n:r,locations:a}=Geolocations,{post_id:s}=n,i=e=>l({post_id:e}),[c,u]=(0,t.useState)(""),[m,g]=(0,t.useState)(10),f=a.find((e=>{let{ID:t}=e;return t===s})),b=a.filter((e=>{let{ID:t}=e;return t+""===c})).map((e=>({...e,highlightID:!0}))),v=a.filter((e=>{let{post_title:t}=e;return E(t,c)})).map((e=>({...e,highlightTitle:!0}))),y=a.filter((e=>E(e.address,c))).map((e=>({...e,highlightAddress:!0}))),w=c.length>0?[...b,...v,...y]:[],C=[...new Set(w.map((e=>{let{ID:t}=e;return t})))].map((e=>w.find((t=>t.ID===e)))),k=C.length>m,A=C.slice(0,m);return(0,t.createElement)("div",null,f?(0,t.createElement)(h,d({},f,{onRemove:()=>i(0)})):null,(0,t.createElement)(o.TextControl,{label:r.selectPost,value:c,onChange:u}),A.map((e=>(0,t.createElement)(p,d({key:e.ID},e,{onClick:()=>{u(""),i(e.ID)}})))),k?(0,t.createElement)("div",{style:{textAlign:"center"}},(0,t.createElement)(o.Button,{isTertiary:!0,onClick:()=>g((e=>e+10))},"Show more")):null,(0,t.createElement)("p",{className:"description"},r.selectPost_description))};const b=(e,t)=>((e,t)=>t.find((t=>t.id===e)))(e,t)||((e,t)=>t.find((t=>t.slug===e)))(e,t)||((e,t)=>t.find((t=>t.name===e)))(e,t);var v=e=>{let{attributes:n,setAttributes:l}=e;const{i18n:a,taxonomies:s}=Geolocations,{taxonomy:i="",terms:c=[]}=n,u=e=>l({taxonomy:e});(0,t.useEffect)((()=>{""===i&&u(s[0].name)}),[i,s]);const m=(e=>(0,r.useSelect)((t=>t("core").getEntityRecords("taxonomy",e,{per_page:-1})||[])))(i);return(0,t.createElement)("div",null,(0,t.createElement)(o.SelectControl,{label:a.selectTaxonomy,value:i,onChange:u,options:s.map((e=>{let{label:t,name:n}=e;return{label:t,value:n}}))}),(0,t.createElement)(o.FormTokenField,{label:a.setTerms,value:(typeof c==typeof[]?c:(d=c,d.split(",").map((e=>e.replaceAll(" ",""))))).map((e=>{const t=b(e,m);return t?t.name:e})),suggestions:m.map((e=>e.name)),onChange:e=>{(e=>{l({terms:e})})([...e.map((e=>{const t="string"==typeof e?e:e.value,n=b(t,m);return n?n.slug:t}))])}}));var d};const y=e=>{let{attributes:n,setAttributes:l}=e;const{i18n:r}=Geolocations,{single:a=!1}=n;return(0,t.createElement)(o.PanelBody,null,(0,t.createElement)(o.ToggleControl,{label:r.onlyOneAddress,help:a?r.onlyOneAddress_true:r.onlyOneAddress_false,checked:a,onChange:e=>{l(e?{single:e,post_id:0}:{single:e,taxonomy:"",terms:""})}}),a?(0,t.createElement)(f,{attributes:n,setAttributes:l}):(0,t.createElement)(v,{attributes:n,setAttributes:l}))};var w=e=>{let{isSelected:n,className:l,setAttributes:r,attributes:o}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(y,{setAttributes:r,attributes:o})),(0,t.createElement)("div",{className:l},(0,t.createElement)(m(),{block:C,attributes:o})))};const C="geolocations/address";(0,i.registerBlockType)(C,{title:"Address",description:"Place a map",category:"embed",icon:"location-alt",supports:{align:!1,customClassName:!1,html:!1},edit:e=>(0,t.createElement)(w,e)})}();