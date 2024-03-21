import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/mySelect";

const PostFilter = ({filter,setFilter})=>{
  
 

  return (
    <div>
    <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "post topic" },
          { value: "body", name: "post content" },
        ]}
      />
    </div>
  )
}

export default PostFilter;