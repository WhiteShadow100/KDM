import React, { useState } from 'react'
import { apiCall } from '../../../util/apiCall';

const Add = () => {

  // form data
  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    phone_number: "",
  });

  const [error, setError] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  function handleForm(e, label){

    if(e == null || e.target == null){ return }

    switch(label){
        case 'full_name':
            setFormData(pre => ({
                ...pre,
                full_name: (e.target.value || '')
            }))
            break;
        case 'address':
            setFormData(pre => ({
                ...pre,
                address: (e.target.value || '')
            }))
            break;
        case 'phone_number':
            setFormData(pre => ({
                ...pre,
                phone_number: (e.target.value || '')
            }))
            break;
        default: 
            break
    }
  }

  // adds user | API
  function addUser() {
    if(isLoading){ return }

    setIsLoading(true)

    let payload = {

    }

    apiCall({
      route: 'abcd',
      payload: payload,
      callBack: (res) => {
        if(!res.is_error){
          alert("Teacher Added.")
        }
      },
      complete: () => {
        setIsLoading(false)
      }
    })

  }


  return (
    <form>

      <div className="mb-3">
        <label for="full_name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="full_name" aria-describedby="emailHelp" value={formData.full_name} onChange={(e) => { handleForm(e, 'full_name') }} />
      </div>

      <div className="mb-3">
        <label for="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" value={formData.address} onChange={(e) => { handleForm(e, 'address') }} />
      </div>

      <div className="mb-3">
        <label for="phone_number" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phone_number" value={formData.phone_number} onChange={(e) => { handleForm(e, 'phone_number') }} />
      </div>

      <input className="btn btn-primary" value={'Submit'} onClick={addUser} />
    </form>
  )
}

export default Add
