"use client";
import React, { useEffect, useState } from "react";

const FormExam = () => {
  const [firstname, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullname, setFullname] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (fullname === "") {
      setFullname(firstname + " " + surname);
    } else {
      setFullname("");
    }
  };

  useEffect(() => {
    console.log("name: ", firstname, surname);
  }, [fullname]); // Log the updated values of firstname and surname when fullname changes

  return (
    <div>
      {fullname && (
        <div className="bg-blue-200 border border-blue-600 w-fit p-2 m-2 rounded-md">
          Name is: {fullname}
        </div>
      )}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your firstname</label>
            <input
              type="text"
              placeholder="Enter your firstname"
              value={firstname}
              onChange={handleNameChange}
              className="text-center"
            />
          </div>
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your Surname</label>
            <input
              type="text"
              placeholder="Enter you surname"
              value={surname}
              onChange={handleSurnameChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormExam;