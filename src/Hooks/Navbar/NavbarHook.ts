import React, { useState } from "react"
const useNavbarHook = () => {
    type Popup = "hidden" | "visible";
    const [open, isOpen] = useState<Popup>("hidden");
    function manageMoreButton() {
        isOpen(open === "hidden" ? "visible" : "hidden");
    }
    return { open, isOpen: manageMoreButton }
}
export default useNavbarHook;