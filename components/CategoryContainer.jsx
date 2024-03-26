"use client"
import { getProductDataByCategory } from "@/data/getData";
import Link from "next/link";
import { useParams } from "next/navigation";
import Card from "./Card";

const categories = [
    { id: '00ae', name: 'All', category: 'all' },
    { id: '01ae', name: 'Smartphones', category: 'smartphones' },
    { id: '02be', name: 'Laptops', category: 'laptops' },
    { id: '03ce', name: 'Fragrances', category: 'fragrances' },
    { id: '04de', name: 'Skincare', category: 'skincare' },
    { id: '05ee', name: 'Groceries', category: 'groceries' }
];
/* 
export function generateStaticParams() {

    return categories.map(category => ({
        categoryName: category.id
    }))
} */


const CategoryContainer = () => {

    const params = useParams();

    const data = getProductDataByCategory(params.categoryName || 'all');
    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start ">
            <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4 static">

                {

                    categories.map((category) => (
                        <Link
                            href={`/category/${category.category}`}
                            key={category.id}
                            className={` mt-4 ${params.categoryName === category.category && "text-sky-400  "} block h-6 box-border`}>

                            <span className={`hover:border-b ${params.categoryName === category.category && "border"} p-1 border-black`}>{category.name}</span>
                        </Link>
                    ))
                }

            </div>

            <div className="w-full lg:w-10/12 max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-10rem)] grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10 overflow-y-auto overflow-x-hidden custom-scrollBar p-5 bg-gray-100">
                {data.length === 0 ? (
                    <div className="w-full  py-8">
                        <h2 className="text-2xl text-gray-600">No Products available</h2>
                        <Link href="/category/all" className=" block text-center mt-4 text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            See All Products
                        </Link>
                    </div>
                ) : (
                    data.map(product => <Card key={product.id} product={product} />)
                )}
            </div>
        </section >
    );
};



export default CategoryContainer;



