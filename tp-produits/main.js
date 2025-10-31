import { PRODUCTS } from "./data/products.js";
import {isExpired} from "./utils/date.js";

//Affichage des produits
PRODUCTS.forEach((p) => console.log(p));


//Affichage de noms des produits
PRODUCTS.forEach((p) => console.log(p.name));

//Appel à la fonction qui filtre les produits expirés; ici on l'applique sur listes des produits "PRODUCTS" et on enregistre le resultat dans une variable
const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);

//Fonction fléchée qui calcule la valeur totale du stock, elle fait parcourir le tableau des produits PRODUCTS ensuite calculer le tout
// et puis afficher le resultat
const total = PRODUCTS.reduce(
    (somme, p) => somme + p.price * p.quantity,
    0
);
console.log("Valeur totale du stock :", total, "MAD");

//Fonction pour filtrer la liste des produits, le but ici, c'est de créer une nouvelle liste qui contient seulement les produits en promotion
const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));

//Fonction pour trier la liste des produits par ordre croissant
const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p => p.name));



//Fonction qui prend en param un delai(en milliseconds) et elle le fait passe à une promesse
const delay = (ms) => new Promise(res => setTimeout(res, ms));

//Fonction asynchrone pour ajouter un produit à la liste PRODUCTS, elle attend 300 ms pour chercher le plus valeur d'in ID dans la liste
// ensuite, elle incrémente sa valeur par 1 puis elle affecte la nouvelle valeur au nouveau produit et l'ajoute dans la liste
const addProduct = async (list, newP) => {
    await delay(300);
    const id = Math.max(...list.map(p => p.id)) + 1;
    return [...list, { id, ...newP }];
};

const newList = await addProduct(PRODUCTS, {
    name: "Savon",
    category: "Hygiène",
    price: 5,
    quantity: 10,
    expiryDate: "2026-01-01",
    tags: ["hygiene"]
});

console.log("Après ajout :", newList.length, "produits");
