import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState({
  fullname:'',
  phone:'',
  email:'',
  msg:''
  });
  
  const InputEvent =(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
         return{
          ...preVal,
          [name]:value,
         }
    })
  }

  const formSubmit=(e)=>{
   e.preventDefault();
   alert(
    `my name is ${data.fullname}.my mobile numer is ${data.phone}.and email is ${data.email}.Here is what I want to say ${data.msg} `)
  }
  return (
    <>
        <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
         <div className='row'>
           <div className='col-md-6 col-10 mx-auto'>
             <form onSubmit={formSubmit}>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" 
                      class="form-label">
                       FullName</label>
                      <input type="text" 
                      className="form-control" 
                      id="exampleFormControlInput1" 
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter your name"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" 
                      class="form-label">
                      phone</label>
                      <input type="number" 
                      className="form-control" 
                      id="exampleFormControlInput1" 
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="Mobile number"/>
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" 
                      class="form-label">
                      Email address</label>
                      <input type="email" 
                      className="form-control" 
                      id="exampleFormControlInput1" 
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"/>
                    </div>


                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">
                        Message</label>
                     <textarea 
                       className="form-control" 
                       id="exampleFormControlTextarea1" 
                       rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                       >                    
                     </textarea>
                    </div>

                    <div class="col-auto">
                     <button type="submit" 
                     className="btn btn-outline-primary mb-3">
                     Submit</button>
                    </div>
             </form>
           </div>
         </div>
        </div>
    </>
  )
}

export default Contact
