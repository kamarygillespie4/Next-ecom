import Head from "next/head";
import Link from "next/link";

import Layout from "@components/Layout";
import Container from "@components/Container";

import styles from "@styles/Home.module.css";

import products from "../../products.json";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Out Of Place Streetwear</title>
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`}>
                  <img
                    className={styles.image}
                    src={product.image1}
                    alt={`Preview of ${product.title}`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

{
  /* <h3>{product.title}</h3>
<p className={styles.cardDescription}>
  {product.description}
</p>
<p>${product.price}</p> */
}
// <p>
//   <button
//     className="snipcart-add-item"
//     data-item-id={product.id}
//     data-item-image={product.image1}
//     data-item-name={product.title}
//     data-item-price={product.price}
//   >
//     Add to Cart
//   </button>
// </p>
