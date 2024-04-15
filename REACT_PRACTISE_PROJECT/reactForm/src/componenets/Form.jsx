import React from "react";
import { useState } from "react";

const Form = () => {
    const[formData,setFormData]=useState({firstName:"" , lastName:"",email:"",contact:""})
    function changehandler(event){
        
        const{name,value,type,checked}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        
    }


  return (
    <div className="flex justify-center ">
      <form action="">
        <h1>Form in React</h1>
        <br/>
        <br/>

        <label>
          <p>
            First Name <sup>*</sup>
          </p>
          <input type="text" value={formData.firstName} name="firstName" placeholder="enter first name" onChange={changehandler} required/>
        </label>

        <label>
          <p>
            Last Name
            <sup>*</sup>
          </p>
          <input type="text" value={formData.lastName} name="lastName" placeholder="enter lastName" onChange={changehandler} required/>
        </label>

        <label>
          <p>
            Email<sup>*</sup>
            </p>
          <input type="email" value={formData.email} name="email" placeholder="enter email" onChange={changehandler} required/>
        </label>

        <label>
          <p>Contact</p>
          <input type="contact" value={formData.contact} name="contact" placeholder="+91" onChange={changehandler} required/>
        </label>

        <label>
          <p>Gender</p>
          <div>
            <input type="radio" id="Male" name="Gender" value="Male" />
            <label htmlFor="Male">Male</label>
            <br />

            <input type="radio" id="Female" name="Gender" value="Female" />
            <label htmlFor="Female">Female</label>
            <br />
            

            <input type="radio" id="Other" name="Gender" value="Other" />
            <label htmlFor="Other">Other</label>
            <br />
            
          </div>
        </label>

        <label>Your best subject</label>
        <div>
                <input type="checkbox" id="English" name="subject" value="English"/>
                <label htmlFor="English">English</label><br/>

                <input type="checkbox" id="Maths" name="subject" value="Maths"/>
                <label htmlFor="Maths">Maths</label><br/>

                <input type="checkbox" id="Physics" name="subject" value="Physics"/>
                <label htmlFor="Physics">Physics</label><br/>
        </div>

        <label htmlFor="Resume">Upload Resume</label>
        <div>
            <input type="file" name="Resume"/>
        </div>

        <label htmlFor="URL">Enter URL <sup>*</sup></label>
        <input type="url" /><br/>

        <label htmlFor="">select your choice</label>
        <div>
            <label htmlFor="">select your Ans</label>
            <select >
                <option value="">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="America">America</option>
            </select>
        </div>

        <label htmlFor="">About</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="About yourself"></textarea>


        <p>Submit OR Reset</p>
        <div>
            <button>Reset</button>
            <button>Submit</button>
        </div>

        




      </form>
    </div>
  );
};

export default Form;
