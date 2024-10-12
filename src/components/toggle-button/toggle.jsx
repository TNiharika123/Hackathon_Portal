import React, {useState} from "react";
import "./toggle.scss";

import DarkModeToggle from "react-dark-mode-toggle";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="tgl">
      <DarkModeToggle
        className="toggle_btn"
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    </div>
  );
};

// export default function TOGGLE(){
//     return(
// <label class="switch">
//   <input type="checkbox"></input>
//   <span class="slider round"></span>
// </label>

//     );
// }
