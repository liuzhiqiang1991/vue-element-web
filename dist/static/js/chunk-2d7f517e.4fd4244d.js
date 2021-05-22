(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d7f517e"],{"1c18":function(e,t,n){},2715:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"书名",clearable:""},on:{clear:e.handleFilter,blur:e.handleFilter},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"作者",clearable:""},on:{clear:e.handleFilter,blur:e.handleFilter},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.author,callback:function(t){e.$set(e.listQuery,"author",t)},expression:"listQuery.author"}}),n("el-select",{staticClass:"filter-item",attrs:{placeholder:"分类",clearable:""},on:{change:e.handleFilter,clear:e.handleFilter},model:{value:e.listQuery.category,callback:function(t){e.$set(e.listQuery,"category",t)},expression:"listQuery.category"}},e._l(e.categoryList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label+"("+e.num+")",value:e.value}})})),1),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询 ")]),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 新增 ")]),n("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"5px"},on:{change:e.changeShowCover},model:{value:e.showCover,callback:function(t){e.showCover=t},expression:"showCover"}},[e._v(" 显示封面 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[n("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"cneter",width:"80"}}),n("el-table-column",{attrs:{label:"书名",align:"cneter",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.titleWrapper;return[n("span",{domProps:{innerHTML:e._s(a)}})]}}])}),n("el-table-column",{attrs:{label:"作者",align:"cneter",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.authorWrapper;return[n("span",{domProps:{innerHTML:e._s(a)}})]}}])}),n("el-table-column",{attrs:{label:"出版社",prop:"publisher",width:"150",align:"center"}}),n("el-table-column",{attrs:{label:"分类",prop:"categoryText",width:"150",align:"center"}}),n("el-table-column",{attrs:{label:"语言",prop:"language",width:"150",align:"center"}}),e.showCover?n("el-table-column",{attrs:{label:"封面",prop:"cover",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("a",{attrs:{href:e.row.cover,target:"_blank"}},[n("img",{staticStyle:{width:"120px",height:"180px"},attrs:{src:e.row.cover}})])]}}],null,!1,1688645721)}):e._e(),n("el-table-column",{attrs:{label:"文件名",prop:"fileName",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"文件路径",prop:"filePath",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.filePath;return[n("span",[e._v(e._s(e._f("valueFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"封面路径",prop:"coverPath",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"解压路径",prop:"unzipPath",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"上传人",prop:"createUser",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"上传时间",prop:"createDt",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.createDt;return[n("span",[e._v(e._s(e._f("timeFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"120",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.handleUpdate(a)}}}),n("el-button",{staticStyle:{color:"#f56c6c"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(a)}}})]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}})],1)},r=[],i=n("5530"),l=(n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("159b"),n("333d")),o=n("c7a7"),c=n("b067"),s=n("ed08"),u={components:{Pagination:l["a"]},directives:{waves:o["a"]},filters:{valueFilter:function(e){return e||"无"},timeFilter:function(e){return e?Object(s["d"])(e,"{y}-{m}-{d} {h}:{i}"):"无"}},data:function(){return{tableKey:0,listLoading:!0,list:[],total:0,listQuery:{},showCover:!1,categoryList:[]}},created:function(){this.parseQuery()},mounted:function(){this.getCategoryList(),this.getList()},methods:{parseQuery:function(){var e={page:1,pageSize:10,sort:"+id"};this.listQuery=Object(i["a"])(Object(i["a"])({},e),this.listQuery)},handleUpdate:function(e){console.log(e),this.$router.push("/book/edit/".concat(e.fileName))},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["b"])(e.fileName).then((function(e){t.$notify({title:"成功",message:e.msg||"删除成功",type:"success",duration:2e3}),t.handleFilter()}))}))},sortChange:function(e){console.log("sortChange",e);var t=e.prop,n=e.order;this.sortBy(t,n)},sortBy:function(e,t){this.listQuery.sort="ascending"===t?"+".concat(e):"-".concat(e),this.handleFilter()},wrapperKeyword:function(e,t){function n(e){return'<span style="color:#1890ff">'.concat(e,"</span>")}return this.listQuery[e]?t.replace(new RegExp(this.listQuery[e],"ig"),(function(e){return n(e)})):t},getList:function(){var e=this;this.listLoading=!0,Object(c["e"])(this.listQuery).then((function(t){var n=t.data,a=n.list,r=n.count;e.list=a,e.total=r,e.listLoading=!1,e.list.forEach((function(t){t.titleWrapper=e.wrapperKeyword("title",t.title),t.authorWrapper=e.wrapperKeyword("author",t.author)}))}))},getCategoryList:function(){var e=this;Object(c["d"])().then((function(t){e.categoryList=t.data}))},handleFilter:function(){console.log("handle",this.listQuery),this.getList(this.listQuery)},handleCreate:function(){this.$router.push("/book/create")},changeShowCover:function(e){this.showCover=e}}},d=u,p=n("2877"),f=Object(p["a"])(d,a,r,!1,null,"3f46bef6",null);t["default"]=f.exports},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},r=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(e,t,n){var a=o(),r=e-a,c=20,s=0;t="undefined"===typeof t?500:t;var u=function e(){s+=c;var o=Math.easeInOutQuad(s,a,r,t);l(o),s<t?i(e):n&&"function"===typeof n&&n()};u()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&c(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=s,d=(n("e498"),n("2877")),p=Object(d["a"])(u,a,r,!1,null,"6af373ef",null);t["a"]=p.exports},"8d41":function(e,t,n){},b067:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n("b775");function r(e){return Object(a["a"])({url:"/book/create",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/book/update",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/book/get",method:"get",params:{fileName:e}})}function o(){return Object(a["a"])({url:"/book/category",method:"get"})}function c(e){return Object(a["a"])({url:"/book/list",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/book/delete",method:"get",params:{fileName:e}})}},c7a7:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function r(e,t){function n(n){var a=Object.assign({},t.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var l=i.getBoundingClientRect(),o=i.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",i.appendChild(o)),r.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=r.color,o.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}t["a"]={bind:function(e,t){e.addEventListener("click",r(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",r(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}}},e498:function(e,t,n){"use strict";n("1c18")}}]);