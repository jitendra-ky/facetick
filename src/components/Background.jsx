import './Background.css';

import { useEffect } from 'react';

function Background({isDarkMode}) {

    useEffect(() => {
        const background_element = document.getElementById("glassbg");
        const background_ball = document.getElementById("color-one");
        if (isDarkMode) {
            background_element.classList.add("dark-mode");
            background_ball.classList.add("dark-mode");
        } else {
            background_element.classList.remove("dark-mode");
            background_ball.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const output = (
        <div className="glassbg" id='glassbg'>
            <div className="color" id='color-one'>one</div>
            {/* <div class="color">two</div>
            <div class="color">three</div> */}
        </div>
    )

    return output;
}

export default Background;