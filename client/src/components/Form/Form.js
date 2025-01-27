import React from "react";
import { useState } from "react";
import "./form.css";
import { Row, Col } from "reactstrap";
import register_img from "../../assets/images/registraton_img.jpg";
const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [school_name, setSchoolName] = useState("");
  const [grade, setClass] = useState("");
  const [gender, setGender] = useState("");
  const [parent_1_name, setParent1Name] = useState("");
  const [parent_1_occupation, setParent1occupation] = useState("");
  const [parent_1_mobile, setParent1mobile] = useState("");
  const [parent_1_email, setParent1email] = useState("");
  const [parent_2_name, setParent2Name] = useState("");
  const [parent_2_occupation, setParent2occupation] = useState("");
  const [parent_2_mobile, setParent2mobile] = useState("");
  const [parent_2_email, setParent2email] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !age ||
      !school_name ||
      !grade ||
      !gender ||
      !parent_1_name ||
      !parent_1_occupation ||
      !parent_1_mobile ||
      !parent_1_email
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      let result = await fetch(`http://localhost:8800/api/user/registration`, {
        method: "post",
        body: JSON.stringify({
          name,
          age,
          school_name,
          grade,
          gender,
          parent_1_name,
          parent_1_occupation,
          parent_1_mobile,
          parent_1_email,
          parent_2_name,
          parent_2_occupation,
          parent_2_mobile,
          parent_2_email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.warn(result);

      if (result) {
        alert("Data saved successfully");
        setName("");
        setAge("");
        setSchoolName("");
        setClass("");
        setGender("");
        setParent1Name("");
        setParent1email("");
        setParent1mobile("");
        setParent1occupation("");
        setParent2Name("");
        setParent2email("");
        setParent2mobile("");
        setParent2occupation("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section class="h-100 h-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="card rounded-4">
            <div class="img_container">
              <img src={register_img} class="register_img" alt="img" />
            </div>
            <div class="card-body p-4 p-md-5">
              <h2 class="text-center mb-3">Registration Info</h2>
              <h5>Child Details</h5>
              <form class="p-2">
                <div class="form-outline mb-3">
                  <label class="form-label">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <Row class="d-flex mb-3 column-gap-3">
                  <Col class="col-2">
                    <div class="form-outline">
                      <label class="form-label">Age</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                  <Col class="col-8">
                    <div class="form-outline">
                      <label class="form-label">School Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your School name"
                        value={school_name}
                        onChange={(e) => setSchoolName(e.target.value)}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row class="d-flex mb-3 column-gap-3">
                  <Col class="col-6">
                    <label class="form-label">Class</label>
                    <select
                      class="form-select"
                      value={grade}
                      onChange={(e) => setClass(e.target.value)}
                      required
                    >
                      <option value="1">Choose</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                    </select>
                  </Col>
                  <Col class="col-6">
                    <label for="exampleDatepicker1" class="form-label">
                      Gender
                    </label>
                    <select
                      class="form-select"
                      placeholder="Enter your full name"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="1">Choose</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </Col>
                </Row>
              </form>
              <h5 class="">Parent 1 Details</h5>
              <form class="p-2">
                <div data-mdb-input-init class="form-outline mb-3">
                  <label class="form-label" for="form3Example1q">
                    Name
                  </label>
                  <input
                    value={parent_1_name}
                    onChange={(e) => setParent1Name(e.target.value)}
                    type="text"
                    placeholder="enter your Full Name"
                    class="form-control"
                    required
                  />
                </div>
                <div data-mdb-input-init class="form-outline datepicker mb-3">
                  <label for="exampleDatepicker1" class="form-label">
                    Occupation
                  </label>
                  <input
                    value={parent_1_occupation}
                    onChange={(e) => setParent1occupation(e.target.value)}
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Email
                  </label>
                  <input
                    value={parent_1_email}
                    onChange={(e) => setParent1email(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="enter your email address"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="inputZip" class="form-label">
                    Mobile No.
                  </label>
                  <input
                    value={parent_1_mobile}
                    onChange={(e) => setParent1mobile(e.target.value)}
                    type="number"
                    class="form-control"
                    placeholder="enter your mobile no."
                    required
                  />
                </div>
              </form>
              <h5 class="">Parent 2 Details ( Optional )</h5>
              <form class="p-2">
                <div data-mdb-input-init class="form-outline mb-3">
                  <label class="form-label" for="form3Example1q">
                    Name
                  </label>
                  <input
                    value={parent_2_name}
                    onChange={(e) => setParent2Name(e.target.value)}
                    type="text"
                    placeholder="enter your Full Name"
                    class="form-control"
                  />
                </div>
                <div data-mdb-input-init class="form-outline datepicker mb-3">
                  <label for="exampleDatepicker1" class="form-label">
                    Occupation
                  </label>
                  <input
                    value={parent_2_occupation}
                    onChange={(e) => setParent2occupation(e.target.value)}
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Email
                  </label>
                  <input
                    value={parent_2_email}
                    onChange={(e) => setParent2email(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder="enter your email address"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputZip" class="form-label">
                    Mobile No.
                  </label>
                  <input
                    value={parent_2_mobile}
                    onChange={(e) => setParent2mobile(e.target.value)}
                    type="number"
                    class="form-control"
                    placeholder="enter your mobile no."
                  />
                </div>
              </form>
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                onClick={handleOnSubmit}
                class="btn btn-success btn-lg mb-1"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
