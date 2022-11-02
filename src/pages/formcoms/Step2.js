import React from 'react'

const Step2 = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="card">
        <div className="step-title">Personal Info</div>
        <input
            type="text"
            placeholder="Nickname"
            value={formData.nickname}
            onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
        />
        <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
            onClick={() => {
            setPage(page + 1);
            }}>
            Next
        </button>
      <br/>
        <button
            onClick={() => {
            setPage(page - 1);
            }}>
            Previous
      </button>
    </div>
  )
}

export default Step2
