import noImage from "../../../public/images/no-image.svg"
import saba from "../../../public/images/saba.jpg"
import mahsan from "../../../public/images/mahsan.jpg"
import tehran from "../../../public/images/tehran.jpg"
import bazar from "../../../public/images/cafebazaar.jpg"
import elmosanat from "../../../public/images/elmosanat.jpg"
import Image, {StaticImageData} from "next/image";


export type TTimeLineItems = {
    title: string,
    description: string,
    date: string,
    image?: StaticImageData | string,
}
const WorkExperience = () => {


    const workItems: TTimeLineItems[] = [
        {
            title: "Data Scientist",
            description: "Freelance",
            date: "Aug 2024 - Present",
            image: noImage,
        },
        {
            title: "Data Scientist",
            description: "Saba Tamin Management Services",
            date: "Jun 2022 - Jun 2024 2 years 1 month",
            image: saba,
        },
        {
            title: "Data Scientist",
            description: "Mahsan",
            date: "Feb 2020 - Apr 2022 2 years 3 months",
            image: mahsan,
        },
        {
            title: "Research Assistant",
            description: "University of Tehran",
            date: "Nov 2019 - Apr 2021 1 year 6 months",
            image: tehran,
        },
        {
            title: "Data Scientist",
            description: "Cafe Bazaar",
            date: "Nov 2019 - Feb 2020 4 months",
            image: bazar,
        },
        {
            title: "Software Engineer",
            description: "IUST Distributed Systems Lab",
            date: "Sep 2016 - Dec 2018 2 years 4 months",
            image: noImage,
        },
        {
            title: "Teacher Assistant",
            description: "Iran University of Science and Technology",
            date: "Sep 2015 - Nov 2018 3 years 3 months",
            image: elmosanat,
        },
    ]
    return (
        <div id="workExperience" className={"px-6"}>
            <div className={"text-h3  max-md:text-2xl font-[600] text-black text-center my-16  max-md:my-12"}>
                Work Experience
            </div>
            <div className={"w-fit  mx-auto"}>
                <ol className="relative border-s border-gray-300">

                    {
                        workItems.map(item => <div data-aos={"fade-right"} key={item?.title}>
                            <li className="mb-10 ms-8 flex gap-4">
                                <div>
                                    <div>
                                        {item?.image && <Image src={item?.image} alt={`image=${item?.image}`} className={'size-[70px] max-lg:size-[60px]'}/>}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="absolute w-5 h-5 bg-gray-400 rounded-full mt-1.5 -start-2.5 border border-white "></div>
                                    <div
                                        className="md:mb-2 max-lg:text-captionMd text-captionLg font-normal leading-none text-gray-3 ">
                                        {item?.date}
                                    </div>
                                    <div
                                        className="text-h7 max-lg:text-lg font-semibold text-gray-900">{item?.title}</div>
                                    <div
                                        className="mb-4 text-captionLg font-normal text-blue ">{item?.description}</div>
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 ">Learn
                                        more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg></a>
                                </div>

                            </li>
                        </div>)
                    }


                </ol>
            </div>
        </div>
    );
};

export default WorkExperience;
