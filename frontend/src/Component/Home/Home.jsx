import useGetBooks from '../../../utils/useGetBooks';
import Card from '../Card/card';

function Home() {
    const { books } = useGetBooks();

    return (
        <>
            <div className="bg-gray-800 text-white min-h-screen">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center h-[500px] w-full">
                    <div className="flex justify-center">
                        <img src="logo1.png" alt="Logo" className="h-40 w-40" />
                    </div>
                    <h1 className="text-6xl font-bold text-cyan-400">BooꓘMate</h1>
                    <h2 className="text-2xl mt-2">Naye Bharat Ka Naya BookMate</h2>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-cyan-400 text-black font-medium px-10 py-2 rounded-full border-2 border-gray-600 hover:scale-110 transition">Subscribe</button>
                        <button className="bg-gray-700 text-white font-medium px-10 py-2 rounded-full border-2 border-gray-600 hover:scale-110 transition">5-Days Trial</button>
                    </div>
                </div>

                {/* Books Section */}
                <div className="bg-gray-900 p-8">
                    <h1 className="text-4xl font-bold text-center mb-8">Books..</h1>
                    <Card />

                    <div className="flex flex-wrap justify-center gap-6">
                        {books.length > 0 ? (
                            books.map((book, index) => (
                                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition">
                                    <div className="text-sm text-gray-400">#{index + 1}</div>
                                    <h3 className="text-xl font-semibold">{book.bookName}</h3>
                                    <p className="text-sm text-gray-300">{book.bookAuthorName}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No books available</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
