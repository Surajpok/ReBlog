import { useState, useCallback } from "react"
import { RichTextEditor } from "@mantine/rte"

const MyEditor = () => {
  var handleImageUpload = useCallback(function (file) {
    return new Promise(function (resolve, reject) {
      var formData = new FormData()
      formData.append("image", file)
      fetch(
        "https://api.imgbb.com/1/upload?key=26ed1bf00d685e31c615fd5c0b5b8118",
        {
          method: "POST",
          body: formData,
        }
      )
        .then(function (response) {
          return response.json()
        })
        .then(function (result) {
          return resolve(result.data.url)
        })
        .catch(function () {
          return reject(new Error("Upload failed"))
        })
    })
  }, [])

  const [value, onChange] = useState("")
  console.log(value)
  return (
    <div>
      <RichTextEditor
        value={value}
        onChange={onChange}
        onImageUpload={handleImageUpload}
        id="rte"
      />
    </div>
  )
}

export default MyEditor
