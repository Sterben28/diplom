const createItemMarkup = (item) => {
    return `
    <li class="listItem" data-licategory=${item.category} data-liid=${item.id}>
    <h2 class="listItemTitle">${item.title}</h2>

    <div class="listItemImgContainer">
        <img src=${item.url} alt=${item.title} class="listItemImg"/>
    </div>
    <p class="listItemDescription"> <b>Description: </b>${(item.description.length > 180) ? (item.description.slice(0, 180) + ' ...') : item.description}</p>
    <div class="order">
        <p class="listItemPrice"><b>Price: </b>${item.price} UAH</p>
        <div class="listItemCart">
            <img src="../../assets/cart.png" alt="cartImage" class="listItemCartIMG" data-category=${item.category} data-id=${item.id}>
        </div>
    </div>
    </li>
    `
}

export const createMarkup = (array) => {
    let markup = '';
    for (const item of array) {
        markup = markup + createItemMarkup(item)
    }
    return markup;
}

const createItemNews = (item) => {
    return `
    <li class="listItem">
    <h2 class="listItemTitle">${item.title}</h2>
    <p class="listItemDescription">${item.content}</p>
    </li>
    `
}

export const createNewsMarkup = (array) => {
    let markup = '';
    for (const item of array) {
        markup = markup + createItemNews(item)
    }
    return markup;
}