/*
 * @Author: hunaisong 
 * @Date: 2017-12-26 17:30:58 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-12-26 17:51:58
 */
// import React from 'react'
// // 样式的引用，以对象的形式引入，然后以对象的形式去使用
// import styles from './Products.css'

// // 定义一个页面，然后呢，放在路由中显式
// const Products = (props) => (
//     <div className={styles.products} >商品列表</div>
// )

// export default Products
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);