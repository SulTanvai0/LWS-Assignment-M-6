import Link from "next/link";

const WrongID = () => {
    return (
        <>
            <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-red-600 text-lg lg:text-xl font-semibold">Oops! Wrong product ID.</p>
                <Link href="/" className="text-white bg-blue-500 px-6 py-3 lg:px-4 lg:py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
                    Go Home
                </Link>
            </div>
        </>
    );
};

export default WrongID;