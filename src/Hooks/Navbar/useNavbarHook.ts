import React, { useState } from "react"
const useNavbarHook = () => {
    type Popup = "invisible" | "visible";
    const [open, isOpen] = useState<Popup>("invisible");
    function manageMoreButton() {
        isOpen(open === "invisible" ? "visible" : "invisible");
    }
    return { open, isOpen: manageMoreButton }
}
export default useNavbarHook;