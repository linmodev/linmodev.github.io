webpackJsonp([1,0],[function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=s(3),i=n(a),o=s(38),r=n(o),c=s(16),l=n(c),d=s(17),u=n(d),f=s(19),v=n(f),p=s(23),h=n(p),_=s(21),C=n(_);s(15),i.default.use(r.default),i.default.use(l.default);var m=[{path:"/goods",component:v.default},{path:"/ratings",component:C.default},{path:"/seller",component:h.default}],g=new r.default({routes:m,linkActiveClass:"active"});new i.default({el:"#app",template:"<App/>",components:{App:u.default},router:g}),g.push("/goods")},,function(t,e,s){var n,a;s(12),n=s(41);var i=s(35);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){var n,a;s(10),n=s(40);var i=s(33);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(6),n=s(42);var i=s(29);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(13),n=s(43);var i=s(36);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(8),n=s(44);var i=s(31);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(9),n=s(45);var i=s(32);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(4),n=s(46);var i=s(27);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(7),n=s(47);var i=s(30);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(14),n=s(48);var i=s(37);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(5),n=s(49);var i=s(28);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e,s){var n,a;s(11),n=s(50);var i=s(34);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratingselect"},[s("div",{staticClass:"rating-type"},[s("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(e){t.select(2,e)}}},[t._v(t._s(t.desc.all)+" "),s("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),s("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(e){t.select(0,e)}}},[t._v(t._s(t.desc.positive)),s("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),s("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(e){t.select(1,e)}}},[t._v(t._s(t.desc.negative)),s("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),s("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[s("span",{staticClass:"icon-check_circle"}),t._v(" "),s("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"split"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[s("div",{staticClass:"food-content"},[s("div",{staticClass:"img-header"},[s("img",{attrs:{src:t.food.image}}),t._v(" "),s("div",{staticClass:"back",on:{click:t.hide}},[s("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),s("div",{staticClass:"content"},[s("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),s("div",{staticClass:"food-detail"},[s("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),s("div",{staticClass:"cartcontrol-wrapper"},[s("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),s("transition",{attrs:{name:"fade-buy"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count||food.count===0"}],staticClass:"buy",on:{click:function(e){e.stopPropagation(),t.addFirst(e)}}},[t._v("\n            加入购物车\n          ")])])],1),t._v(" "),s("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[s("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),s("split"),t._v(" "),s("div",{staticClass:"rating"},[s("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),s("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings}}),t._v(" "),s("div",{staticClass:"rating-wrapper"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(e){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(e.rateType,e.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[s("div",{staticClass:"user"},[s("span",{staticClass:"name"},[t._v(t._s(e.username))]),t._v(" "),s("img",{staticClass:"avatar",attrs:{height:"12",width:"12",src:e.avatar}})]),t._v(" "),s("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(e.rateTime)))]),t._v(" "),s("div",{staticClass:"text"},[s("span",{class:{"icon-thumb_up":0===e.rateType,"icon-thumb_down":1===e.rateType}}),t._v(t._s(e.text)+"\n              ")])])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"seller"},[t._v("\n  我是seller\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:"avatar"}})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"brand"}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),s("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?s("div",{staticClass:"support"},[s("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?s("div",{staticClass:"support-count",on:{click:t.showDetail}},[s("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),s("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),s("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[s("span",{staticClass:"bulletin-title"}),t._v(" "),s("span",{staticClass:"bulletin-text"},[t._v("\n      "+t._s(t.seller.bulletin)+"\n    ")]),t._v(" "),s("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),s("div",{staticClass:"background"},[s("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.detailShow?s("div",{staticClass:"detail"},[s("div",{staticClass:"detail-wrapper clearfix"},[s("div",{staticClass:"detail-main"},[s("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),s("div",{staticClass:"star-wrapper"},[s("star",{attrs:{size:36,score:t.seller.score}})],1),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),s("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?s("ul",{staticClass:"supports"},t._l(t.seller.supports,function(e,n){return s("li",{staticClass:"support-item"},[s("span",{staticClass:"icon",class:t.classMap[t.seller.supports[n].type]}),t._v(" "),s("span",{staticClass:"text"},[t._v("\n                "+t._s(t.seller.supports[n].description)+"\n              ")])])})):t._e(),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),s("div",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"bulletin"},[s("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),s("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[s("i",{staticClass:"icon-close"})])]):t._e()])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratings"},[t._v("\n  我是ratings\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("s-header",{attrs:{seller:t.seller}}),t._v(" "),s("div",{staticClass:"tab border-1px"},[s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{path:"/goods"}}},[t._v("商品")])],1),t._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{path:"/ratings"}}},[t._v("评论")])],1),t._v(" "),s("div",{staticClass:"tab-item"},[s("router-link1",{attrs:{to:{path:"/seller"}}},[t._v("商家")])],1)]),t._v(" "),s("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cartcontrol"},[s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(e){e.stopPropagation(),t.decreaseCart(e)}}},[s("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),s("div",{staticClass:"cart-add icon-add_circle",on:{click:function(e){e.stopPropagation(),t.addCart(e)}}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"goods"},[s("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[s("ul",t._l(t.goods,function(e,n){return s("li",{staticClass:"menu-item",class:{current:t.currentIndex===n},on:{click:function(e){t.selectMenu(n,e)}}},[s("span",{staticClass:"text"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[e.type]}),t._v(t._s(e.name)+"\n          ")])])}))]),t._v(" "),s("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[s("ul",t._l(t.goods,function(e){return s("li",{staticClass:"food-list food-list-hook"},[s("h1",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),s("ul",t._l(e.foods,function(e){return s("li",{staticClass:"food-item",on:{click:function(s){t.selectFood(e,s)}}},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:e.icon,width:"57",height:"57"}})]),t._v(" "),s("div",{staticClass:"content"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),s("div",{staticClass:"extra"},[s("span",{staticClass:"count"},[t._v("月售"+t._s(e.sellCount))]),t._v(" "),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(e.rating)+"%")])]),t._v(" "),s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(e.price))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(e.oldPrice))])]),t._v(" "),s("div",{staticClass:"cartcontrol-wrapper"},[s("cartcontrol",{attrs:{food:e}})],1)])])}))])}))]),t._v(" "),s("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1),t._v(" "),s("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"shopcart"},[s("div",{staticClass:"content",on:{click:t.toggleList}},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"logo-wrapper"},[s("span",{staticClass:"logo",class:{"high-light":t.totalCount>0}},[s("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v("\n            "+t._s(t.totalCount)+"\n          ")])]),t._v(" "),s("div",{staticClass:"price",class:{"high-light":t.totalPrice>0}},[t._v("\n          ￥"+t._s(t.totalPrice)+"\n        ")]),t._v(" "),s("div",{staticClass:"desc"},[t._v("\n          另需配送费￥"+t._s(t.deliveryPrice)+"元\n        ")])]),t._v(" "),s("div",{staticClass:"content-right",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.pay(e)}}},[s("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),s("div",{staticClass:"ball-container"},t._l(t.balls,function(e){return s("div",[s("transition",{attrs:{name:"drop"},on:{enter:t.enter,"before-enter":t.beforeEnter,"after-enter":t.afterEnter}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"ball.show"}],staticClass:"ball"},[s("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),s("transition",{attrs:{name:"fold"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[s("div",{staticClass:"list-header"},[s("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),s("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),s("div",{ref:"listContent",staticClass:"list-content"},[s("ul",t._l(t.selectFoods,function(e){return s("li",{staticClass:"food"},[s("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"price"},[s("span",[t._v("￥"+t._s(e.price*e.count))])]),t._v(" "),s("div",{staticClass:"cartcontrol-wrapper"},[s("cartcontrol",{attrs:{food:e}})],1)])}))])])])],1),t._v(" "),s("transition",{attrs:{name:"fade-mask"}},[t.listShow?s("div",{staticClass:"list-mask",on:{click:t.hideList}}):t._e()])],1)},staticRenderFns:[]}},,function(t,e){"use strict";function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in s)if(new RegExp("("+a+")").test(e)){var i=s[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:n(i))}return e}function n(t){return("00"+t).substr(t.length)}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=s},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(20),i=n(a),o=0;e.default={name:"app",data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(e){e=e.body,e.erron===o&&(t.seller=e.data)})},components:{"s-header":i.default}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),i=n(a);e.default={props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.default.set(this.food,"count",1),this.$parent.$emit("cart.add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=n(a),o=s(2),r=n(o),c=s(25),l=n(c),d=s(22),u=n(d),f=s(39),v=2;e.default={components:{cartcontrol:r.default,split:l.default,ratingselect:u.default},props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:v,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},created:function(){var t=this;this.$on("ratingtype.select",function(e){t.selectType=e,t.$nextTick(function(){t.scroll.refresh()})}),this.$on("content.toggle",function(e){t.onlyContent=e,t.$nextTick(function(){t.scroll.refresh()})})},filters:{formatDate:function(t){var e=new Date(t);return(0,f.formatDate)(e,"yyyy-MM-dd hh:mm")}},methods:{needShow:function(t,e){return!(this.onlyContent&&!e)&&(this.selectType===v||t===this.selectType)},show:function(){var t=this;this.showFlag=!0,this.selectType=v,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new i.default(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$parent.$emit("cart.add",t.target))}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=n(a),o=s(24),r=n(o),c=s(2),l=n(c),d=s(18),u=n(d),f=0;e.default={components:{shopcart:r.default,cartcontrol:l.default,food:u.default},props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){var t=this;this.$http.get("/api/goods").then(function(e){e=e.body,e.erron===f&&(t.goods=e.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"],this.$on("cart.add",function(e){t._drop(e)})},methods:{_drop:function(t){var e=this;this.$nextTick(function(){e.$refs.shopcart.drop(t)})},selectFood:function(t,e){e._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.menuSroll=new i.default(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new i.default(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(e){t.scrollY=Math.abs(Math.round(e.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var n=t[s];e+=n.clientHeight,this.listHeight.push(e)}},selectMenu:function(t,e){if(e._constructed){var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),n=s[t];this.foodsScroll.scrollToElement(n,300)}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],s=this.listHeight[t+1];if(!s||this.scrollY>=e&&this.scrollY<s)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(e){e.foods.forEach(function(e){e.count&&t.push(e)})}),t}}}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(26),i=n(a);e.default={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:i.default},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=0,n=1,a=2;e.default={methods:{select:function(t,e){e._constructed&&this.$parent.$emit("ratingtype.select",t)},toggleContent:function(t){t._constructed&&this.$parent.$emit("content.toggle",!this.onlyContent)}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:a},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===s})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===n})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),i=n(a),o=s(1),r=n(o);e.default={components:{cartcontrol:i.default},methods:{pay:function(){this.totalPrice<this.minPrice||alert("需要支付"+this.totalPrice)},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return s.show=!0,s.el=t,void this.dropBalls.push(s)}},beforeEnter:function(t){for(var e=this.balls.length;e--;){var s=this.balls[e];if(s.show){var n=s.el.getBoundingClientRect(),a=n.left-32,i=-(window.innerHeight-n.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+i+"px,0)",t.style.transform="translate3d(0,"+i+"px,0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.webkitTransform="translate3d("+a+"px,0,0)",o.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offestHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var e=this.dropBalls.shift();e&&(e.show=!1,t.style.display="none")}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectFoods:{type:Array,default:function(){return[{price:10,count:5}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.price*e.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(e){t+=e.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差"+t+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var e=!this.fold;return e?(this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new r.default(t.$refs.listContent,{click:!0})}),e):void 0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=5,n="on",a="off",i="half";e.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){var t=[];console.log(this.score);for(var e=Math.floor(2*this.score)/2,o=e%1!==0,r=Math.floor(e),c=0;c<r;c++)t.push(n);for(o&&t.push(i);t.length<s;)t.push(a);return t}}}}]);
//# sourceMappingURL=app.ffccfbb6be8ebe8f2cb3.js.map