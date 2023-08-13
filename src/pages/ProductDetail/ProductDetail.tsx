import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const params = useParams();

    console.log(params);

    return (
        <div>
            <div>
                Test
            </div>
        </div>
    )
};

export default ProductDetail;