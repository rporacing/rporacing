webpackJsonp([10],{"3jXG":function(t,s){},"c+vV":function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("lC5x"),o=n.n(e),a=n("J0Oq"),i=n.n(a),r=n("d7aC"),c={data:function(){return{number:"--",address:"",status:!1,show:!1,enjoyNumber:"",parents:"0x3fb26054882A16AA990fecdC608090b853182d89"}},methods:{getParent:function(){var t=this;this.$GLMethods.getSuper(this.address).call({},function(s,n){"0x0000000000000000000000000000000000000000"!==n[0]&&(t.parents=n[0]),s&&t.$toast("error")})},outFn:function(){var t=this,s={from:this.address};this.$GLMethods.unstaking().send(s,function(s,n){n?t.$toast(t.$t("Alert.five")):t.$toast("error")})},getNumber:function(){var t=this;this.$GLMethods.getStakings().call({},function(s,n){console.log(n),n?t.number=n.length:t.$toast("error")})},toEnjoy:function(){var t=this;if(this.enjoyNumber<3e3)this.$toast(this.$t("Staking.min"));else{var s={from:this.address};this.$GLMethods.staking(1e6*this.enjoyNumber,this.parents).send(s,function(s,n){n?(t.$toast(t.$t("Alert.four")),t.getStatus(),t.getNumber()):t.$toast("error"),t.show=!1,t.enjoyNumber=""})}},getStatus:function(){var t=this;this.$GLMethods.getStakingStatus(this.address).call({},function(s,n){n&&(t.status=n),s&&t.$toast("error")})},getAccount:function(){var t=this;return i()(o.a.mark(function s(){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.getAccount();case 2:t.address=s.sent,t.getStatus(),t.getParent();case 5:case"end":return s.stop()}},s,t)}))()}},created:function(){this.getAccount(),this.getNumber()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"staking"},[e("div",{staticClass:"allFlex staking-nav Wcolor"},[e("span",{staticClass:"font-Eight"},[t._v(t._s(t.$t("Staking.title")))]),t._v(" "),e("span",{staticClass:"font-Eight"},[t._v(t._s(t.number))])]),t._v(" "),e("div",{staticClass:"staking-title font-Th titleFont"},[t._v("\n    "+t._s(t.$t("Staking.system"))+"\n  ")]),t._v(" "),e("ul",{staticClass:"border main-ipt"},[e("li",{staticClass:"font-Ty Wcolor"},[t._v(t._s(t.$t("Staking.title2")))]),t._v(" "),e("li",{staticClass:"font-Ty Wcolor main-ip-li"},[t._v(t._s(t.$t("Staking.text1")))]),t._v(" "),e("li",{staticClass:"font-Ty Wcolor main-ip-li"},[t._v(t._s(t.$t("Staking.text2")))]),t._v(" "),e("li",{staticClass:"font-Ty Wcolor main-ip-li"},[t._v(t._s(t.$t("Staking.text3")))])]),t._v(" "),t.status?e("div",{staticClass:"has-btn center Wcolor font-Ty",on:{click:t.outFn}},[t._v("\n    "+t._s(t.$t("Staking.btn2"))+"\n  ")]):e("div",{staticClass:"sub-btn center Wcolor font-Ty",on:{click:function(s){t.show=!0}}},[t._v("\n    "+t._s(t.$t("Staking.btn1"))+"\n  ")]),t._v(" "),t.show?e("div",{staticClass:"box",on:{click:function(s){s.stopPropagation(),t.show=!t.show}}},[e("ul",{staticClass:"dialog border positionAll allFlex column",on:{click:function(t){t.stopPropagation()}}},[e("li",{staticClass:"Wcolor font-Ty center"},[t._v(t._s(t.$t("Staking.box.title")))]),t._v(" "),e("li",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.enjoyNumber,expression:"enjoyNumber"}],staticClass:"border dialog-ipt Wcolor font-Six",attrs:{type:"text",placeholder:t.$t("Staking.box.placeholder")},domProps:{value:t.enjoyNumber},on:{input:function(s){s.target.composing||(t.enjoyNumber=s.target.value)}}})]),t._v(" "),e("li",{staticClass:"enjoy-btn center Wcolor font-Ty",on:{click:t.toEnjoy}},[t._v("\n        "+t._s(t.$t("Staking.box.btn"))+"\n      ")]),t._v(" "),e("li",{staticClass:"close-btn",on:{click:function(s){s.stopPropagation(),t.show=!t.show}}},[e("img",{staticClass:"close",attrs:{src:n("q6r7"),alt:""}})])])]):t._e()])},staticRenderFns:[]};var u=n("C7Lr")(c,l,!1,function(t){n("3jXG")},"data-v-7047a144",null);s.default=u.exports}});