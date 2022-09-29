import React, { useState } from "react"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
const Write = () => {
 

  return (
    <div className="add">
      <div class="content">
        <h1>Add New Post</h1>
        <input type="text" placeholder="Enter Title Here" />
        <div class="editorcontainer">
          <Editor
            
          />
        </div>
      </div>
      <div class="aside">
        <div class="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
        </div>
        <div class="item">Item2</div>
      </div>
    </div>
  )
}

export default Write
