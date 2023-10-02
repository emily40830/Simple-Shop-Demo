import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductCard = (props) => {
  const { id, title, price, imageUrl } = props;
  const description = "$" + price;

  return (
    <Link to={`/p/${id}`} className="mb-3 mr-1">
      <Card hoverable cover={<img alt={title} src={imageUrl} />}>
        <Meta title={title} description={description} />
      </Card>
    </Link>
  );
};

export default ProductCard;
