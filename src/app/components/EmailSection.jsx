"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => { 
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { 
            email: e.target.email.value, 
            subject: e.target.subject.value, 
            message: e.target.message.value,
        };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {

        method: 'POST', 

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSONdata,
    }

    const response = await fetch(endpoint, options);
    const resData = await response.json(); 

    if (resData.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
    }
};
    return ( 
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/3 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ABD7BE] mb-4 max-w-md">
                {" "}
                {"I'm passionate about exploring advanced research in AI and pushing the boundaries of innovation."}
                    {"If you'd like to discuss ideas or potential collaborations, feel free to reach out."}
                        {"I'm always open to meaningful conversations."}
            </p>
            <div className="social flex flex-row gap-2">
                <Link href="https://scholar.google.com/citations?user=8SRrmhUAAAAJ&hl=en">
                    <Image src="/images/gs-icon.png" alt="gs icon" width={30} height={30} />
                </Link>
                <Link href="https://in.linkedin.com/in/dhanraj-nandurkar-611018236">
                    <Image src="/images/linkedin icon.png" alt="linkedin icon" width={35} height={35}/>
                </Link>
            </div>
        </div> 
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label 
                    htmlFor="email" 
                    className="text-white block mb-2 text-sm font-medium"
                    >
                        Your email
                    </label>
                    <input 
                        name="email"
                        type="email" 
                        id="email" 
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="andy@google.com"
                    /> 
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="subject" 
                    className="text-white block text-sm mb-2 font-medium"
                    >
                        Subject
                    </label>
                    <input 
                        name="subject"
                        type="text" 
                        id="subject" 
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Just saying Hi !"
                    />
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="message" 
                    className="text-white lock text-sm mb-2 font-medium"
                    >
                        Message 
                    </label>
                    <textarea 
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                        />
                </div>
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-sky-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                    {
                        //If the email was submitted successfully, show a success message. 
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                {"Email sent successfully!"}
                            </p>
                        )
                    }
            </form>
        </div>
    </section>
  );
};

export default EmailSection;
