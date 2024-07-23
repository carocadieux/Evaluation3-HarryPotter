<template>
  <div class="entete">
    <h1 class="titre">Mes Favoris</h1>
  </div>

  <div class="carte">
    <div v-for="personnage in store.favoris" :key="personnage.id">
      <img  v-if="personnage.image" class="personnage" :src="personnage.image" :alt="personnage.name">
      <img v-else class="personnage" src="https://via.placeholder.com/150"  alt="Placeholder"/>
      <h2>{{ personnage.name }}</h2>
      <button @click="retirerFavori(personnage)" class="favoris">Retirer des Favoris</button>
    </div>
  </div>

  
</template>

<script setup>
  
  
  import { useFavoriStore } from '../stores/useFavoriStore'; // Importez votre store


  const store = useFavoriStore(); // Utilisez votre store
  const retirerFavori = (personnage) => store.retirerFavori(personnage.id);

 

 
</script>

<style scoped>


</style>

  