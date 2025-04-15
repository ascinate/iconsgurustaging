"use client"
import { useState } from "react";
import NavicationHome from "../components/NavicationHome";
import Link from "next/link";
import Form from "next/form";
import Image from "next/image";
import Footer from "../components/Footer";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  

    const [isVisible, setIsVisible] = useState(true);
    const [hiddend, setHiddend] = useState(false);
    const hideVisiblLogin = () => {
        setIsVisible(prevState => !prevState);
        setHiddend(prevState => !prevState); 
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
        setHiddend(!hiddend); 
    };

     const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("Logging in...");
    
        try {
          const response = await fetch("https://iconsguru.ascinatetech.com/admin/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMessage("Login successful!");
          } else {
            setMessage(data.message || "Login failed.");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          setMessage("Something went wrong.");
        }
      };
    
            return(
                <>
                <NavicationHome/>
                <main className="float-start w-100 register-pages-crm">
                    <div className="container">
                        {hiddend && (
                        <div className="col-lg-5 mx-auto mb-3">
                            <button onClick={hideVisiblLogin} className="back-tbn01 btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg> Back </button>
                        </div>
                        )}
                        <h2 className="text-center comon-heading-sub"> Continue with Email </h2>
                        <p className="text-center sub-para"> Don’t have an account? <Link href='/register'> <strong> Create a free account </strong> </Link> </p>
                        {isVisible && (
                        <div className="col-lg-8 mx-auto email-div01">
                            <button className="btn btn-comon-socail mx-auto d-flex align-items-center justify-content-center"> 
                            <span> 
                                <Image loading="lazy" src="/logo_googleg_48dp.svg"
                                                    alt="iconsguru"
                                                    width={24}
                                                    height={24} /> 
                            </span>  Continue with Google 
                            </button>
                            <button className="btn btn-comon-socail mx-auto d-flex align-items-center justify-content-center"> 
                            <span> 
                                <Image loading="lazy" src="/faceic.svg"
                                                    alt="iconsguru"
                                                    width={24}
                                                    height={24} /> 
                            </span>  Continue with Facebook 
                            </button>
                            <button className="btn btn-comon-socail mx-auto d-flex align-items-center justify-content-center"> 
                            <span> 
                                <Image loading="lazy" src="/apple.svg"
                                                    alt="iconsguru"
                                                    width={24}
                                                    height={24} /> 
                            </span>  Continue with Apple
                            </button>

                            <button onClick={toggleVisibility} className="continue-btn mx-auto d-table btn" > Continue with Email </button>
                            
                            <div className="text-center liast-listp mt-4">
                                <p> By clicking this button, I agree to Iconsguru <br/> <span> <Link href='/register'> Privacy Policy </Link> & <Link href='/register'> Terms of Use. </Link> </span>  </p>
                            </div>
                        </div>
                        )}
                        {hiddend && (
                            <div className="col-lg-5 mx-auto email-div01">
                            <div className="comon-rgesigner-sections d-inline-block w-100">
                                <Form onSubmit={handleLogin}>

                                    
                                <div className="country-dp form-group">
                                    <label className="form-label">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Username or Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        />
                                </div>

                                <div className="country-dp form-group mt-3">
                                    <label className="form-label">Password</label>
                                    <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            />
                                </div>
                                    <div className="form-group">
                                        <button type="submit" className="continue-btn w-100 mt-4 mx-auto d-table btn"> Login </button>
                                    </div>

                                </Form>
                            </div>
                            </div>
                        )}
                        {message && <p>{message}</p>}
                    </div>
                </main>
                <Footer/>
               
                </>
            )
}
export default  Login;
