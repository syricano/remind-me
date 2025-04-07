// components/settings.jsx
import React from 'react';
import { Link } from "react-router-dom";


const Settings = () => {
    return (
        <div className="p-4">
            <h2 className="text-center w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Settings</h2>
            <div className="mt-4">
                <h3 className="text-xl font-semibold">General Settings</h3>
                <p>Here you can modify your preferences and settings.</p>
                {/* Add more settings here */}
            </div>
        </div>
    );
};

export default Settings;
