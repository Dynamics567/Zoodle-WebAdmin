import React, { useState } from "react";

import { ReactComponent as SearchIcon } from "assets/svg/search-glass.svg";

const Bar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "SearchQuery":
        setSearchQuery(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="h-12 w-72 m-2 px-3 my-10 border flex flex-row shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent">
      <div className="pt-3 flex-end">
        <SearchIcon className="h-5 w-5 text-gray" />
      </div>
			<input
        className="pl-3 pt-2 h-10 bg-white bg-opacity-5 text-gray focus:border-none focus:outline-none"
        type="text"
        name="SearchQuery"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search Users"
      />
    </div>
  );
};

export default Bar;
