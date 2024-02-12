import React, { useState } from "react";

const Teacher = () => {
  // form data
  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    phone_number: "",
  });

  const [error, setError] = useState('')

  const [modelStack, setModelStack] = useState(<></>)

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

  return (
    <>
        {modelStack}
        <div className="form-container">
            {error}
            <div className="container  w-25 justify-content-center">
                <button
                    className='btn btn-primary'
                    onClick={() => { 
                        setModelStack(
                            <div className="test" key={'123yo'}>
                                <div class="card">
                                    <h5 class="card-header">Add User</h5>
                                    <div class="card-body">
                                        <div className="container">
                                        <div className="row mt-2 mb-2">
                        <input
                            placeholder="Full Name"
                            type="text"
                            value={formData.full_name}
                            onChange={(e) => {
                            handleForm(e, "full_name");
                            }}
                        />
                    </div>

                    <div className="row mt-2 mb-2">
                        <input
                            placeholder="Address"
                            type="text"
                            value={formData.address}
                            onChange={(e) => {
                            handleForm(e, "address");
                            }}
                        />
                    </div>

                    <div className="row mt-2 mb-2">
                        <input
                            placeholder="Phone Number"
                            type="text"
                            value={formData.phone_number}
                            onChange={(e) => {
                            handleForm(e, "phone_number");
                            }}
                        />
                    </div>
                                        </div>
                                    </div>
                                    <h5 class="card-footer">
                                        <button onClick={() => {
                                            setModelStack(<></>)
                                        }}>
                                            Close
                                        </button>
                                    </h5>
                                </div>
                            </div>
                        )
                    }}
                >
                    { isLoading ? 'Loading...' : 'Pop Up' }
                </button>
            </div>
        </div>
    </>
  );
};

export default Teacher;
