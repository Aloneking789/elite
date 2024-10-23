import { useDarkMode } from "../../DarkModeContext";
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });
const members = [
    {
      name: "Vishnu Dubey",
      logo: "https://avatars.githubusercontent.com/u/113883504?v=4",
      github: "https://github.com/vishnuzdubey",
      workExp: 10,
      linkedin: "#https://www.linkedin.com/in/vishnu-dubey-2423b0254/",
    },
    {
      name: "Abhay Pandey",
      logo: "https://avatars.githubusercontent.com/u/116704975?v=4",
      github: "https://github.com/aloneking789",
      workExp: 10,
      linkedin: "https://www.linkedin.com/in/abhay-pandey-595818253/",
    },
    {
      name: "Abhijeet Gupta",
      logo: "https://avatars.githubusercontent.com/u/129390867?v=4",
      github: "https://github.com/ag21o9",
      workExp: 18,
      linkedin: "https://www.linkedin.com/in/abhijeet-gupta-552ba5208/",
    },
  
    {
      name: "Vaishnavi Singh",
      logo: "https://avatars.githubusercontent.com/u/173715475?v=4",
      github: "https://github.com/vaishnavizsingh",
      workExp: 10,
      linkedin: "https://www.linkedin.com/in/vaishnavi-singh-33a5b2271/",
    },
  ];


export default function Members(){
    const { darkMode } = useDarkMode()
    return (
        <><br />
            <div className="grid grid-cols-2 grid-rows-2 mx-60">
                {members.map((member,index) => (
                    <div key={index} className={`${darkMode ? "bg-slate-700" : "bg-slate-200"} rounded-2xl p-4 mx-4 my-2 `}>
                        <h1 className="font-bold text-xl">{member.name}</h1><br />
                        {/* github icon */}
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30px" height="30px"><path className={darkMode && "fill-slate-200"} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                            <div> &nbsp; Code with me <a href={member.github} className="text-blue-500 underline">@{member.github.split('/')[3].capitalize()}</a></div>
                        </div><div className="h-2"/>
                        {/* Work Exp */}
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30px" height="30px"><path className={darkMode && "fill-slate-200"} d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 160 0 8.2 0c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM320 352l-96 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l296.2 0C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z"/></svg>
                            <div>&nbsp; I have worked for <span className="text-blue-500">{member.workExp}</span> Years</div>
                        </div><div className="h-2"/>
                        {/* LinkedIn */}
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30px" height="30px"><path className={darkMode && "fill-slate-200"} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            <div>&nbsp; Know more and Hire me at <a href={member.linkedin} className="text-blue-500 underline">LinkedIn</a></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}