//Fonction pour filter les produits expiré
export const isExpired = (isoDate, ref = new Date()) =>
    new Date(isoDate) < ref;
