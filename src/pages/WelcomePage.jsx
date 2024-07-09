import WelcomeImg from '/images/Welcome.png'
import { Link } from "react-router-dom";

const WelcomePage = () => {

    return (
        <div className='space-y-5 py-10 px-[8%] relative'>
            <div className="md:flex md:items-center md:space-x-6">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <div className='flex items-center justify-center'>
                        <img src={WelcomeImg} className='w-full md:max-w-[500px] h-auto rounded-lg' alt={"title"} />
                    </div>
                </div>

                {/* Text and Buttons Section */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h2 className="text-2xl md:text-3xl text-left">Welcome!!!</h2>
                    <div className='text-justify'>
                        <p>This site is the result of a collaboration between several open-source enthusiasts, individuals eager to learn how to use Git.</p>
                        <p>We encourage everyone who wants to contribute to join us.</p>
                    </div>

                    <div className='flex flex-col space-y-2 mt-4 md:mt-6'>
                        <a
                            href="https://github.com/KelySaina/c3lf/blob/main/README.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center px-6 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                        >
                            I want to CONTRIBUTE
                        </a>
                        <Link href={"/home"} className="flex justify-center px-6 py-2 bg-gray-200 font-medium text-blue-700 hover:bg-gray-300 rounded-lg">
                            Take a tour
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className='flex justify-center mt-6'>
                <p className="text-center italic relative w-full md:w-[max-content] before:absolute before:inset-0 before:bg-white before:animate-typewriter">
                    “Promouvoir l&apos;utilisation des logiciels libres dans le monde Universitaire et Professionnel.”
                </p>
            </div>
        </div>
    );
}

export default WelcomePage;
