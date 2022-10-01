import MyEditor from "./MyEditor"

const Write = () => {
  return (
    <div className="add">
      <div class="content">
        <h1>Add New Post</h1>
        <input type="text" placeholder="Enter Title Here" />
        <div class="editorcontainer">
          <MyEditor />
        </div>
      </div>
      <div class="aside">
        <div class="item">
          <h1>Publish</h1>

          <div className="draft">
            <span className="status">Status:</span> Draft
          </div>
          <div className="draft">
            <span className="status">Visibility:</span> Public
          </div>
          <input className="imginput" type="file" id="file" />
          <lebel className="file" htmlfor="file">
            Upload Image
          </lebel>
          <div class="buttons">
            <button>Save As Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div class="item">
          <h1>Catagory</h1>

          <div class="radio">
            <label htmlFor="blogging">
              <input type="radio" name="cat" value="blogging" id="blogging" />
              Blogging
            </label>
            <label htmlFor="passiveincome">
              <input
                type="radio"
                name="cat"
                value="Passiveincome"
                id="passiveincome"
              />
              Passive Income
            </label>
            <label htmlFor="programming">
              <input
                type="radio"
                name="cat"
                value="programming"
                id="programming"
              />
              Programming
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
