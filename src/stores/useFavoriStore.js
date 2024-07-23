import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoriStore = defineStore('favoris', ()=>{
  const favoris = ref([])


  const ajouterFavori =(personnage) =>{
    favoris.value.push(personnage);
    console.log(favoris)
  }

  const retirerFavori =(id) =>{
    favoris.value = favoris.value.filter((p) => p.id !== id);
  }

  const gererFavori=(id, personnage) =>{
    const estFavori = favoris.some((p) => p.id === id);

    if (estFavori) {
      retirerFavori(id);
    } else {
      ajouterFavori(personnage);
    }
  }

  return { favoris, ajouterFavori, retirerFavori, gererFavori }

})



















