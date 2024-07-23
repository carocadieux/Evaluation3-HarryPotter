<template>
    <div class="entete">
        <h1 class="titre">Personnages</h1>
    </div>
    <div class="carte">
        
        <div @click="pageDetails(personnage.id)" v-for="personnage in personnageAPI.liste.value" :key="personnage.id">
            <RouterLink :to="{name: 'details', params: {id: personnage.id}}">
                <img class="personnage" :src="personnage.image" :alt="personnage.name">
            </RouterLink>
                <h2>{{ personnage.name }}</h2>
            
                <button  @click.stop="ajouterFavori(personnage)" class="favoris">
                    <RouterLink :to="{name: 'favoris'}"> Ajouter aux Favoris</RouterLink>
                </button>
            
        </div>
        
    </div>
    <RouterView></RouterView>
</template>

<script setup>
   
    import getPersonnages from '../composables/api'
    import router from '../router/index'
    import { useFavoriStore } from '../stores/useFavoriStore';

    
    const appStore = useFavoriStore();
    const personnageAPI = getPersonnages();
    personnageAPI.rechercherTous();

    const pageDetails = (id) =>{
        router.push({name: 'details', params:{id}})
    }

    const ajouterFavori = (personnage) => appStore.ajouterFavori(personnage);

    
    
</script>

<style >
    .entete{
        background-color: rgb(86, 98, 117);
    }
    h1.titre{
        text-align: center;
        margin: 0;
        padding: 30px;
    }
    div.carte{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-color:  rgb(189, 110, 73);
    }
    img.personnage{
        margin: 5rem 5rem 0 5rem;
        width: 200px;
        height: 300px;
        object-fit: cover;
        border: 5px solid rgb(253, 253, 214);
    }
    h2{
        text-align: center;
        text-decoration: none;
    }
    button.favoris{
        display: block;
        margin: auto;
        margin-bottom: 10px;
        padding: 0;
    }
    button.favoris a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        padding: 0;
    }
</style>