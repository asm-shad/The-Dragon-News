import { FaEye, FaStar } from "react-icons/fa";

const NewsCart = ({ news }) => {
  const {
    title,
    details,
    author,
    image_url,
    rating,
    total_view,
    published_date,
  } = news;

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200">
      {/* Image */}
      <figure className="relative h-64">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src={author?.img || "https://via.placeholder.com/50"}
              alt={author?.name || "Anonymous"}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">
                {author?.name || "Anonymous"}
              </p>
              <p className="text-xs text-gray-500">{published_date}</p>
            </div>
          </div>
          <div>
            <button className="text-gray-400 hover:text-red-500">
              <FaStar />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-600 mb-4">
          {details.length > 100 ? `${details.slice(0, 100)}...` : details}{" "}
          <button className="text-blue-500 underline">Read More</button>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium">
              {rating?.number || "N/A"}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span className="text-sm font-medium">{total_view || 0} Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
