import React from "react";
import logo from "../images/login-logo.png"
import bbgamelogin from "../../src/images/bbgamelogin.png"
import gamelogin from "../../src/images/gamelogin.png"
import booboocoin from "../../src/images/booboocoin.png"

const Signup = () => {

    return (
       
 <div className="fix-height relative sm:py-8 md:py-8 py-8 lg:py-8 xl:py-10" 
 >
	

		<div className="container mx-auto align"  > 


				<div className="w-full flex flex-col xl: flex-row md:flex-row sm:flex-col justify-between" >



					<div
						className="xl:flex-row flex md:flex-row sm:flex-col flex-col lg:w-2/5 sm:w-2/5 md:w-2/5 p-6 md:p-8 mx-auto sm:mx-0 md:mx-0 lg:mx-0 ">
						<div className="flex flex-col">
                        <div className=" self-center px-20">
                <img src={logo} height="200" width="200" className="mx-auto" alt="" /> </div>
              
							<div className="text-2xl text-red-500  mt-2 font-bold self-center mb-5">WELCOME TO BOOBOO GAMES</div>
							
							<label className="block w-full mb-5 mt-5 self-center">
								<input type="text" name="userName"
									className="mt-1 w-full px-3 p-1 py-4 bg-transparent border-red-500 border-b-2 
                                     font-semibold focus:outline-none text-md placeholder-slate-500"
                    //    focus:border-red-500 focus:ring-red-500 block signup-input-width
									placeholder="Username" /> </label>

							<label className="block w-full mb-5 self-center">
								<input type="email" name="email"
									className="mt-1 w-full px-3 p-1 py-4 bg-transparent border-red-500 border-b-2 
                                    placeholder-slate-500 font-semibold focus:outline-none text-md" 
                      placeholder="Email" />
							</label>

                            <label className="block w-full mb-5 self-center">
								<input type="password" name="password"
									className="mt-1 w-full px-3 p-1 py-4 bg-transparent border-red-500 border-b-2 
                                    placeholder-slate-500 font-semibold focus:outline-none text-md" 
                      placeholder="Password" />
							</label>
                            <label className="block w-full mb-5 self-center">
								<input type="password" name="confirmPassword"
									className="mt-1 w-full px-3 p-1 py-4 bg-transparent border-red-500 border-b-2 
                                    placeholder-slate-500 font-semibold focus:outline-none text-md" 
                      placeholder="Confirm Password" />
							</label>

                            <label className="block w-full mb-5 self-center">
								<input type="phone" name="phone"
									className="mt-1 w-full px-3 p-1 py-4 bg-transparent border-red-500 border-b-2 
                                    placeholder-slate-500 font-semibold focus:outline-none text-md" 
                      placeholder="Phone No" />
							</label>

    <div className="flex flex-row">                        
<label for="male" className="flex m-2"><input type="radio" id="male" name="gender" value="gender" />Male</label>

<label for="female" className="flex m-2"><input type="radio" id="female" name="gender" value="gender" />Female</label>
</div>


							<div className="mb-2 w-full mt-5 self-center lg:self-center"> 
                            <button type="button" className="text-white w-full rounded-lg bg-red-500 text-xl font-bold signup-input-width py-2"> Signup</button> </div>
<div className="text-xs font-normal">Already have an Account?
<span className="text-xs font-normal hover:border-b-2 hover:border-blue-500 hover:text-blue-500 cursor-pointer">Sign In</span>
</div>
						</div>
               
					
				

					</div>

                    <div className="signup-background flex self-center " 
                //    style={{backgroundImage: `url(${gamelogin})`}}
                   >
 <img src={bbgamelogin} 
   height="400" width="400"
  className="mx-auto" alt="" /> 


                   </div>
				</div>

			</div>
	</div>
    );
    };
    
export default Signup;