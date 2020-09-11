(this["webpackJsonpis-it-open"]=this["webpackJsonpis-it-open"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),c=(n(24),n(25),n(26),n(2)),s=n(3),l=n(5),u=n(4),d=n(18),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.time,a=function(e){var t=e/60/60,n=(e-60*t*60)/60,a=t>12?12:0;return"".concat(t.toFixed(0)-a,":").concat(0==n.toFixed(0)?"00":n.toFixed(0)," ").concat(12==a?"pm":"am")};return r.a.createElement("div",{className:"card-item"},r.a.createElement("div",{className:"card-title"},t),r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",null,"Schedule"),n.map((function(e,t){return r.a.createElement("p",null,e.day," | ",a(e.start)," - ",a(e.end))}))),r.a.createElement("style",null,"\n                        .card-item:hover {\n                            background: #e6e6e6;\n                        }\n                        .card-item {\n                            margin: 2em 2em 0 0;\n                            width: 200px;\n                            padding: 1em;\n                            border: 1px solid #999999;\n                            border-radius: 10px;\n                            min-height: 250px;\n                        }\n                        .card-title {\n                            width: 100%;\n                            font-weight: bold;\n                            font-size: 1.3em;\n                            color: #02633c;\n                        }\n                        .card-body {\n                            margin-top: 1em;\n                            width: 100%;\n                            font-size: 0.8em;\n                        }\n                    "))}}]),n}(a.Component),p=n(6),f=n.n(p);f.a.create({baseURL:"https://be-todo.herokuapp.com/api/"});var h="https://be-todo.herokuapp.com/api/",v=function(e,t){return f()({method:"GET",headers:{Accept:"application/json"},url:"".concat(h,"restaurant?limit=").concat(e,"&offset=").concat(t)})},b=n(7),y=n.n(b),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSearch=function(e){var t=e.target.value;console.log(t),""!=t?function(e){return f()({method:"GET",headers:{Accept:"application/json"},url:"".concat(h,"restaurant/name/").concat(e,"?limit=5")})}(t).then((function(e){a.setState({restaurants:e.data.data}),e.data.data.length?a.setState({_isBusy:!1,_isEmpty:!1}):a.setState({_isBusy:!0,_isEmpty:!0})})):a.getRestaurants(0)},a.onTimeChange=function(e){a.setState({_isBusy:!0});var t=e.target.value.match(/(\d+):(\d+)/),n=60*Number(t[1])*60+60*Number(t[2]);a.setState({seconds:n})},a.onDayChange=function(e){a.setState({_isBusy:!0});var t=e.target.value;Object(d.a)("day"),t=t.substring(0,3),a.setState({day:t})},a.filterBy=function(){var e=a.state;(function(e,t){return f()({method:"GET",headers:{Accept:"application/json"},url:"".concat(h,"restaurant/time/").concat(e,"?day=").concat(t)})})(e.seconds,e.day).then((function(e){a.setState({restaurants:e.data.data,_isBusy:!1})}))},a.state={restaurants:[],offset:0,count:0,_isBusy:!1,_isEmpty:!1,seconds:0,day:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;v(12,0).then((function(t){e.setState({restaurants:t.data.data,count:t.data.count})})).catch((function(e){return console.log(e)}))}},{key:"getRestaurants",value:function(e){var t=this;this.setState({_isBusy:!0}),v(12,e).then((function(n){t.setState({restaurants:n.data.data,offset:e,_isBusy:!1})})).catch((function(e){return console.log(e)}))}},{key:"handleNext",value:function(){var e=this.state,t=(e.restaurant,e.offset);e.count;t+=5,this.getRestaurants(t)}},{key:"handlePrev",value:function(e){if(0!=e){var t=this.state,n=(t.restaurant,t.offset);n-=5,this.getRestaurants(n)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.restaurants,a=t.offset,i=t._isBusy,o=t._isEmpty;return r.a.createElement("div",{className:"list-of-restaurant"},r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,"What's open on:")),r.a.createElement("div",{className:"search"},r.a.createElement("i",{className:"fa fa-search search-icon"}),r.a.createElement("div",{style:{width:"90%"}},r.a.createElement("input",{type:"text",placeholder:"search here...",onChange:function(t){return e.handleSearch(t)}}))),r.a.createElement("div",{className:"filters"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("input",{type:"time",className:"filter",required:!0,onChange:function(t){return e.onTimeChange(t)}})),r.a.createElement("div",null,r.a.createElement("select",{className:"filter"},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Day"),r.a.createElement("option",{value:"Mon"},"Monday"),r.a.createElement("option",{value:"Tue"},"Tuesday"),r.a.createElement("option",{value:"Wed"},"Wednesday"),r.a.createElement("option",{value:"Thu"},"Thursday"),r.a.createElement("option",{value:"Fri"},"Friday"),r.a.createElement("option",{value:"Sat"},"Saturday"),r.a.createElement("option",{value:"Sun"},"Sunday"))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"filter btn-filter"},"Filter"))),r.a.createElement("button",{className:"btn-reset",onClick:function(){return e.getRestaurants(0)}},"Reset")),r.a.createElement("div",{className:"lists"},o?r.a.createElement("h3",null,"No Search results"):n.length?n.map((function(e,t){return r.a.createElement(m,{name:e.name,time:e.time})})):r.a.createElement("h3",null,"Loading...")),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:y()({btn:a>0},{disabled:i},{disabled:0==a}),onClick:function(){return e.handlePrev()}},"Prev"),r.a.createElement("div",{className:y()({disabled:i},{btn:!i}),onClick:function(){return e.handleNext()}},"Next")),r.a.createElement("style",null,"  .filter {\n                            padding: 0.5em;\n                        }\n                        .btn-filter {\n                            border: none;\n                            padding: 1em 1.5em;\n                            cursor: pointer;\n                        }\n                        .btn-filter:hover {\n                            background: #e6e6e6;\n                        }\n                        .btn-reset {\n                            background: yellow;\n                            border: none;\n                            padding: 1em 1.5em;\n                            cursor: pointer;\n                        }\n                        .btn-reset:hover {\n                            background: #e6e6e6;\n                        }\n                        .filters {\n                            display: flex !important;\n                            width: 50%;\n                            justify-content: flex-start;\n                            flex-wrap: wrap;\n                            margin-left: 4em;\n                        }\n                        .filters div {\n                            margin-right: 2em;\n                        }\n                        .buttons {\n                            margin-top: 1em;\n                            display: flex !important;\n                            justify-content: flex-end;\n                            align-items: center;\n                        }\n                        .btn {\n                            padding: 1em;\n                            border: 1px solid #e6e6e6;\n                            border-radius: 5px;\n                            cursor: pointer;\n                        }\n                        .disabled {\n                            background: #d6d6d6;\n                            color: #999999;\n                            padding: 1em;\n                            border: 1px solid #e6e6e6;\n                            border-radius: 5px;\n                            cursor: pointer;\n                        }\n                        .disabled:hover {\n                            background: #999999; !important\n                            color: #d6d6d6 !important;\n                        }\n                        .btn:hover {\n                            background: #428eff;\n                            color: #fff;\n                        }\n                        .lists {\n                            display: flex !important;\n                            margin-top: 2em;\n                            justify-content: center;\n                            flex-wrap: wrap;\n                        }\n                        .list-of-restaurant {\n                            text-align: left;\n                            width: 100%;\n                            display: block;\n                        }\n                        .list-of-restaurant div {\n                            display: inline-block;\n                        }\n                        .title {\n                            width: 80%;\n                        }\n                        .search {\n                            display: flex;\n                            width: 20%;\n                        }\n                        .search-icon {\n                            padding-right: 0.5em;\n                            color: #999999;\n                        }\n                    "))}}]),n}(a.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Is it Open?")),r.a.createElement("div",{className:"container"},r.a.createElement(g,null)),r.a.createElement("style",null,"\n                        .header {\n                            padding: 2em;\n                            border-bottom: 1px solid #d5d5d5;\n                            background: #fff;\n                        }\n                        .container {\n                            padding: 2em;\n                            display: flex;\n                            justify-content: space-between;\n                        }\n                    "))}}]),n}(a.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0dd10027.chunk.js.map