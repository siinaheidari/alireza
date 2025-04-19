import Image from "next/image";
import aiIcon from "../../../public/images/ai-mind.png"


const Skills = () => {

    const skillsItems =
        {
            aiData: ["Keras", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
            backend: ["Flask", 'Django', "ASP.NET", "Node.js", "Express", "GIN"],
            devOps: ["Docker", 'Nginx', "Apache Web Server", "Gitlab CI/CD", "Linux", "Azure"],
            database: ["MongoDB", 'PostgreSQL', "Microsoft SQL Server", "MySQL", "Redis", "Firebase"],
        }


    return (
        <div id="skills" className="relative w-full min-h-screen">

            <div className="absolute inset-0 bg-[url(/images/skills.jpg)] bg-no-repeat bg-cover bg-fixed z-0">
                <div className="absolute inset-0 bg-black/80"/>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center w-full  pb-20 pt-16 px-4 text-center">
                <div className={"text-h3 max-md:text-h4 font-[600] text-white text-center mb-32  "}>
                    Skills
                </div>
                <div
                    className={"grid grid-cols-2 max-lg:grid-cols-1 gap-x-20 gap-y-32  md:pe-12 md:ps-24 w-full max-w-[1800px]"}>
                    <div data-aos={"fade-right"} className={"bg-white p-4 rounded-2xl relative"}>
                        <div className={"md:mb-6 text-h4 max-md:text-h5 border-b pb-4 pt-2 text-blue"}>
                            AI & Data
                        </div>
                        <div className={"grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-start mt-2"}>
                            {
                                skillsItems?.aiData.map(item =>
                                    <div
                                        key={item}
                                        className={"flex text-h6 max-md:text-base text-gray-600 item-center font-[600]"}>
                                        <div className={"bg-black size-2 rounded-full mt-1 me-2"}/>
                                        <div>{item}</div>
                                    </div>)
                            }
                        </div>
                        <div
                            className={"absolute -left-16 max-md:left-1/2 max-md:-translate-x-1/2 top-[-80px] max-md:top-[-110px]"}>
                            <Image src={aiIcon} alt={'aiIcon'} className={"size-[140px] max-md:size-[140px]"}/>
                        </div>
                    </div>
                    <div data-aos={"fade-left"} className={"bg-white p-4 rounded-2xl relative"}>
                        <div className={"md:mb-6 text-h4 max-md:text-h5 border-b pb-4 pt-2 text-blue"}>
                            Backend
                        </div>
                        <div className={"grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-start mt-2"}>
                            {
                                skillsItems?.backend.map(item =>
                                    <div
                                        key={item}
                                        className={"flex text-h6 max-md:text-base text-gray-600 item-center font-[600]"}>
                                        <div className={"bg-black size-2 rounded-full mt-1 me-2"}/>
                                        <div>{item}</div>
                                    </div>)
                            }
                        </div>
                        <div
                            className={"absolute -left-16 max-md:left-1/2 max-md:-translate-x-1/2 top-[-80px] max-md:top-[-110px]"}>
                            <Image src={aiIcon} alt={'aiIcon'} className={"size-[140px] max-md:size-[140px]"}/>
                        </div>
                    </div>
                    <div data-aos={"fade-right"} className={"bg-white p-4 rounded-2xl relative"}>
                        <div className={"md:mb-6 text-h4 max-md:text-h5 border-b pb-4 pt-2 text-blue"}>
                            DevOps
                        </div>
                        <div className={"grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-start mt-2"}>
                            {
                                skillsItems?.devOps.map(item =>
                                    <div
                                        key={item}
                                        className={"flex text-h6 max-md:text-base text-gray-600 item-center font-[600]"}>
                                        <div className={"bg-black size-2 rounded-full mt-1 me-2"}/>
                                        <div>{item}</div>
                                    </div>)
                            }
                        </div>
                        <div
                            className={"absolute -left-16 max-md:left-1/2 max-md:-translate-x-1/2 top-[-80px] max-md:top-[-110px]"}>
                            <Image src={aiIcon} alt={'aiIcon'} className={"size-[140px]"}/>
                        </div>
                    </div>

                    <div data-aos={"fade-left"} className={"bg-white p-4 rounded-2xl relative"}>
                        <div className={"md:mb-6 text-h4 max-md:text-h5 border-b pb-4 pt-2 text-blue"}>
                            Database
                        </div>
                        <div className={"grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-start mt-2"}>
                            {
                                skillsItems?.database.map(item =>
                                    <div
                                        key={item}
                                        className={"flex text-h6 max-md:text-base text-gray-600 item-center font-[600]"}>
                                        <div className={"bg-black size-2 rounded-full mt-1 me-2"}/>
                                        <div>{item}</div>
                                    </div>)
                            }
                        </div>
                        <div
                            className={"absolute -left-16 max-md:left-1/2 max-md:-translate-x-1/2 top-[-80px] max-md:top-[-110px]"}>
                            <Image src={aiIcon} alt={'aiIcon'} className={"size-[140px] max-md:size-[140px]"}/>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    );
};


export default Skills;
