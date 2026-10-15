import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  const discount = Number(item.discountPercentage) || 0;
  const finalPrice = (Number(item.price) * (1 - discount / 100)).toFixed(2);

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Discount Percentage:</strong> {discount}%</p>
      {discount > 0 && (
        <p><strong>Final Price:</strong> ${finalPrice}</p>
      )}
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;