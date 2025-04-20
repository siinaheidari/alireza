import React from 'react';

const Projects = () => {

    const ProjectsItems=[
        {
            title:"Neo4j Manager",
            description:"Design and Implement mechanism to use multi instances of Neo4j on same machines at same time."
        },
        {
            title:"Inventory management",
            description:"  implementation of a framework used for developing an inventory management application using C#"
        },
        {
            title:"Video Chat",
            description:"  P2P Video Chat application using WebRTC"
        },
        {
            title:"Boors Monitoring",
            description:"Design and Implementation of software of Managing “Boors Management” using Erlang"
        },
    ]
    return (
        <div id={"professionalActivities"} className={"px-6 min-h-screen center py-30  max-md:py-12"}>
            <div className={""}>
                <div>
                    <div className={"text-h3 max-md:text-h4 font-[600] text-center mb-28  max-md:mb-12"}>
                        Personal Projects
                    </div>
                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-8 w-full max-w-[1800px] mx-auto"}>

                        {
                            ProjectsItems?.map(item=>

                                <div key={item?.title} data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                                    <div className={"text-h5  max-md:text-h6"}>
                                        {item?.title}
                                    </div>
                                    <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                        {item?.description}
                                    </div>
                                </div>
                           )
                        }




                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;
