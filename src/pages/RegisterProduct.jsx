import React, { useState } from "react";

function Register() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnity] = useState("");
  const [grade, setGrade] = useState("");
  const [mult, setMult] = useState("");
  const [quantity, setQuantity] = useState("");
  const [coast, setCoast] = useState("");
  const [price, setPrice] = useState("");

  const submit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3001/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name,
        description,
        category,
        unit,
        grade,
        mult,
        quantity,
        price,
      }),
    });
  };
  return (
    <div className="add-product">
      <h1>Add new product</h1>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="form-line">
            <input className="little-field"
              type="text"
              placeholder="Id"
              onChange={(e) => setId(e.target.value)}
            />

            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />

            <select className="select-field" onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- Select option --</option>
              <option value="Sport">Sport</option>
              <option value="Hobby">Hobby</option>
            </select>
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="unit"
              onChange={(e) => setUnity(e.target.value)}
            />
            <input
              type="text"
              placeholder="grade"
              onChange={(e) => setGrade(e.target.value)}
            />
            <input
              type="text"
              placeholder="mult"
              onChange={(e) => setMult(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              placeholder="coast"
              onChange={(e) => setCoast(e.target.value)}
            />
            <input
              type="text"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
