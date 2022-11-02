import React from 'react'

const Step1 = ({ page, setPage, formData, setFormData }) => {
  return (
        <div className="card">
            <div className="step-title">Sign Up</div> 
            <input
                type="text"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })  //setting the formData to the value input of the textfield 
                  }
                className="form-group"
            />
            <input
                type="text"
                className="form-group"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value }) 
                  }
            />
            <input
                type="text"
                className="form-group"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value }) 
                  }
            />
            <button
                onClick={() => {
                    setPage(page + 1);
                }}>
                Next
            </button>
        </div>
  )
}

export default Step1
