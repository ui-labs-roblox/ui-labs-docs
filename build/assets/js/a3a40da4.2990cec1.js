"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||y[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4},a="Using Controls",l={unversionedId:"Controls/using",id:"Controls/using",title:"Using Controls",description:"When your story is mounter, UI-Labs creates the controls and calls the story function again to update your interface. Your controls are passed as the props in the story function where you can access them and use them to modify your UI.",source:"@site/docs/Controls/using.md",sourceDirName:"Controls",slug:"/Controls/using",permalink:"/ui-labs-docs/docs/Controls/using",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Controls/using.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Advanced Controls",permalink:"/ui-labs-docs/docs/Controls/advanced"}},c={},i=[{value:"Using Luau",id:"using-luau",level:2},{value:"Using Typescript",id:"using-typescript",level:2}],u={toc:i},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-controls"},"Using Controls"),(0,o.kt)("p",null,"When your story is mounter, UI-Labs creates the controls and calls the story function again to update your interface. Your controls are passed as the props in the story function where you can access them and use them to modify your UI."),(0,o.kt)("p",null,"Let's use our controls in a story"),(0,o.kt)("h2",{id:"using-luau"},"Using Luau"),(0,o.kt)("p",null,"In Luau, you can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"controls")," key directly inside your props table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'--HelloText.story.lua\nlocal Roact = require(ReplicatedStorage.Roact)\n\nlocal controls = {\n   Text = "Hello UI-LABS!",\n   Background = RGBA(Color3.new(1, 1, 1), 0),\n   ["Text Color"] = Color3.new(0, 0, 0),\n   ["Text Size"] = Number(20, NumberRange.new(5, 100), 1, true),\n}\n\nreturn {\n   summary = "This is a test story with <b>Rich text</b>.",\n   roact = Roact,\n   controls = controls,\n   story = function(props)\n      return Roact.createElement("TextLabel", {\n         Text = props.controls.Text,\n         TextColor3 = props.controls["Text Color"],\n         BackgroundColor3 = props.controls.Background.Color,\n         BackgroundTransparency = props.controls.Background.Transparency,\n         TextSize = props.controls["Text Size"],\n         Size = UDim2.fromOffset(300, 50),\n      })\n   end,\n}\n')),(0,o.kt)("h2",{id:"using-typescript"},"Using Typescript"),(0,o.kt)("p",null,"In Typescript, you also can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"controls")," key inside your props table, but we have a problem, you need to type it first."),(0,o.kt)("p",null,"UI-Labs provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"WithControls<C>")," type that you can use to type your story table, this type takes your controls type as a generic parameter, and it will type the props for you."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"InferProps<C>")," instead of you only want to type the props table, and ",(0,o.kt)("inlineCode",{parentName:"p"},"InferControls<C>")," if you only want to type the controls key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'//HelloText.story.ts\nimport Roact from "@rbxts/roact";\nimport { WithControls } from "@rbxts/ui-labs";\nimport { RGBA, Number } from "@rbxts/ui-labs/out/ControlsUtil";\n\nconst controls = {\n   Text: "Hello UI-LABS!",\n   Background: RGBA(new Color3(1, 1, 1), 0),\n   ["Text Color"]: new Color3(0, 0, 0),\n   ["Text Size"]: Number(20, new NumberRange(5, 100), 1, true),\n};\n\nconst Story: WithControls<typeof controls> = {\n   summary: "This is a test story with <b>Rich text</b>.",\n   roact: Roact,\n   controls,\n   story: (props) => {\n      // all controls are typed, no errors!\n      return (\n         Roact.createElement("TextLabel", {\n            Text: props.controls.Text,\n            TextColor3: props.controls["Text Color"],\n            BackgroundColor3: props.controls.Background.Color,\n            BackgroundTransparency: props.controls.Background.Transparency,\n            TextSize: props.controls["Text Size"],\n            Size: new UDim2(0, 300, 0, 50),\n         })\n      );\n   },\n};\n\nexport = Story;\n')))}y.isMDXComponent=!0}}]);