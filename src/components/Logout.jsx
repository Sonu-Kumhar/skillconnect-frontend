// components/logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ Remove token
        localStorage.removeItem("token");

        // ✅ Redirect to login
        navigate("/login");
    }, [navigate]);

    return null; // No UI needed, just handles logout
};

export default Logout;
