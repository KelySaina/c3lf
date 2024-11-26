// eslint-disable-next-line react/prop-types
const HomeCardComponent = ({ Img, Title, Desc }) => {
  return (
    <div>
      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        {/* Image on the left */}
        <img
          src={Img}
          alt={Title}
          className="w-20 h-20 object-cover rounded-full mr-6"
        />

        {/* Title and Description on the right */}
        <div>
          <h4 className="text-xl font-bold text-gray-800">{Title}</h4>
          <p className="text-gray-600 mt-2 text-left">{Desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCardComponent;
