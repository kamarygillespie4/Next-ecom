import Head from "next/head";
import { FaShoppingCart } from "react-icons/fa";

import Layout from "@components/Layout";
import Container from "@components/Container";

import styles from "@styles/Product.module.css";

import products from "../../../products.json";

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{product.title} - Snipcart Store</title>
      </Head>
      <Container>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <img src={product.image1} alt={`Preview of ${product.title}`} />
          </div>

          <div className={styles.productDetails}>
            <h1>{product.title}</h1>

            <p>${product.price}</p>
            <p>{product.description}</p>

            <img className={styles.sizeChart} src={product.sizeChart} />

            <p>
              <button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-image={product.image1}
                data-item-name={product.title}
                data-item-url={`/products/${product.id}`}
                data-item-price={product.price}
                data-item-custom1-name="Size"
                data-item-custom1-options="Small|Medium|Gold[+300.00]"
              >
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const product = products.find(({ id }) => id === productId);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id,
        },
      };
    }),
    fallback: false,
  };
}
