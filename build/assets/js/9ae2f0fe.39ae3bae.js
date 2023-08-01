"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),u=n(6550),s=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==u&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},7969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={sidebar_position:3},s="Function Stories",i={unversionedId:"Stories/function",id:"Stories/function",title:"Function Stories",description:"These stories are the simplest and they are used by hoarcekat.",source:"@site/docs/Stories/function.mdx",sourceDirName:"Stories",slug:"/Stories/function",permalink:"/ui-labs-docs/docs/Stories/function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Stories/function.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating Stories",permalink:"/ui-labs-docs/docs/Stories/"},next:{title:"UI-Labs Stories",permalink:"/ui-labs-docs/docs/Stories/uilabs"}},c={},p=[{value:"Using Roact",id:"using-roact",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-stories"},"Function Stories"),(0,a.kt)("p",null,"These stories are the simplest and they are used by ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.roblox.com/library/4621580428/Hoarcekat"},"hoarcekat")),"."),(0,a.kt)("p",null,"These are functions returned by the story module that UI-Labs executes passing the ",(0,a.kt)("strong",{parentName:"p"},"Frame")," where they need to be displayed, expecting them to mount the User Interface."),(0,a.kt)("p",null,"Once executed, these functions must return another function that cleans up the UI, usually calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Roact.unmount()")),(0,a.kt)("h3",{id:"using-roact"},"Using Roact"),(0,a.kt)("p",null,"This is an example of how a function Story can be written with ",(0,a.kt)("strong",{parentName:"p"},"Roact")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"lua",label:"Luau",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'   --HelloText.story.lua\n   local ReplicatedStorage = game:GetService("ReplicatedStorage")\n   local Roact = require(ReplicatedStorage.Roact)\n\n   return function (target: Frame)\n      local element = Roact.createElement("TextLabel", {\n         Text = "Hello UI-LABS!",\n         TextColor3 = Color3.new(1,1,1),\n         BackgroundColor3 = Color3.new(0.3, 0.3, 0.3),\n         TextSize = 20,\n         Size = UDim2.fromOffset(300, 50),\n      })\n      local handle = Roact.mount(element, target) --We mount inside target\n\n      --We need to return another function to unmount the handle\n      return function()\n         Roact.unmount(handle)\n      end\n   end\n'))),(0,a.kt)(l.Z,{value:"ts",label:"Roblox-TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//HelloText.story.ts\nimport Roact from "@rbxts/roact";\n\nexport = (target: Frame) => {\n  const element = Roact.createElement("TextLabel", {\n    Text: "Hello UI-LABS!",\n    TextColor3: new Color3(1, 1, 1),\n    BackgroundColor3: new Color3(0.3, 0.3, 0.3),\n    TextSize: 20,\n    Size: UDim2.fromOffset(300, 50),\n  });\n  const handle = Roact.mount(element, target); //We mount inside target\n\n  //We need to return another function to unmount the handle\n  return () => {\n    Roact.unmount(handle);\n  };\n};\n')))),(0,a.kt)("admonition",{title:"Fusion Support",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"UI-Labs currently does not support ",(0,a.kt)("a",{parentName:"p",href:"https://elttob.uk/Fusion/0.2/"},"Fusion")," natively, therefore, this is the only way you can visualize a Fusion story.\nHowever, native support for Fusion is planned in further updates")),(0,a.kt)("admonition",{title:"Story Erroring",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The clean up function will not be executed if the returned function errors. If this happens, a ",(0,a.kt)("strong",{parentName:"p"},"Studio restart")," may be needed to avoid memory leaks and non-destroyed Instances")))}f.isMDXComponent=!0}}]);