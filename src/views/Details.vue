<template>
    <div class="entete">
        <h1 class="titre"> Personnage </h1>
    </div>

<div class="carte" v-if="details[0]" >
        <div class="gauche">
            <img v-if="details[0].image" class="personnage" :src="details[0].image" :alt="details[0].name">
            <img v-else class="personnage" src="https://via.placeholder.com/150"  alt="Placeholder"/>
            <h2>{{ details[0].name }}</h2>
        </div>

        <div class="droite">
            <div class="groupe">
                <p>On l'appelle aussi</p>
                <ul v-if="details[0].alternate_names">
                    <li v-for="(nameDetail, index) in details[0].alternate_names" :key="index">{{ removeBrackets(nameDetail) }}</li>
                </ul>
            </div>

            <div class="groupe">
                <p>Espèces</p>
                <h3>{{ details[0].species }}</h3>
            </div>

            <div class="groupe">
                <p>Genre</p>
                <h3>{{ details[0].gender }}</h3>
            </div>

            <div class="groupe">
                <p>Date de naissance</p>
                <h3>{{ details[0].dateOfBirth }}</h3>
            </div>

            <div class="groupe">
                <p>Année de naissance</p>
                <h3>{{ details[0].yearOfBirth }}</h3>
            </div>

            <div class="groupe">
                <p>Ancêtre</p>
                <h3>{{ details[0].ancestry }}</h3>
            </div>

            <div class="groupe">
                <p>Maison</p>
                <h3>{{ details[0].house }}</h3>
            </div>

            <div class="groupe">
                <p>Patronus</p>
                <h3>{{ details[0].patronus }}</h3>
            </div>
        </div>
    </div>


    <RouterView></RouterView>
</template>

<script setup>

    import { onMounted } from 'vue'
    import getPersonnages from '../composables/api'
    import { useRouter } from 'vue-router'
   

    const router = useRouter()
    const {details, rechercherUn } = getPersonnages()

    const removeBrackets = (name) => {
        // Supprimer les crochets de la chaîne
        return name.replace(/\[|\]/g, '');
    };


    // Charger les détails du personnage en fonction de l'ID
    onMounted(async () => {
        await rechercherUn(router.currentRoute.value.params.id)
    })

   

    

   

</script>

<style scoped>
 div.entete{
    background-color: rgb(86, 98, 117);;
 }
</style>
