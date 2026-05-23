// Complete core product source inventory
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelectorNode = document.querySelector("#productName");
    
    if (productSelectorNode) {
        products.forEach(productItem => {
            // Instantiate structural option fragment 
            const dynamicOption = document.createElement("option");
            
            // Map parameters according to assignment guidelines
            dynamicOption.value = productItem.id;
            
            // Format typography case for professional look
            dynamicOption.textContent = productItem.name
                .toLowerCase()
                .split(' ')
                .map(wordToken => wordToken.charAt(0).toUpperCase() + wordToken.slice(1))
                .join(' ');
                
            // Append down into DOM structure targeting operational element
            productSelectorNode.appendChild(dynamicOption);
        });
    }
});