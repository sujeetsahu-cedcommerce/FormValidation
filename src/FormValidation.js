import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        u_name:"",
        u_email:"",
        u_pwd:"",
        u_address:"",
        u_phone:"",
        u_gender:"",
        u_hobbies:"",
        u_profile:"",
        u_dob:"",
        choosedimg:"",
        hobbies:[],
        message:"",
      }
    }

    getName = (event) => {
        this.setState({
            u_name:event.target.value,
        })
    }

    getEmail = (event) => {
        this.setState({
            u_email:event.target.value,
        })
    }

    getPwd = (event) => {
        this.setState({
            u_pwd:event.target.value,
        })
    }

    getAddress = (event) => {
        this.setState({
            u_address:event.target.value,
        })

    }

    getPhone = (event) => {
        this.setState({
            u_phone:event.target.value,
        })
    }

    getGender = (event) => {
        if(event.target.checked){
            this.setState({
                u_gender:event.target.value,
            })
        }
        
    }

    getHobies = (event) => {
        if(event.target.checked){
            this.setState({
                hobbies:[...this.state.hobbies,event.target.value],
            })
        }
        else{
            alert("unchecked");
            var ItemToBeRemoved = event.target.value;
            var filteredArray = this.state.hobbies.filter(item => !ItemToBeRemoved.includes(item));
            this.setState({
                hobbies:filteredArray,
            })
        }
    }

    getPicture = (event) => {
        this.setState({
            u_profile:event.target.value,
        })
    }

    getDob = (event) => {
        this.setState({
            u_dob:event.target.value,
        })
    }

    resetForm = () => {
        this.setState({
            u_name:"",
            u_email:"",
            u_pwd:"",
            u_address:"",
            u_phone:"",
            u_gender:"",
            u_hobbies:"",
            u_profile:"",
            u_dob:"",
            choosedimg:"",
            hobbies:[],
        })
    }

    submitForm = (event) => {  
        event.preventDefault();
        console.log(this.state.hobbies);
        var letters = /^[A-Za-z]+$/;
        if(this.state.u_name.length>0){
            if(this.state.u_name.match(letters))
            {
                // alert('Your name have accepted : you can try another');
                var reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(reg.test(this.state.u_email)){
                    // alert("valid");
                    if(this.state.u_pwd.length>7){
                        // alert("valid");
                        if(this.state.u_address.length>5){
                            // alert("address valid");

                             if(this.state.u_phone.length===10){

                                if(/^[0-9]+$/.test(this.state.u_phone)){
                                    // alert("mobile no. valid");
                                    
                                    if(this.state.u_gender.length){
                                        // alert("gender checked");
                                        if(this.state.hobbies.length){
                                            // alert("hobbies field is valid");
                                            if(this.state.u_profile){
                                                // alert(this.state.u_profile);
                                                if(this.state.u_dob){
                                                    // alert("dob is valid");
                                                    this.setState({message:"Your Data Saved"})  
                                                }
                                                else{
                                                    alert("please fill dob");
                                                }
                                            }
                                            else{
                                                alert("please choose profile picture");
                                            }
                                        }
                                        else{
                                            alert("please choose atlest 1 hobby");
                                        }
                                    }
                                    else{
                                        alert("please choose gender");
                                    }
                            
                                  }
                                else{
                                    alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)");
                                }
                            }
                            else{
                                alert("mobile no. length must be 10");
                            }
                        }
                        else{
                            alert("address field must be greater than 25 characters");
                        }
                    }
                    else{
                        alert("not valid");
                    }
                }
                else{
                    alert("email not valid");
                }
            }
            else
            {
                alert('Please input name field alphabet characters only');
            }
        }
        else{
            alert("name field never be empty");
        }
    }

  render() {
    return (
      <div className="main_container">
          <form onSubmit={this.submitForm} onReset={this.resetForm}>
              <table className='table1'>
                  <tr>
                      <td colSpan={2} style={{color:"",display:""}}  id="success_form">{this.state.message}</td>
                  </tr>
                  <tr>
                      <td>Enter Your Name</td>
                      <td><input type="text" onChange={this.getName} value={this.state.u_name}></input></td>
                  </tr>
                  <tr>
                      <td>Enter Your Email</td>
                      <td><input type="text" onChange={this.getEmail} value={this.state.u_email}></input></td>
                  </tr>
                  <tr>
                      <td>Enter Your Password</td>
                      <td><input type="password" onChange={this.getPwd} value={this.state.u_pwd}></input></td>
                  </tr>
                  <tr>
                      <td className='address'>Enter Your Address</td>
                      <td className='address'><textarea rows="4" cols="21" onChange={this.getAddress} value={this.state.u_address}></textarea></td>
                  </tr>
                  <tr>
                      <td>Enter Your Mobile</td>
                      <td><input onChange={this.getPhone} value={this.state.u_phone}></input></td>
                  </tr>
                  <tr>
                      <td>Enter Your Gender</td>
                      <td> 
                        <label>Male</label>
                        <input type="radio" id="Male" name="genger" value="Male" onChange={this.getGender}></input>
                        <label>Female</label>
                        <input type="radio" id="Female" name="genger" value="Female" onChange={this.getGender}></input>
                      </td>
                  </tr>
                  <tr>
                      <td>Choose Your Hobbies</td>
                      <td>
                        <label>Cricket</label>
                        <input type="checkbox" id="cricket" name="cricket" value="Cricket" onChange={this.getHobies}></input>
                        <label>Singing</label>
                        <input type="checkbox" id="cricket" name="cricket" value="Singing" onChange={this.getHobies}></input>
                        <label>Dancing</label>
                        <input type="checkbox" id="cricket" name="cricket" value="Dancing" onChange={this.getHobies}></input></td>
                  </tr>
                  <tr>
                      <td>Choose your Profile Pic</td>
                      <td><input type="file"   onChange={this.getPicture}></input></td>
                  </tr>
                  <tr>
                      <td>Select Your DOB</td>
                      <td><input type="date" onChange={this.getDob} value={this.state.u_dob}/></td>
                  </tr>
                  <tr>
                        <p style={{width:"200%",textAlign:"center"}}><input type="submit" value="Register me" onClick={this.submitForm}></input>
                        <input type="reset" value="Reset"></input>
                        </p>
                  </tr>
              </table>
          </form>
      </div>
    )
  }
}
