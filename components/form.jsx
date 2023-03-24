import { useState } from "react";

export default function Expenditure() {
  const [values, setValues] = useState([
    { name: "Food", amount: 100, date: new Date() },
    { name: "Rent", amount: 200, date: new Date() },
    { name: "Electricity", amount: 300, date: new Date() },
    { name: "Water", amount: 400, date: new Date() },
  ]);
  const [current, setCurrent] = useState({ name: "", amount: 0 });

  const onChangeHandle = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  };

  function AddItem() {
    if (current.name === "" || current.amount === 0) {
      alert("Please enter a valid name and amount");
      return;
    }
    current.date = new Date();
    setValues([...values, current]);
    setCurrent({ name: "", amount: 0 });
  }

  //console.log(values)

  function Remove(item) {
    let newValues = values.filter((val, i) => {
      return i !== item;
    });
    setValues([...newValues]);
  }

  function Edit(i) {
    let newName = prompt("Enter new name");
    let newAmount = prompt("Enter new amount");

    let newvalue = values;
    newvalue[i].name = newName;
    newvalue[i].amount = newAmount;

    setValues([...newvalue]);
  }

  return (
    <div className="row my-5">
      <div className="col-6">
        <h1>Add Expenditure</h1>

        <div className="add-item my-5">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="name"
              name="name"
              placeholder="Name of item"
              onChange={onChangeHandle}
              value={current.name}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control custom-input"
              id="amount"
              name="amount"
              placeholder="Amount"
              onChange={onChangeHandle}
              value={current.amount}
            />
          </div>

          <button
            type="button"
            onClick={AddItem}
            className="btn custom-btn-input"
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="col-6">
        <h1>Added List</h1>
        <div className="list-item my-5">
          <div className="list-group">
            <ul className="list-group list-group-flush">
              {values.map((item, i) => {
                return (
                  <li
                    key={item.name + i}
                    className="list-group-item list m-3 d-flex justify-content-between align-items-center"
                  >
                    <div className="date">
                      <span className="month">
                        {item.date.toLocaleString("default", {
                          month: "short",
                        })}
                      </span>
                      <span className="day">{item.date.getDate()}</span>
                      <span className="year">{item.date.getFullYear()}</span>
                    </div>

                    <h4 className="m-0 text-white">
                      {item.name} - {item.amount}
                    </h4>

                    <div className="btns d-flex justify-content-between align-items-center gap-3">
                      <button
                        className="btn btn-primary"
                        onClick={() => Edit(i)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => Remove(i)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
