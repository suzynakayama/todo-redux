import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../redux/actions";

const Footer = () => {
    return (
        <div className="container col s6 center">
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>
                Completed
            </FilterLink>
        </div>
    );
};

export default Footer;
