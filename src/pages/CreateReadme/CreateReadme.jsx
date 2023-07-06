import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import "../../styles/CreateReadme.css";
import { themes } from "./Themes";
import { introductionFields, aboutFields, 
  coreSkillFields, frontendSkillFields, backendSkillFields, frameworkSkillFields, otherSkillFields } from "./Fields";

export default function CreateReadme() {
  const [activeSection, setActiveSection] = useState('preview');
  const [introductionData, setIntroductionData] = useState({});
  const [aboutData, setAboutData] = useState({})
    const [badgeStyle, setBadgeStyle] = useState("badge");  
    const [social, setSocial] = useState({});
    const [skills, setSkills] = useState({});
    const isAnySkillTrue = Object.values(skills).some((skill) => skill);
    const [githubStatsTheme, setGithubStatsTheme] = useState("tokyonight");
    const [markdowntext, setMarkdownText] = useState("")
    
    const socialMediaPlatforms = [
      { name: "Github", icon: "github", key: "githubUsername", color: "100000", link: `https://github.com/${social.githubUsername}` },
      { name: "Twitter", icon: "twitter", key: "twitterUsername", color: "1DA1F2", link: `https://twitter.com/${social.twitterUsername}` },
      { name: "Codepen", icon: "codepen", key: "codepenUsername", color: "000000", link: `https://codepen.io/${social.codepenUsername}` },
      { name: "Stackoverflow", icon: "stackoverflow", key: "stackoverflowUsername", color: "FE7A16", link: `https://stackoverflow.com/users/${social.stackoverflowUsername}` },
      { name: "Codesandbox", icon: "codesandbox", key: "codesandboxUsername", color: "000000", link: `https://codesandbox.io/${social.codesandboxUsername}` },
      { name: "Kaggle", icon: "kaggle", key: "kaggleUsername", color: "20BEFF", link: `https://kaggle.com/${social.kaggleUsername}` },
      { name: "Linkedin", icon: "linkedin", key: "linkedinUsername", color: "0077B5", link: `https://www.linkedin.com/in/${social.linkedinUsername}/` },
      { name: "Instagram", icon: "instagram", key: "instagramUsername", color: "E4405F", link: `https://instagram.com/${social.instagramUsername}` },
      { name: "Dribbble", icon: "dribbble", key: "dribbbleUsername", color: "EA4C89", link: `https://dribbble.com/${social.dribbbleUsername}` },
      { name: "Behance", icon: "behance", key: "behanceUsername", color: "1769FF", link: `https://behance.net/${social.behanceUsername}` },
      { name: "Medium", icon: "medium", key: "mediumUsername", color: "12100E", link: `https://medium.com/${social.mediumUsername}` },
      { name: "LeetCode", icon: "leetcode", key: "leetcodeUsername", color: "FFA116", link: `https://leetcode.com/${social.leetcodeUsername}/` },
      { name: "Codechef", icon: "codechef", key: "codechefUsername", color: "B92B27", link: `https://www.codechef.com/users/${social.codechefUsername}` },
      { name: "Dev.to", icon: "devdotto", key: "devdottoUsername", color: "0A0A0A", link: `https://dev.to/${social.devdottoUsername}` },
      { name: "Youtube", icon: "youtube", key: "youtubeUsername", color: "FF0000", link: `https://youtube.com/@${social.youtubeUsername}` },
      { name: "Hackerrank", icon: "hackerrank", key: "hackerrankUsername", color: "2EC866", link: `https://www.hackerrank.com/${social.hackerrankUsername}` },
      { name: "Codeforces", icon: "codeforces", key: "codeforcesUsername", color: "445f9d", link: `https://codeforces.com/profile/${social.codeforcesUsername}` },
      { name: "Hackerearth", icon: "hackerearth", key: "hackerearthUsername", color: "2C3454", link: `https://www.hackerearth.com/${social.hackerearthUsername}` },
      { name: "GeeksForGeeks", icon: "geeksforgeeks", key: "geeksforgeeksUsername", color: "298D46", link: `https://auth.geeksforgeeks.org/user/${social.geeksforgeeksUsername}` },
    ];
    const colors = themes[githubStatsTheme];
    const [githubStatsCard, setGithubStatsCard] = useState(true);
    const [githubLanguagesCard, setGithubLanguagesCard] = useState(true);
    const [githubCommitCard, setGithubCommitCard] = useState(true);
    const [githubGraphCard, setGithubGraphCard] = useState(false);
    const [buymeacoffeeUsername, setBuymeacoffeeUsername] = useState("");
    const renderIntroductionFields = () => {
      return introductionFields.map((field) => (
        <>
        <div className="input-title" key={field.name}>
          {field.label}
          </div>
          <input
            name={field.name}
            placeholder={field.placeholder}
            value={aboutData[field.name]}
            onChange={handleInputChange}
          />
        </>
      ));
    };
    const renderAboutFields = () => {
      return aboutFields.map((field) => (
        <>
        <div className="input-title" key={field.name}>
          {field.label}
          </div>
          <input
            name={field.name}
            placeholder={field.placeholder}
            value={aboutData[field.name]}
            onChange={handleAboutInputChange}
          />
        </>
      ));
    };

    const renderSocialInputs = () => {
      return socialMediaPlatforms.map((platform) => (
        <div className="input-title social-desc" key={platform.key}>
          <img className="social-img" src={`https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/${platform.icon}.svg`} alt={platform.name} />
          {`${platform.name}: `}
          <input
            placeholder="username"
            name={platform.key}
            value={social[platform.key]}
            onChange={(e) => handleSocialInputChange(e, platform.key)}
          />
        </div>
      ));
    };
    const renderCoreSkillsFields = () => {
      return coreSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderFrontendSkillsFields = () => {
      return frontendSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderBackendSkillsFields = () => {
      return backendSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderFrameworkSkillsFields = () => {
      return frameworkSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderOtherSkillsFields = () => {
      return otherSkillFields.map((field) => (
        <>
        <label className="skill-button">
        <input type="checkbox" name={field.name} onChange={(e)=>setSkills({...skills,[field.name]:e.target.checked})} />
        <img title={`${field.label}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${field.icon}/${field.icon}-${field.iconStyle}.svg`} alt={`${field.name}`} />
        </label>
        </>
    ))}
    const renderGithubStatsSelect = () => {
      return (
        <select name="Style" onChange={(e) => setGithubStatsTheme(e.target.value)} className="badge-select">
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>
      );
    };
    const handlePreviewClick = () => {
      setActiveSection('preview');
    };
    const handleMarkdownClick = () => {
      setActiveSection('markdown');
    };
    const handleCopyTextClick = () => {
      navigator.clipboard.writeText(markdowntext);
      alert('Markdown text copied!');
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setIntroductionData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleAboutInputChange = (e) => {
      const { name, value } = e.target;
      setAboutData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSocialInputChange = (event) => {
      const { name, value } = event.target;
      setSocial((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    
    useEffect(()=>{
      const updatedMarkdown = `${introductionData.name ? `# Hi 👋 I am ${introductionData.name}\n` : ""}${introductionData.subtitle ? `## ${introductionData.subtitle}\n`: ""}${introductionData.description ? `${introductionData.description}\n`: ""}
${aboutData.location ? `* 🌍  I'm based in ${aboutData.location}\n`:""}${aboutData.portfolio && aboutData.portfolioLink ? `* 🖥️  See my portfolio at [${aboutData.portfolio}](${aboutData.portfolioLink})\n`:""}${aboutData.currentlyWorking && aboutData.currentlyWorkingLink ? `* 👨‍💻  I'm currently working on [${aboutData.currentlyWorking}](${aboutData.currentlyWorkingLink})\n`:""}${aboutData.email ? `* ✉️  You can reach me at [${aboutData.email}](mailto:${aboutData.email})\n`:""}${aboutData.currentlyLearning ? `* 🧠  I'm currently learning ${aboutData.currentlyLearning}\n`:""}${aboutData.collaborateOn ? `* 🤝  I'm open to collaborating on ${aboutData.collaborateOn}\n`:""}${aboutData.funFact ? `* ⚡ Fun fact: ${aboutData.funFact}`:""}

${socialMediaPlatforms.map((platform) =>
  social[platform.key] ?
    `[![${platform.name} Follow](https://img.shields.io/badge/${platform.name}-${platform.color}?style=${badgeStyle}&logo=${platform.icon}&logoColor=white)](${platform.link})\n` :
    ""
).join("")}

${isAnySkillTrue ? `<h3 align="left">Skills:</h3>\n<p align="left">`:""}

${coreSkillFields.map((skill) => skills[skill.name] ? `<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}${frontendSkillFields.map((skill) => skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a> \n` :"").join("")}${backendSkillFields.map((skill) =>skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a> \n` :"").join("")}${frameworkSkillFields.map((skill) =>skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}${otherSkillFields.map((skill) => skills[skill.name] ?`<a href="${skill.link}" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-${skill.iconStyle}.svg" width="36" height="36" alt="${skill.name.toUpperCase()}" /></a>\n` :"").join("")}
${isAnySkillTrue ? `</p>`:""}

${social.githubUsername?`
### Badges

<h4>My GitHub Stats</h4>
${githubStatsCard ?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-stats.vercel.app/api?username=${social.githubUsername}&show_icons=true&title_color=${colors.title_color}&icon_color=${colors.icon_color}&text_color=${colors.text_color}&bg_color=${colors.bg_color}&hide_border=true" alt="${social.githubUsername}'s GitHub stats" /></a>`:""}
${githubLanguagesCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${social.githubUsername}&langs_count=3&title_color=${colors.title_color}&icon_color=${colors.icon_color}&text_color=${colors.text_color}&bg_color=${colors.bg_color}&hide_border=true" alt="Top Languages"/></a>`:""}
${githubCommitCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${social.githubUsername}&stroke=${colors.title_color}&background=${colors.bg_color}&ring=${colors.title_color}&fire=${colors.icon_color}&currStreakNum=${colors.icon_color}&currStreakLabel=${colors.icon_color}&sideNums=${colors.title_color}&sideLabels=${colors.title_color}&dates=${colors.text_color}&hide_border=true" alt="Github streak stats"/></a>`:""}
${githubGraphCard?`<a href="http://www.github.com/${social.githubUsername}"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${social.githubUsername}&bg_color=${colors.bg_color}&color=${colors.title_color}&line=${colors.icon_color}&point=${colors.title_color}&area_color=${colors.bg_color}&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph" alt="GitHub Commits Graph" /></a>`:""}
`:""}
${buymeacoffeeUsername?`<a href="https://www.buymeacoffee.com/${buymeacoffeeUsername}"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>`:""}
`
      setMarkdownText(updatedMarkdown);
    }, [introductionData, aboutData, social, badgeStyle,skills,githubStatsTheme,colors,githubStatsCard,githubLanguagesCard,githubCommitCard,githubGraphCard,buymeacoffeeUsername]);
    const navigate = useNavigate();
    return(
    <>
      <header className="readme-header">
          <h2 onClick={()=>navigate("/")}>ReadmeWiz</h2>
          <div>
              <a href="" onClick={()=>navigate("/")}>Home</a>
              <a href="https://github.com/Mhith/ReadmeWiz" target="_blank">Github</a>
          </div>
      </header> 
      <div className="wrapper">
        <div  className="input-container">
          <div className="section-title">Enter your details here:</div>
          <div className="section-title">Introduction</div>
          {renderIntroductionFields()}
          <div className="section-title">About Me</div>
          {renderAboutFields()}
          <div className="section-title">Socials
          </div>
          <div className="input-title">Badge Style:<select name="Style" onChange={(e)=> setBadgeStyle(e.target.value)} className="badge-select">
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
              <option value="for-the-badge">For the Badge</option>
            </select>
          </div>
          <div className="input-title"></div>
          <div className="socials">
            {renderSocialInputs()}
          </div>  
          <div className="section-title">Skills</div>
          <h4>Languages</h4>
          <div className="skill-wrapper">
            {renderCoreSkillsFields()}
          </div>  
          <h4>Frontend</h4>
          <div className="skill-wrapper">
            {renderFrontendSkillsFields()}
          </div>
          <h4>Backend & Database</h4>
          <div className="skill-wrapper">
            {renderBackendSkillsFields()}
          </div>
          <h4>Frameworks</h4>
          <div className="skill-wrapper">
            {renderFrameworkSkillsFields()}
          </div>
          <h4>Other</h4>
          <div className="skill-wrapper">
            {renderOtherSkillsFields()}
          </div>
          <div className="section-title">Github Stats</div>
          <div className="input-title">Github Stats Theme: 
          {renderGithubStatsSelect()}
          </div>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubStatsCard} onChange={(e)=>{setGithubStatsCard(!githubStatsCard)}}/> Stats card
          </label>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubLanguagesCard} onChange={(e)=>{setGithubLanguagesCard(!githubLanguagesCard)}} /> Languages card
          </label>
          <label htmlFor="">
            <input type="checkbox" defaultChecked="true" value={githubCommitCard} onChange={(e)=>{setGithubCommitCard(!githubCommitCard)}} /> Commit card
          </label>
          <label htmlFor="">
            <input type="checkbox"  onChange={(e)=>{setGithubGraphCard(!githubGraphCard)}} /> Graph card
          </label>
          <div className="section-title">Support Me</div>
          <div className="input-title  social-desc"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /><input type="text" placeholder="buymeacoffee Username" value={buymeacoffeeUsername} onChange={(e)=>{setBuymeacoffeeUsername(e.target.value)}} /></div>
        </div>
        <div className="markdown-container">
        <button onClick={handlePreviewClick} className="markdown-button">Preview</button>
        <button onClick={handleMarkdownClick} className="markdown-button">Markdown</button>
        <button onClick={handleCopyTextClick} className="markdown-button copy-button">Copy Text</button> 

        {activeSection === 'preview' && (
          <MarkdownView markdown={markdowntext} options={{ tables: true, emoji: true }} />
        )}
        {activeSection === 'markdown' && (
          <textarea name="markdown" value={markdowntext} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        )}
        </div>
      </div>
    </>
    )
}