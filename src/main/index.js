import React from 'react';
import './index.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function MainPage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function(){
            // 네트워크 통신(터미널>npm install axios설치>import)
            axios.get('https://d94c724c-e57f-409d-ad32-6336409a91d7.mock.pstmn.io/products')
            .then(function(result){
                const products = result.data.products; 
                setProducts(products);
            }).catch(function(error){
                console.log('에러발생: ', error);
            })
        },[]);
    return (
    <div>
        <div id="header">
            <div id="header-area">
                <img src="images/icons/logo.png" alt="지니마켓" />
            </div>
        </div>
        <div id="body">
            <div id="banner">
            <img src="images/banners/banner1.png" alt="첫번째배너" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                            <div class="product-card">
                                <Link className="product-link" to={`/products/${index}`}>
                                    <div>
                                        <img class="product-img" src={product.imageUrl} alt="상품" />
                                    </div>
                                    <div class="product-contents">
                                        <span class="product-name">{product.name}</span>
                                        <span class="product-price">{product.price}원</span>
                                        <div class="product-seller">
                                            <img class="product-avatar" src="images/icons/avatar.png" alt="판매자" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
        <div id="footer"></div>
    </div>
    );
}

export default MainPage;