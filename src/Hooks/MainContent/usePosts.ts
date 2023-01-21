import { useState } from "react";

const usePosts = (imageCount: number) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    function handleNextImage() {
        if (imageIndex < imageCount - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    }
    function handlePrevImage() {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(imageCount - 1);
        }
    }
    function hiddenArrows() {
        if (imageCount === 1)
            return { left: "invisible", right: "invisible" };
        else if (imageIndex === 0 && imageCount > 1) {
            return { left: "invisible", right: "visible" };
        }
        else if (imageIndex == imageCount - 1) {
            return { left: "visible", right: "invisible" };
        }
        else if (imageCount > 0)
            return { left: "visible", right: "visible" };
        return { left: "invisible", right: "invisible" };

    }
    return { imageIndex, handleNextImage, handlePrevImage, hiddenArrows };
};
export default usePosts;