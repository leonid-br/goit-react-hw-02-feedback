(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,c){t.exports={item:"StatisticsList_item__3sysu",title:"StatisticsList_title__19Z0_",good:"StatisticsList_good__390gY",bad:"StatisticsList_bad__3iYmg"}},,,function(t,e,c){t.exports={btnList:"BtnList_btnList__jEhij",btn:"BtnList_btn__3yWgV"}},,,,,function(t,e,c){t.exports={section:"Section_section__ook7a"}},function(t,e,c){t.exports={notification:"Notification_notification__qOSYu"}},,,,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(2),s=c.n(n),i=c(5),a=c.n(i),r=(c(17),c(6)),o=c(7),l=c(8),j=c(12),b=c(11),d=c(9),u=c(0),h=function(t){var e=t.title,c=t.children;return Object(u.jsxs)("section",{className:d.section,children:[Object(u.jsx)("h2",{children:e}),c]})},O=c(4),x=function(t){var e=t.keysArr,c=t.clickOnBtn;return Object(u.jsx)("div",{className:O.btnList,children:e.map((function(t){return Object(u.jsx)("button",{type:"button",onClick:c,className:O.btn,children:t},t.toString())}))})},f=c(1),p=function(t){var e=t.statTarget,c=t.keysArr,n=t.totalReviews,s=t.positive;return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[c.map((function(t){return Object(u.jsxs)("li",{className:f.item,children:[Object(u.jsxs)("span",{className:f.title,children:[t,":"]}),Object(u.jsx)("span",{children:e[t]})]},t)})),Object(u.jsxs)("li",{className:f.item,children:[Object(u.jsx)("span",{className:f.title,children:"Total:"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("li",{className:f.item,children:[Object(u.jsx)("span",{className:f.title,children:"Positive percentage:"}),s>50?Object(u.jsxs)("span",{className:f.good,children:[s,"%"]}):Object(u.jsxs)("span",{className:f.bad,children:[s,"%"]})]})]})})},m=c(10),_=function(t){var e=t.message;return Object(u.jsx)("p",{className:m.notification,children:e})},k=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.clickOnBtn=function(e){var c=e.target.innerText;t.setState(Object(r.a)({},c,t.state[c]+1))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(l.a)(c,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(x,{keysArr:t,clickOnBtn:this.clickOnBtn})}),Object(u.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()>0?Object(u.jsx)(p,{keysArr:t,statTarget:this.state,totalReviews:this.countTotalFeedback(),positive:this.countPositiveFeedbackPercentage()}):Object(u.jsx)(_,{message:"No feedback given"})})]})}}]),c}(n.Component);a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3411c9c1.chunk.js.map