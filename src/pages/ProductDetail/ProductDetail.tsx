import { useQuery } from "@hooks/UseQuery";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams();

    // const { data } = useQuery(API_GET)


    useEffect(() => {
        // Fetch product details here;

    }, [])

    return (
        <div>
            <div>
                Test
            </div>
        </div>
    )
};

export default ProductDetail;