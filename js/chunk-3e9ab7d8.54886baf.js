(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e9ab7d8"],{"22de":function(t,a,i){"use strict";var n=i("9f39"),e=i.n(n);e.a},3671:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container-fluid vld-parent"},[i("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"background-color":"#555","is-full-page":!0},on:{"update:active":function(a){t.isLoading=a}}},[i("LoadEffect",{attrs:{slot:"default"},slot:"default"})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"dashboard"},[t._m(0),i("main",{staticClass:"body"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{directives:[{name:"scrollbar",rawName:"v-scrollbar"}],staticClass:"container-fluid"},[i("div",{staticClass:"row"},t._l(t.storageList,(function(t){return i("div",{key:t.id,staticClass:"col-4"},[i("ImgCard",{attrs:{path:t.path,id:t.id}})],1)})),0)]),i("pagination",{attrs:{total_pages:t.total,page:t.page},on:{"update:page":function(a){t.page=a}}})],1),i("div",{staticClass:"col-4"},[i("loading",{attrs:{active:t.isUplading,"can-cancel":!0,"is-full-page":!1},on:{"update:active":function(a){t.isUplading=a}}},[i("uploading",{attrs:{slot:"default"},slot:"default"})],1),i("file",{ref:"file",staticClass:"upload__field",on:{uploadSubmit:t.upload}})],1)])])])])])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("header",{staticClass:"header"},[i("div",{staticClass:"title"},[t._v("檔案管理列表")])])}],s=(i("d3b7"),i("6346")),o=i("7c09"),c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[i("div",{staticClass:"content-overlay"}),i("img",{staticClass:"content-image",attrs:{src:t.path}}),i("div",{staticClass:"content-details fadeIn-bottom"},[i("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.copyHandler(a)}}},[t._v("複製連結")]),i("button",{staticClass:"btn btn-error",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delHandler(a)}}},[t._v("刪除圖片")])]),i("Dialog",{ref:"dialog",on:{dialog:t.confirm}},[t._v("刪除此檔案?")])],1)},l=[],r={name:"ImgCard",mixins:[s["a"]],props:{path:{type:String,required:!0}},data:function(){return{}},methods:{delHandler:function(){this.$refs.dialog.isVisible=!0},copyHandler:function(){navigator.clipboard&&navigator.clipboard.writeText(this.path)},confirm:function(){var t=this;this.destroyStorage(this.$attrs.id).then((function(){t.$parent.getdata()}))}},computed:{}},d=r,u=(i("22de"),i("2877")),f=Object(u["a"])(d,c,l,!1,null,"3dfc0e7d",null),p=f.exports,g={mataInfo:{title:"-檔案管理"},name:"Storage",components:{uploading:function(){return i.e("chunk-3ca49dc7").then(i.bind(null,"db5d"))},file:o["a"],ImgCard:p},mixins:[s["a"]],data:function(){return{isLoading:!1,isUplading:!1,page:1,total:1,storageList:[]}},created:function(){this.getdata()},methods:{getdata:function(){this.getStorageList(this.page)},BtnClick:function(t,a){this["".concat(t,"Handler")](a)},newHandler:function(){this.$refs.modal.ModalShow=!0,this.$refs.modal.ModalTitle="新增檔案"},upload:function(t){var a=this;this.editStorage(t).then((function(){a.$refs.file.src="",a.getStorageList(a.page)}))}},watch:{page:function(){this.getdata()}}},v=g,h=(i("7d79"),Object(u["a"])(v,n,e,!1,null,"aa28e3dc",null));a["default"]=h.exports},"7d79":function(t,a,i){"use strict";var n=i("ac59"),e=i.n(n);e.a},"9f39":function(t,a,i){},ac59:function(t,a,i){}}]);
//# sourceMappingURL=chunk-3e9ab7d8.54886baf.js.map