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
    return { imageIndex, handleNextImage, handlePrevImage };
};
export default usePosts;