import { useState } from "react";

const useStories = (storyCount: number) => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    const storyWidth = 88;
    const remainingStories = (storyCount - translateValue / storyWidth) - 5;
    function nextStory() {
        setTranslateValue(remainingStories >= 4 ? translateValue + storyWidth * 4 : translateValue + remainingStories * storyWidth);
    }
    function prevStory() {

        setTranslateValue(translateValue - storyWidth * 4 > 0 ? translateValue - storyWidth * 4 : 0);
    }

    function hiddenArrows() {
        if (translateValue === 0) {
            return { left: "invisible", right: "visible" };
        }
        if (remainingStories == 0) {
            return { left: "visible", right: "invisible" };
        }
        return { left: "invisible", right: "invisible" };

    }
    return { translateValue, nextStory, prevStory, hiddenArrows };
}
export default useStories;