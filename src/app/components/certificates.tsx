import React from 'react';

const Certificate = () => {
    return (
        <div id={"certificates"} className={"px-6 bg-black pt-30 center min-h-screen max-md:py-12"}>
            <div className={""}>
                <div className={"text-h3 max-md:text-h4 text-white font-[600] text-center mb-20  max-md:mb-12"}>
                    Certificates
                </div>
                <div className={"grid grid-cols-2 gap-12 max-md:grid-cols-1 w-full max-w-[1800px] mx-auto"}>


                    <div data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                        <div className={"text-h5 text-white max-md:text-h6"}>
                            Advanced Python Programming and OO Thinking (01/2018)
                        </div>
                        <div className={"text-h6  max-md:text-base text-gray-1 mt-4 font-[500]"}>
                            Quera College
                        </div>
                    </div>
                    <div data-aos={"fade-right"} className={" border border-gray-200 shadow-box max-lg:p-8 p-16 rounded-xl"}>
                        <div className={"text-h5 text-white max-md:text-h6"}>
                            Primary Advanced Degree in English (12/2016)
                        </div>
                        <div className={"text-h6  max-md:text-base text-gray-1 mt-4 font-[500]"}>
                            Safir Institute
                        </div>
                    </div>

                </div>
                <div className={"text-center text-white text-2xl border-t border-t-gray-600 py-12 max-md:text-xl mt-[20rem] max-md:mt-16"}>
                    ©2019-2025 Alireza Heidari
                    ALL RIGHTS RESERVED
                </div>
            </div>

        </div>
    );
};

export default Certificate;
