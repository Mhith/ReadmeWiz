const introductionFields=[
    { label: "Hi 👋 I am:", name: "name", placeholder: "Name" },
    { label: "🔉 Subtitle:", name: "subtitle", placeholder: "Web Developer and Designer" },
    { label: "Description:", name: "description", placeholder: "Description" },
  ]
const aboutFields = [
    { label: "🌍 I'm based in:", name: "location", placeholder: "India" },
    { label: "🖥️ See my portfolio:", name: "portfolio", placeholder: "My Portfolio" },
    { label: "Portfolio link:", name: "portfolioLink", placeholder: "https://myportfolio.com" },
    { label: "🚀 I'm currently working on:", name: "currentlyWorking", placeholder: "E-commerce web-app" },
    { label: "Current project link:", name: "currentlyWorkingLink", placeholder: "https://projectlink.com" },
    { label: "✉️ How to reach me at:", name: "email", placeholder: "Email" },
    { label: "🧠 I'm currently learning:", name: "currentlyLearning", placeholder: "React" },
    { label: "👨‍💻 I'm looking to collaborate on:", name: "collaborateOn", placeholder: "interesting projects" },
    { label: "⚡ Fun Fact:", name: "funFact", placeholder: "I think I am funny" },
  ];

const coreSkillFields = [
    {name:"c",label:"C", icon:"c",iconStyle:"original",link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170"},
    {name:"cplus",label:"C++", icon:"cplusplus",iconStyle:"original",link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170"},
    {name:"csharp",label:"C#",icon:"csharp",iconStyle:"original",link: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
    {name:"go",label:"Go", icon:"go",iconStyle:"original",link: "https://golang.org/doc/"},
    {name:"java",label:"Java", icon:"java",iconStyle:"original",link: "https://docs.oracle.com/en/java/"},
    {name:"javascript",label:"Javascript", icon:"javascript",iconStyle:"original",link: "https://www.javascript.com/",},
    {name:"typescript",label:"Typescript", icon:"typescript",iconStyle:"original",link: "https://www.typescriptlang.org/"},
    {name:"php",label:"PHP", icon:"php",iconStyle:"original",link: "https://www.php.net/"},
    {name:"perl",label:"Perl", icon:"perl",iconStyle:"original",link: "https://www.perl.org/"},
    {name:"ruby",label:"Ruby", icon:"ruby",iconStyle:"original",link: "https://www.ruby-lang.org/en/"},
    {name:"scala",label:"Scala", icon:"scala",iconStyle:"original",link: "https://www.scala-lang.org/"},
    {name:"swift",label:"Swift", icon:"swift",iconStyle:"original",link: "https://developer.apple.com/swift/"},
    {name:"python",label:"Python", icon:"python",iconStyle:"original",link: "https://www.python.org/"},
    {name:"rust",label:"Rust", icon:"rust",iconStyle:"plain",link: "https://www.rust-lang.org/"},
    {name:"haskell",label:"Haskell", icon:"haskell",iconStyle:"original",link: "https://www.haskell.org/"},
    {name:"coffeescript",label:"Coffeescript", icon:"coffeescript",iconStyle:"original",link: "https://coffeescript.org/"},
    {name:"elixir",label:"Elixir", icon:"elixir",iconStyle:"original",link: "https://elixir-lang.org/"},
    {name:"rlang",label:"R", icon:"r",iconStyle:"original",link: "https://www.r-project.org/"},
    {name:"kotlin",label:"Kotlin", icon:"kotlin",iconStyle:"original",link: "https://kotlinlang.org/"},
    {name:"dart",label:"Dart", icon:"dart",iconStyle:"original",link: "https://dart.dev/"},
  ]
const frontendSkillFields = [
    { name: "html", label: "HTML", icon: "html5", iconStyle: "original", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "css", label: "CSS", icon: "css3", iconStyle: "original", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "sass", label: "Sass", icon: "sass", iconStyle: "original", link: "https://sass-lang.com/" },
    { name: "react", label: "React", icon: "react", iconStyle: "original", link: "https://reactjs.org/" },
    { name: "redux", label: "Redux", icon: "redux", iconStyle: "original", link: "https://redux.js.org/" },
    { name: "nextjs", label: "Next.js", icon: "nextjs", iconStyle: "original", link: "https://nextjs.org/" },
    { name: "vue", label: "Vue", icon: "vuejs", iconStyle: "original", link: "https://vuejs.org/" },
    { name: "angular", label: "Angular", icon: "angularjs", iconStyle: "original", link: "https://angular.io/" },
    { name: "tailwindcss", label: "Tailwind", icon: "tailwindcss", iconStyle: "plain", link: "https://tailwindcss.com/" },
    { name: "nuxtjs", label: "Nuxt.js", icon: "nuxtjs", iconStyle: "original", link: "https://nuxtjs.org/" },
    { name: "gatsby", label: "Gatsby", icon: "gatsby", iconStyle: "original", link: "https://www.gatsbyjs.com/" },
    { name: "svelte", label: "Svelte", icon: "svelte", iconStyle: "original", link: "https://svelte.dev/" },
    { name: "bootstrap", label: "Bootstrap", icon: "bootstrap", iconStyle: "original", link: "https://getbootstrap.com/" },
    { name: "materialui", label: "Material UI", icon: "materialui", iconStyle: "original", link: "https://material-ui.com/" },
    { name: "webpack", label: "Webpack", icon: "webpack", iconStyle: "original", link: "https://webpack.js.org/" },
    { name: "babel", label: "Babel", icon: "babel", iconStyle: "original", link: "https://babeljs.io/" }
  ];    
const backendSkillFields = [
    {name:"nodejs",label:"Node.js", icon:"nodejs",iconStyle:"original",link: "https://nodejs.org/en/"},
    {name:"express",label:"Express", icon:"express",iconStyle:"original",link: "https://expressjs.com/"},
    {name:"spring",label:"Spring", icon:"spring",iconStyle:"original",link: "https://spring.io/"},
    {name:"graphql",label:"GraphQL", icon:"graphql",iconStyle:"plain",link: "https://graphql.org/"},
    {name:"fastapi",label:"FastAPI", icon:"fastapi",iconStyle:"original",link: "https://fastapi.tiangolo.com/"},
    {name:"mongodb",label:"MongoDB", icon:"mongodb",iconStyle:"original",link: "https://www.mongodb.com/"},
    {name:"mysql",label:"MySQL", icon:"mysql",iconStyle:"original",link: "https://www.mysql.com/"},
    {name:"postgresql",label:"PostgreSQL", icon:"postgresql",iconStyle:"original",link: "https://www.postgresql.org/"},
    {name:"firebase",label:"Firebase", icon:"firebase",iconStyle:"plain",link: "https://firebase.google.com/"},
    {name:"oracle",label:"Oracle", icon:"oracle",iconStyle:"original",link: "https://www.oracle.com/"},
    {name:"redis",label:"Redis", icon:"redis",iconStyle:"original",link: "https://redis.io/"},
    {name:"sqlite",label:"SQLite", icon:"sqlite",iconStyle:"original",link: "https://www.sqlite.org/index.html"},
  ]
const frameworkSkillFields = [
    {name:"dotnet",label:".NET", icon:"dot-net",iconStyle:"original",link: "https://dotnet.microsoft.com/"},
    {name:"flask",label:"Flask", icon:"flask",iconStyle:"original",link: "https://flask.palletsprojects.com/"},
    {name:"django",label:"Django", icon:"django",iconStyle:"plain",link: "https://www.djangoproject.com/"},
    {name:"laravel",label:"Laravel", icon:"laravel",iconStyle:"plain",link: "https://laravel.com/"},
    {name:"rubyonrails",label:"Ruby on Rails", icon:"ruby",iconStyle:"original",link: "https://rubyonrails.org/"},
  ]
const otherSkillFields = [
    {name:"illustrator",label:"Adobe Illustrator", icon:"illustrator",iconStyle:"plain",link: "https://www.adobe.com/products/illustrator.html"},
    {name:"photoshop",label:"Adobe Photoshop", icon:"photoshop",iconStyle:"plain",link: "https://www.adobe.com/products/photoshop.html"},
    {name:"xd",label:"Adobe XD", icon:"xd",iconStyle:"plain",link: "https://www.adobe.com/products/xd.html"},
    {name:"figma",label:"Figma", icon:"figma",iconStyle:"original",link: "https://www.figma.com/"},
    {name:"sketch",label:"Sketch", icon:"sketch",iconStyle:"original",link: "https://www.sketch.com/"},
    {name:"aftereffects",label:"Adobe After Effects", icon:"aftereffects",iconStyle:"original",link: "https://www.adobe.com/products/aftereffects.html"},
    {name:"premierepro",label:"Adobe Premiere Pro", icon:"premierepro",iconStyle:"original",link: "https://www.adobe.com/products/premiere.html"},
    {name:"blender",label:"Blender", icon:"blender",iconStyle:"original",link: "https://www.blender.org/"},
    {name:"unity",label:"Unity", icon:"unity",iconStyle:"original",link: "https://unity.com/"},
    {name:"unrealengine",label:"Unreal Engine", icon:"unrealengine",iconStyle:"original",link: "https://www.unrealengine.com/en-US/"},
    {name:"git",label:"Git", icon:"git",iconStyle:"original",link: "https://git-scm.com/"},
    {name:"heroku",label:"Heroku", icon:"heroku",iconStyle:"original",link: "https://www.heroku.com/"},
    {name:"amazonwebservices",label:"Amazon Web Services", icon:"amazonwebservices",iconStyle:"original",link: "https://aws.amazon.com/"},
  ]

export {
  introductionFields,
  aboutFields,
  coreSkillFields,
  frontendSkillFields,
  backendSkillFields,
  frameworkSkillFields,
  otherSkillFields
};