/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TextImageComponent = ({ img, title, desc, imgpos = "l" }) => {
  // Handle image position based on imgpos prop
  const imgOrder = imgpos === "r" ? "order-last" : "";

  // Function to split description by period (dot) and trim the sentences
  const splitDesc = (desc) => {
    // Split the description by period and filter out empty sentences
    return desc.split(".").filter((sentence) => sentence.trim() !== "");
  };

  const splitDescription = splitDesc(desc);

  return (
    <section className="py-16 px-6 flex flex-wrap items-start justify-between">
      {/* Text Block */}
      <div
        className={`w-full sm:w-1/2 ${imgOrder} p-8 animate__animated animate__fadeIn animate__delay-1s`}
      >
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
        <ul className="mt-4 text-base text-gray-600 list-disc pl-6">
          {splitDescription.map((sentence, index) => (
            <li key={index} className="mt-2">
              {sentence.trim()}.
            </li>
          ))}
        </ul>
      </div>

      {/* Image Block */}
      <div className="w-full sm:w-1/2 animate__animated animate__fadeIn animate__delay-2s">
        <img
          src={img}
          alt={title}
          className="w-full rounded-lg transform transition duration-500 hover:scale-105 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default TextImageComponent;
