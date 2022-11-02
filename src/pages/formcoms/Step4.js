import React from 'react'

const Step4 = ({page, setPage,formData, setFormData}) => {
  return (
    <div className="card">
      <div className="step-title">Other Info</div>
      <input
        type="text"
        placeholder="Highest Qualification"
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
          onChange={(e) =>
            setFormData({ ...formData, occupation: e.target.value })
          }
      />
      <textarea
        type="text"
        placeholder="About"
        value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
        //   alert("You've successfully submitted this form");
          console.log(formData);
        }}>
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
        }}>
        Previous
      </button>
    </div>
  )
}

export default Step4
