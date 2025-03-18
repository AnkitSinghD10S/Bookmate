import { useState } from "react";

function UploadBook() {
  const [input, setInput] = useState({
    bookName: "",
    bookAuthorName: "",
    publishedYear: "",
    bookImage: null,
    bookLink: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data:", input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          name="bookName"
          value={input.bookName}
          onChange={handleChange}
        />

        <label htmlFor="bookAuthorName">Author:</label>
        <input
          type="text"
          name="bookAuthorName"
          value={input.bookAuthorName}
          onChange={handleChange}
        />

        <label htmlFor="publishedYear">Published Year:</label>
        <input
          type="date"
          name="publishedYear"
          value={input.publishedYear}
          onChange={handleChange}
        />

        <label htmlFor="bookImage">Book Image:</label>
        <input type="file" name="bookImage" onChange={handleFileChange} />

        <label htmlFor="bookLink">Book:</label>
        <input type="file" name="bookLink" onChange={handleFileChange} />

        <button type="submit">Upload Book</button>
      </form>
    </div>
  );
}

export default UploadBook;
