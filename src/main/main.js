axios.get('https://d94c724c-e57f-409d-ad32-6336409a91d7.mock.pstmn.io/products').then(function(result){
  console.log('통신 결과 : ', result);
  const products = result.data.products;

  let productsHtml = '';
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productsHtml = productsHtml + '<div class="product-card">'+
    '<div>' +
    '<img class="product-img" src="' +product.imageUrl+ '" alt="상품">' +
    '</div>' +
    '<div class="product-contents">' +
    '<span class="product-name">' +product.name+ '</span>' +
    '<span class="product-price">' +product.price+'원' + '</span>' +
    '<div class="product-seller">' +
    '<img class="product-avatar" src="images/icons/avatar.png" alt="판매자">' +
    '<span>' +product.seller+ '</span>' +
    '</div>' +
    '</div>' +
    '</div>';
  }

  document.querySelector('#product-list').innerHTML = productsHtml;

}).catch(function(error){
  console.error('error 발생 : ', error);
})

