import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData(id);
  }, []);

  const getUserData = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${id}`);
    const userData = await response.json();
    if (response.ok) {
      document.getElementById("inputFname").value = userData.fName;
      document.getElementById("inputLname").value = userData.lName;
      document.getElementById("inputEmail").value = userData.email;
      document.getElementById("inputPhoneNo").value = userData.phoneNumber;
      document.getElementById("inputProfession").value = userData.profession;
      document.getElementById("inputAge").value = userData.age;
      document.getElementById("inputSalary").value = userData.salary;
    } else {
      window.alert("Failed to fetch user data");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = {
      fName: event.target[0].value,
      lName: event.target[1].value,
      email: event.target[2].value,
      phoneNumber: event.target[3].value,
      profession: event.target[4].value,
      age: event.target[5].value,
      salary: event.target[6].value,
    };

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.text();

    if (response.ok) {
      navigate("/");
      alert("User updated successfully");
    } else {
      alert("Failed to update user: " + data.message);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Edit User</h2>
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="inputFname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              id="inputFname"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="inputLname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              id="inputLname"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              id="inputEmail"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="inputPhoneNo" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="123-456-7890"
              id="inputPhoneNo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="inputProfession" className="form-label">
              Profession
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your profession"
              id="inputProfession"
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="inputAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your age"
              id="inputAge"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your salary"
            id="inputSalary"
          />
        </div>
        <button type="submit" role="Update" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
