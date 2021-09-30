import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(
      `Given name by user is ${data.fullname} and contact number is ${data.phoneNumber} with email ${data.email} and have sent  a message -> ${data.msg} `
    );
    setData({ fullname: "", phoneNumber: "", email: "", msg: "" });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={InputEvent}
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>

                <div className="col-12 text-center" >
                  <button className="btn btn-outline-primary  " type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
