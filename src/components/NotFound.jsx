// eslint-disable-next-line react/prop-types
const NotFound = ({ pageName }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page <b>{pageName}</b> Not Found</h2>
                <p className="text-gray-600 mb-4">This page is currently under developpement</p>
                <p className="text-gray-600 mb-4">We invite your contribution to the development of this page. Interested?</p>
                <div className="grid grid-cols-2 gap-4 flex items-center">
                    <a href="/home" className="font-medium text-blue-700 hover:underline">
                        Back to Home
                    </a>
                    <a
                        href="https://github.com/KelySaina/c3lf/blob/main/README.md"
                        target="_blank"
                        className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                    >
                        I want to CONTRIBUTE
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NotFound;
