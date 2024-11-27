"use client";
import React, { useTransition, useState } from "react"; 
import Image from "next/image"; 
import TabButton from "./TabButton";

const TAB_DATA = [ 
    {
        title: "Skills", 
        id:"skills", 
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Tensorflow</li>
                <li>Deep Neural Networks</li>
                <li>Keras</li>
                <li>Unity 3D</li> 
            </ul>
        )
    }, 
    {
        title: "Education", 
        id: "education", 
        content: (
            <ul className="list-disc pl-2">
                <li>Lokmanya Tilak Junior College, Bramhapuri, India</li> 
                <li>G H Raisoni College of Engineering, Nagpur, India</li>
            </ul>
        )
    },
    {
        title: "Honours / Awards", 
        id: "honours / awards", 
        content: (
            <ul className="list-disc pl-2">
                <li>Finalist in Smart India Hackathon</li>
                <li>IEEE Bombay Section SAC Member</li> 
                <li>Presented Research Paper in ICAISC International Conference, Saudi Arabia</li>
                <li>GTwenty Summit French Interpreter and Volunteer</li> 
                <li>Research Paper Reviewer honour received in ICBDS, India</li>
                <li>Copyrighted AI Integrated model</li>
            </ul>
        )
    },
]

const AboutSection = () => { 
    const [tab, setTab] = useState("skills"); 
    const [isPending, startTransition] = useTransition(); 

const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
};

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about image" width={500} height={500} /> 
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2> 
                    <p className="text-base lg:text-lg">
                        {"This is Dhanraj Nandurkar, AI Engineer, Researcher, Author & Reviewer."}
<br></br> <br></br>
                        {"In my free time, I like to write poetry, cook for my loved one's & spend time in nature."} 
<br></br> <br></br>
                        {"I'm highly enthusiastic, quick learner & open for challenges person , who likes to solve real-time problems with creative insights."} 
                        {"Thank you for giving me your time."}
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab=="skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab=="education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("honours / awards")} 
                        active={tab=="honours / awards"}
                        >
                            {" "}
                            Honours / Awards{" "}
                        </TabButton>
                    </div> 
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
}; 

export default AboutSection;
