(this.webpackJsonplongjoel=this.webpackJsonplongjoel||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),o=a(3),i=a.n(o),c=function(e){var t=e.id,a=e.title,r=e.caption,s=e.children;return a||r?Object(n.jsx)("div",{className:"container m-3 p-3 bg-light rounded",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{class:"anchor text-dark",id:t,href:"#".concat(t),children:a})}),Object(n.jsx)("h5",{children:Object(n.jsx)("em",{children:r})})]})}),Object(n.jsx)("div",{className:"col-md-9 col-sm-12",children:s})]})}):Object(n.jsx)("div",{className:"container m-3 p-3 bg-light rounded",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:s})})})},l=a(4),d=function(e){var t=e.tool;return Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{style:{marginLeft:"24px",whiteSpace:"nowrap"},children:Object(n.jsx)("em",{children:t})}),Object(n.jsx)("wbr",{})]})},m=function(){return Object(n.jsx)(c,{id:"workHistory",title:"Work History",caption:"I have a passion for learning and growing. Here are some of the places that I have been able to do that.",children:l.map((function(e){return Object(n.jsxs)("div",{className:"card card p-3 m-3",id:e.name,children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",children:e.name}),Object(n.jsx)("h6",{className:"card-subtitle text-secondary",children:Object(n.jsxs)("em",{children:[e.dateStart," to ",e.dateEnd]})}),Object(n.jsx)("p",{children:e.summary}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4 col-sm-12",children:[Object(n.jsx)("div",{children:"Roles:"}),Object(n.jsx)("ul",{children:e.roles.map((function(e){return Object(n.jsx)("li",{children:e})}))}),Object(n.jsx)("div",{children:"Teams:"}),Object(n.jsx)("ul",{children:e.teams.map((function(e){return Object(n.jsx)("li",{children:e})}))})]}),Object(n.jsxs)("div",{className:"col-md-8 col-sm-12",children:[Object(n.jsx)("div",{children:"Tools:"}),e.tools.map((function(e){return Object(n.jsx)(d,{tool:e})}))]})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})}))})},j=a(5),h=a.n(j),u=function(e){var t=e.text;return Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:h.a.parse(t)}})},p=function(){return Object(n.jsx)(c,{children:Object(n.jsx)(u,{text:"Hello! My name is Joel Longanecker. Thank you for visiting my Github page. \nI made this page to serve several different purposes.\n\n* This is my living resume! It's way easier to show people you are a web developer than simply telling them.\n* It's a great way to stay on top of the latest and greatest in web development.\n* It's hard to have a portfolio page when all your projects are internal line of business apps.\n* This will also sort of serve as my bespoke little mini blog.\n\nI have a number of cool GitHub projects too. Check them out!"})})},b=a(6),g=function(){return Object(n.jsx)(c,{id:"projects",title:"My Projects",caption:"I really enjoy the unique challenges provided by game development and game engine design, as well as writing windows native apps.",children:b.map((function(e){return Object(n.jsx)("div",{className:"card p-3 m-3",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",children:e.name}),Object(n.jsx)("h6",{className:"card-subtitle",children:Object(n.jsx)("em",{className:"text-secondary",children:e.status})}),Object(n.jsx)("p",{className:"card-text",children:e.summary}),Object(n.jsx)("a",{className:"card-link",href:e.url,children:e.url})]})})}))})},x=function(){return Object(n.jsx)("span",{style:{marginLeft:"16px",marginRight:"4px"},children:Object(n.jsx)("h4",{children:"|"})})},f=function(e){var t=e.children,a=e.location,r=void 0===a?"":a;return Object(n.jsx)("span",{class:"navbar-text navbar-item",children:Object(n.jsx)("a",{href:"#".concat(r),children:t})})},O=function(){return Object(n.jsxs)("div",{class:"navbar navbar-expand navbar-light bg-light sticky-top p-3",children:[Object(n.jsx)(f,{children:Object(n.jsx)("b",{children:"Joel Longanecker"})})," ",Object(n.jsx)(x,{}),Object(n.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsx)(f,{location:"workHistory",children:"Work History"})," ",Object(n.jsx)(x,{}),Object(n.jsx)(f,{location:"projects",children:"Projects"})," ",Object(n.jsx)(x,{}),Object(n.jsx)(f,{location:"contact",children:"Contact"})," ",Object(n.jsx)(x,{}),Object(n.jsx)(f,{location:"education",children:"Education"})]})]})};var v=function(){return Object(n.jsxs)("div",{className:"App bg-dark",style:{height:"100%"},children:[Object(n.jsx)(O,{}),Object(n.jsx)(p,{}),Object(n.jsx)(m,{}),Object(n.jsx)(g,{}),Object(n.jsx)(c,{id:"contact",title:"Contact",children:Object(n.jsx)("div",{className:"card p-3 m-3",children:Object(n.jsxs)("p",{children:["The best way to reach me is to email me at ",Object(n.jsx)("a",{href:"mailto:joel.longanecker@gmail.com",children:"Joel.Longanecker@gmail.com"}),". "]})})}),Object(n.jsx)(c,{id:"education",title:"Education",children:Object(n.jsx)("div",{className:"card p-3 m-3",children:Object(n.jsx)("p",{children:"I graduated from North Dakota State University in the spring of 2010 with a Bachelors of Science degree in Computer Science."})})})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),y()},4:function(e){e.exports=JSON.parse('[{"name":"CH Robinson","location":"Eden Prairie, MN","dateStart":"October 2015","dateEnd":"current","summary":"As part of the tools and patterns team, developed tools and components used internally. This includes custom react components. Full stack developer working in the react typescript space and .net + service stack microservices across all areas of the company as part of the IT Rotational Development team. Peer and new developer mentor as part of the Hatchry internal Robinson bootcamp.","roles":["Software Engineer II","Software Engineer III"],"teams":["IT Rotational Developers","Tools & Patterns","Hatchry support team"],"tools":["Windows Forms","WPF",".net Framework",".net Core","Node","Angular JS","React","Service Stack","ASP.net MVC / API","Jest","Tape","Puppeteer","Express","SQL","Git","Github","TFS","Docker"]},{"name":"Emerson Processing (MCS)","location":"Chanhassen, MN","dateStart":"December 2013","dateEnd":"October 2015","summary":"Using .NET, SQL, and GPIB to write nuclear qualified testing modules for Global Manufacturing System to test components for commercial grade dedication and measure time response for nuclear qualified modules and transmitters. Worked closely with GMS team and High Integrity team using TFS. Used red gate tools to design and manage database tables and data. Using SQL 2012 and Report Builder 3 to generate and present discrepancy reports used by Nuclear team in tracking defective materials and generate Bill of Materials for transmitters based on serial number.","roles":["Programmer Analyst II"],"teams":["Nuclear"],"tools":["NI Test Stand","GPIB",".net Platform","VBA office scripting","Visual Basic","SQL","LabView"]},{"name":"Univita / LTCG (MCS)","location":"Eden Prairie, MN","dateStart":"March 2012","dateEnd":"December 2013","summary":"Used .NET, C#, SQL, Entity Framework, WCF and Enterprise Library to develop and maintain a growing CRM application used by nurses and managers internally across the country to manage cases, paperwork, and calls. Involves document processing, form management and fax processing. Our team of 4+ used Jira to manage our 6 week development cycle and TFS to manage source control. Integrated several new significant business clients and workflows to application.","roles":["Programmer Analyst II"],"teams":["Software"],"tools":[".Net Platform","C#","VB .Net","Entity Framework","WCF","SQL","Enterprise Library","Jira"]},{"name":"Emerson Processing (MCS)","location":"Chanhassen, MN","dateStart":"October 2010","dateEnd":"March 2012","summary":"Using .NET, C#, SQL, Entity Framework, WCF, Enterprise Library, Log4Net, MSMQueue and Test Stand to develop a test environment as part of larger software suite to test transmitter products in a variety of scenarios. Tests were constructed with Test Stand scripts on one or more circuits. Application deployed to 3 different labs in 3 countries.","roles":["Programmer Analyst"],"teams":["Testing"],"tools":["NI Test Stand","GPIB",".net Platform","VBA office scripting","Visual Basic","SQL","LabView"]},{"name":"Multiband","location":"Fargo, ND","dateStart":"November 2009","dateEnd":"July 2010","summary":"Developed a Handheld tool using .NET compact framework, SQL and for use by installers to help them manage inventory, make additional sales, take digital signatures. Used a method to store data locally on device until in range of a cell phone antenna to transmit data. Deployed to over 50K installers. Call center software and sales lead management utility that integrated with other internal  products, replacing 5 or 6 Excel spreadsheets used to track calls and leads and older outdated software.","roles":["Programmer Analyst"],"teams":["Software"],"tools":[".Net Platform","SQL","VB .Net"]},{"name":"Upper Great Plains Transportation Institute","location":"Fargo, ND","dateStart":"2008","dateEnd":"2009","summary":"","roles":["Intern"],"teams":["Department of Transportation Support Center"],"tools":[".Net Platform","SQL","VB .Net"]}]')},6:function(e){e.exports=JSON.parse('[{"name":"Bad-Bits","status":"Active","url":"https://github.com/longjoel/bad-bits","summary":"A 2d/3d .NET core and JavaScript powered retro game engine that leverages MonoGame for rendering, and is compatible with Typescript and CommonJS."},{"name":"Age of Chaos","status":"Inactive","url":"https://github.com/longjoel/AgeOfChaos","summary":"A work in progress game for MS Dos. It uses docker to execute the compiler, and python to manage the build."},{"name":"Mame Miner","status":"Complete","url":"https://github.com/longjoel/MameMiner","summary":"A tool to extract unmerged roms from a zip file to be used with the Multiple Arcade Machine Emulator."},{"name":"MicroFE","status":"Complete","url":"https://github.com/longjoel/MicroFE","summary":"MicroFE is a hyper-minimalist emulator frontend written in .NET with a single file configuration scheme."}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.2adcf75e.chunk.js.map