import Image from "next/image";
import database from "../../../public/images/database-management.png"
import backend from "../../../public/images/backend.png"
import devops from "../../../public/images/devops.png"
import ai from "../../../public/images/ai.png"
import skills from "../../../public/images/skills.jpg";

const Skills = () => {


    const skillsItems = [
        {
            title: "AI & Data",
            icon: ai,
            data: ["Keras", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
            animation: "fade-right"
        },
        {
            title: "Backend",
            icon: backend,
            data: ["Flask", "Django", "ASP.NET", "Node.js", "Express", "GIN"],
            animation: "fade-left"
        },
        {
            title: "DevOps",
            icon: devops,
            data: ["Docker", "Nginx", "Apache Web Server", "Gitlab CI/CD", "Linux", "Azure"],
            animation: "fade-right"
        },
        {
            title: "Database",
            icon: database,
            data: ["MongoDB", "PostgreSQL", "Microsoft SQL Server", "MySQL", "Redis", "Firebase"],
            animation: "fade-left"
        }
    ];


    return (
        <div id="skills" className="relative w-full min-h-screen">

            <div className="absolute inset-0 bg-no-repeat bg-cover bg-fixed z-0"  style={{backgroundImage: `url('${skills?.src}')`}}>
                <div className="absolute inset-0 bg-black/80"/>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center w-full  pb-20 pt-10 px-4 text-center">
                <div className={"text-h3 max-md:text-h4 font-[600] text-white text-center mb-32 mt-12"}>
                    Skills
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-20 gap-y-32 md:pe-12 md:ps-24 w-full max-w-[1800px]">
                    {skillsItems.map((section) => (
                        <div
                            key={section.title}
                            data-aos={section.animation}
                            className="bg-white p-4 rounded-2xl relative pb-6"
                        >
                            <div className="md:mb-6 text-h4 max-md:text-h5 border-b pb-4 pt-2 text-blue">
                                {section.title}
                            </div>
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-start mt-2">
                                {section.data.map(item => (
                                    <div
                                        key={item}
                                        className="flex text-h6 max-md:text-bodyMd text-gray-600 item-center font-[600]"
                                    >
                                        <div className="bg-black size-2 rounded-full mt-2 me-2" />
                                        <div>{item}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -left-8 max-md:left-1/2 max-md:-translate-x-1/2 top-[-55px] max-md:top-[-80px]">
                                <Image placeholder="blur" src={section.icon} alt={section.title} className="size-[100px]" />
                            </div>
                        </div>
                    ))}
                </div>


            </div>


        </div>
    );
};


export default Skills;
