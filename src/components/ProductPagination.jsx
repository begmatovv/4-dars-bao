import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const ProductPagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  function handlePageChange(pageNumber) {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}.`.toString());
  }
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(pageCount);
          }}
          className="btn btn-xs sm:btn-md join-item"
        >
          Prev
        </button>
        {pages.map((itemPage) => {
          return (
            <button
              onClick={() => handlePageChange(itemPage)}
              key={itemPage}
              className={`btn btn-xs sm:btn-md join-item border-none ${
                itemPage === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {itemPage}
            </button>
          );
        })}

        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage < 1) nextPage = 1;
            handlePageChange(pageCount);
          }}
          className="btn btn-xs sm:btn-md join-item"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPagination;
