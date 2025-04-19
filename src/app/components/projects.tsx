import React from 'react';

const Projects = () => {
    return (
        <div id={"professionalActivities"} className={"px-6 min-h-screen center py-30  max-md:py-12"}>
            <div className={""}>
                <div>
                    <div className={"text-h3 max-md:text-h4 font-[600] text-center mb-28  max-md:mb-12"}>
                        Professional Activities
                    </div>
                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-8 w-full max-w-[1800px] mx-auto"}>
                        <div data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                            <div className={"text-h5  max-md:text-h6"}>
                                Neo4j Manager
                            </div>
                            <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                Design and Implement mechanism to use multi instances of Neo4j on same machines at same time.
                            </div>
                        </div>
                        <div data-aos={"fade-left"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                            <div className={"text-h5  max-md:text-h6"}>
                                inventory management
                            </div>
                            <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                implementation of a framework used for developing an inventory management application using C#
                            </div>
                        </div>
                        <div data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                            <div className={"text-h5  max-md:text-h6"}>
                                Video Chat
                            </div>
                            <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                P2P Video Chat application using WebRTC
                            </div>
                        </div>
                        <div data-aos={"fade-left"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                            <div className={"text-h5  max-md:text-h6"}>
                                Boors Monitoring
                            </div>
                            <div className={"text-h6  max-md:text-bodyMd text-gray-3 mt-4 font-[500]"}>
                                Design and Implementation of software of Managing “Boors Management” using Erlang
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;
