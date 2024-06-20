// eslint-disable-next-line react/prop-types
const SectionImageText = ({ title, imgUrl, txt, imgPos, btnTxt, btnLnk }) => {
    return (
        <div className='space-y-5 py-10 px-[8%] relative'>
            <div className="grid grid-cols-2">
                {imgPos === "r" ? (
                    <>
                        <div className='flex flex-col justify space-y-10'>
                            <h2 className="text-2xl first-letter:text-3xl text-left">{title}</h2>
                            {
                                // eslint-disable-next-line react/prop-types
                                txt.map((txtElt, index) => (
                                    <p key={index} className='text-md text-justify'>
                                        {txtElt}
                                    </p>
                                ))
                            }

                            {btnTxt !== "" && (
                                <a href={btnLnk} className="font-medium text-blue-600 hover:underline">
                                    {btnTxt}
                                </a>
                            )}
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={imgUrl} alt={title} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex items-center justify-center'>
                            <img src={imgUrl} className='w-[400px]' alt={title} />
                        </div>
                        <div className='flex flex-col justify space-y-10 '>
                            <h2 className="text-2xl first-letter:text-3xl text-left">{title}</h2>
                            {
                                // eslint-disable-next-line react/prop-types
                                txt.map((txtElt, index) => (
                                    <p key={index} className='text-md text-justify'>
                                        {txtElt}
                                    </p>
                                ))
                            }
                            {btnTxt !== "" && (
                                <a href={btnLnk} className="inline-flex font-medium text-blue-600 hover:underline">
                                    {btnTxt}
                                </a>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SectionImageText;
