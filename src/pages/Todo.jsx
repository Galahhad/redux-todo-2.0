import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart, FaTrashAlt } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Todo = () => {
  const array = useSelector((state) => state.todoArray);
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch({ type: "like_todo", payload: id });
  };

  const handleFavorite = (id) => {
    dispatch({ type: "favorite_todo", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete_todo", payload: id });
  };

  console.log(array);

  return (
    <div className="todos">
      {array.map((item) => {
        return (
          <div key={item.id} className="todo">
            <button onClick={() => handleLike(item.id)}>
              {!item.like ? (
                <FaRegHeart className="icon" />
              ) : (
                <FaHeart className="icon redIcon" />
              )}
            </button>
            <p>{item.text}</p>
            <button onClick={() => handleFavorite(item.id)}>
              {!item.favorite ? (
                <BsBookmark className="icon" />
              ) : (
                <BsBookmarkFill className="icon" />
              )}
            </button>
            <button onClick={() => handleDelete(item.id)}>
              <FaTrashAlt className="icon redIcon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
