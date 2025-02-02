import React from "react";
import { getPageArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPageArray(totalPages);
  return (
    <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={
              page === p ? "page__button page__current" : "page__button"
            }
          >
            {p}
          </span>
        ))}
      </div>
  )
}


export default Pagination