import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {

    const { thumbnail, category, description, title, price, discountPercentage, id } = product;


    const priceAfterDiscount = price - discountPercentage;

    return (
        <div>

            <Image
                src={thumbnail} alt="Product Thumbnail" width={280} height={320}
                className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform`} />


            <h2 className="text-sm lg:text-base mt-2">
                <Link className="text-base font-bold" href={`/productPage/${id}`}>
                    {title}
                </Link>
                <span className="text-[#919090] hover:text-sky-500 hover:underline ">
                    <Link href={`/category/${category}`}>({category})</Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm ">{description}</p>

            <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">${price}</span> ${priceAfterDiscount}</p>
        </div >
    );
};

export default Card;