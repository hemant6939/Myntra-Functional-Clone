let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemOnHomePage();
    displayBagIcon();   
}



function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();

}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerHTML = bagItems.length;
    }else {
        bagItemCountElement.style.visibility = 'hidden';
    }

}

function displayItemOnHomePage(){
    let itemsContainerElements = document.querySelector('.items-container');
    if (!itemsContainerElements){
        return;
    }

let innerHTML ='';
items.forEach(item => {
    innerHTML += `
            <div class="item-container">
                <img class="intem-image" src="${item.image}" alt="ear stud">
                <div class="rating">
                  ${item.rating.stars}⭐ | ${item.rating.count} 
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="cureent-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="button-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>


            </div>`

})

itemsContainerElements.innerHTML = innerHTML;

}


