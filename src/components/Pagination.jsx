const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];
  const activePage = 3;

  return (
    <div className="mt-6 w-full  py-2 border rounded bg-gray-100 hover:bg-gray-200 bg-gray-100 py-4 flex justify-center gap-4">
      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center rounded 
              ${page === activePage ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"} 
              hover:bg-blue-100 transition`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
