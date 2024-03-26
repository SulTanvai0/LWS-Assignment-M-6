import ProductDetails from "@/components/ProductDetails";

export const metadata = {
  title: "Product Details Page",
};

const productPage = () => {
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <ProductDetails />
      </section>
    </main>
  );
};

export default productPage;
