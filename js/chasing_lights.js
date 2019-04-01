"use strict";

{
    const init = () => {
        lightBulb.addEventListener("mouseover", chasingLightsOn);
    };

    const lightBulb = $$('[alt=lightbulb]');

    const chasingLightsOn = (e) => {
        let nextLightBulb = $('[src="media/light_on.png"] + img') === null ? $('[alt=lightbulb]') : $('[src="media/light_on.png"] + img');
        if (e.target.src.includes("media/light_on.png")) {
            nextLightBulb.src = "media/light_on.png";
            e.target.src = "media/light_off.png";
        };
    };

    init();
}