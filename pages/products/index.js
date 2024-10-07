import Layout from "@/components/layout";
import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import CardImage from "/public/images/product.jpg"
import Cards from "@/components/cards";

const Products = () => {
    return (
        <>
            <Layout>
                <h3 className="text-[32px] text-white text-center mb-6 uppercase">Products</h3>
                <Box component="section" className="grid grid-cols-4 gap-8 w-full">
                    <Cards CardImage={CardImage} />
                    <Cards CardImage={CardImage} />
                    <Cards CardImage={CardImage} />
                    <Cards CardImage={CardImage} />
                    <Cards CardImage={CardImage} />
                </Box>
            </Layout>
        </>
    )
}

export default Products;