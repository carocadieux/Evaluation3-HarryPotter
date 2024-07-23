<template>
    <nav>
        <h3>Harry Potter</h3>
        
        
        <div>
            <router-link :to="{name: 'acceuil'}">Accueil</router-link>
            <router-link :to="{name: 'favoris'}">Favoris</router-link>
            <router-link :to="{name: 'liste'}">Personnages</router-link>
        </div>

        
    </nav>

</template>

<script setup>
    
</script>

<style scoped>
     nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
    }
    a{
        text-decoration: none;
        padding: 10px;
        color: white;
        
    }
    
    h3{
        color: white;
        padding: 10px;
    }
</style>