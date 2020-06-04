import { addToCart } from "../cart/cart.js";


export const openItemModal = (item) => {

    const addToCartBIG = () => {
        addToCart(item);
        instance.close()
    }
    const instance = basicLightbox.create(`
    <div class="modal">
    <li class="bigListItem">
    <h2 class="bigListItemTitle">${item.title}</h2>

    <div class="bigListItemImgContainer">
        <img src=${item.url} alt=${item.title} class="bigListItemImg"/>
    </div>
    <p class="bigListItemDescription"> <b>Description: </b>${item.description}</p>
    <div class="bigOrder">
        <p class="bigListItemPrice"><b>Price: </b>${item.price} UAH</p>
        <div class="bigListItemCart">
            <img src="../../assets/cart.png" alt="cartImage" class="bigListItemCartIMG" data-category=${item.category} data-id=${item.id}>
        </div>
    </div>
    </li>
      <a>Close</a>
    </div>
`, {
        onShow: (instance) => {
            instance.element().querySelector('a').onclick = instance.close
        }
    })
    instance.show();
    const bigListItemCartIMG = document.querySelector('.bigListItemCartIMG');
    bigListItemCartIMG.addEventListener('click', addToCartBIG);
}