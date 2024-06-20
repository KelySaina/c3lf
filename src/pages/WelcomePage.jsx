import WelcomeImg from '/images/Welcome.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const WelcomePage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className='space-y-5 py-10 px-[8%] relative'>
                <div className="grid grid-cols-2">

                    <div className='flex items-center justify-center'>
                        <img src={WelcomeImg} className='w-[400px]' alt={"title"} />
                    </div>
                    <div className='flex flex-col justify space-y-6 '>
                        <h2 className="text-2xl first-letter:text-3xl text-left">Welcome to Club Linux et Logiciels Libres de Fianarantsoa website</h2>
                        <p>This site is the result of a collaboration between several open-source enthusiasts, individuals eager to learn how to use Git.</p>
                        <p>We encourage everyone who wants to contribute to join us.</p>
                        <a
                            href="https://github.com/KelySaina/c3lf/blob/main/README.md"
                            target="_blank"
                            className="flex justify-center px-6 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                        >
                            I want to CONTRIBUTE
                        </a>
                        <a href="/home" className="flex justify-center px-6 py-2 bg-gray-200 font-medium text-blue-700 hover:bg-gray-300 rounded-lg">
                            Take a tour
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WelcomePage;