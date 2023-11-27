import React from "react";
import SearchBar from "./Header-Search";
const Header = ({ onSearch }) => {
    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Header;