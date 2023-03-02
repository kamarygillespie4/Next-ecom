import Head from "next/head";
import { FaShoppingCart } from "react-icons/fa";
import { Dropdown } from "@nextui-org/react";
import React from "react";

import Layout from "@components/Layout";
import Container from "@components/Container";

import styles from "@styles/Product.module.css";

import products from "../../../products.json";

export default function Product({ product }) {
  const [selected, setSelected] = React.useState(new Set(["Select a size"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

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

            <ul className={styles.descriptionList}>
              {product.description.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <div className={styles.dropDownDiv}>
              {/* <Dropdown className={styles.dropDown}>
                <Dropdown.Button light className={styles.dropDownButton}>
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  {product.sizes.map((size) => {
                    return (
                      <Dropdown.Item
                        key={size}
                        value={size}
                        className={styles.dropDownItem}
                      >
                        {size}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown> */}
            </div>

            <img className={styles.sizeChart} src={product.sizeChart} />

            <p>
              <button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-image={product.image1}
                data-item-name={product.title}
                data-item-url={`/products/${product.id}`}
                data-item-price={product.price}
                data-item-custom1-name="Selected Size"
                data-item-custom1-type="readonly"
                data-item-custom1-value={selectedValue}
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
