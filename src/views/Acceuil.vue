<template>
    <header class="container-header">
        <img class="img-header" src="../assets/aditya-vyas-5qUJfO4NU4o-unsplash.jpg" alt="chateau hogwarts" />

        <div class="bottom-right">
            <h1>Que la magie opère!</h1>
        </div>
    </header>

    <section class="accueil">
        <div class="presentation">
            <img class="img-presentation" src="../assets/tuyen-vo-tS-jh0M6JoA-unsplash.jpg" alt="parchemin" />
            <div class="presentation-text">
                <h1>Bienvenue dans le monde d'Harry Potter</h1>
                <p>Bienvenue sur l'application personnages d'Harry Potter.<br> Vous pourrez tout savoir sur vos personnages préférés<br> et découvrir des secrets bien gardés!</p>
            </div>
        </div>

        <div class="presentation-details">
            <div class="presentation-text">
                <h1>Vos personnages favoris</h1>
                <p>À l'aide de la recherche,<br> trouvez le personnage que vous désiré.<br>Collectionnez les cartes de vos favoris<br> en les ajoutants à votre liste!</p>
            </div>   
            <img class="img-presentation-details" src="../assets/artem-maltsev-3n7DdlkMfEg-unsplash.jpg" alt="sorcier avec baguette" />
        </div>
    </section>

    <div class="recherche">
        <label for="recherche"></label>
        <input type="text" id="recherche" placeholder="Entrez le nom du personnage" @input="rechercherParNom(nom)" v-model="nom"><br>    
        <button @click="effectuerRecherche">Rechercher</button>
    </div>
    <h1 class="personnage-trouvé" v-if="liste.length > 0">
         Personnages trouvés: {{ liste.length }}
    </h1>
    <h1 class="aucun-personnage" v-if="rechercheEffectuee && liste.length === 0">
        Aucun personnage trouvé
    </h1>

    <div class="carte">
        <div  @click="pageDetails(personnage.id)" v-for="personnage in liste" :key="personnage"  :personnage="personnage">
            <RouterLink :to="{name: 'details', params: {id: personnage.id}}">
                <img v-if="personnage.image" class="personnage" :src="personnage.image" :alt="personnage.name">
                <img v-else class="personnage" src="https://via.placeholder.com/150"  alt="Placeholder"/>
            </RouterLink>
                <h2>{{ personnage.name }}</h2>
        
            
                <button @click.stop="appStore.ajouterFavori(personnage)" class="favoris btn-favori">
                    <RouterLink :to="{name: 'favoris'}">Ajouter aux Favoris</RouterLink>        
                </button>
            
        </div>
    </div>

    

    
    <div class="inscription" >
        <form @submit.prevent ="valider">

            <div>
                <h2>Inscription à l'infolettre</h2>
                
                <p class="form-valide" v-if="formvalide">Merci de vous être inscris!</p>

                <div class="groupe" v-if="afficherFormulaire">
                    <label for="nom"></label><br>
                    <input type="text" placeholder="Entrez votre nom" id="nom" v-model.trim="nomForm"><br>
                    <p v-if="erreurs.nomForm">Veuillez remplir ce champ</p>
                </div>

                <div class="groupe" v-if="afficherFormulaire">
                    <label for="email"></label><br>
                    <input type="email" placeholder="Entrez votre email" id="email" v-model.trim="email"><br>
                    <p v-if="erreurs.email">Veuillez remplir ce champ</p>
                </div>

                
                <div class="bouton" v-if="afficherFormulaire">
                    <button   type="submit">Valider</button>
                </div>
                
                
            </div>
        </form>
    </div>

    
    <RouterView></RouterView>
</template>

<script setup>
    import router from '../router/index'
    import getPersonnages from '../composables/api'
    import { ref } from 'vue';
    import { useFavoriStore } from '../stores/useFavoriStore';


   
    const appStore = useFavoriStore();

    const {liste, rechercherParNom} = getPersonnages(); 
    const nom = ref('')
    const rechercheEffectuee = ref(false);
    
    


    const pageDetails = (id) =>{
        router.push({name: 'details', params:{id}})
    }

    const effectuerRecherche = () => {
        rechercherParNom(nom.value); // Appeler la fonction de recherche
        rechercheEffectuee.value = true; // Définir la recherche comme effectuée
    }


    /////////// formulaire
    const nomForm = ref('')
    const email = ref('');
    

    const erreurs = ref({
        nomForm: false,
        email: false,
    });


    let formvalide = false

    const resetErreurs = () => {
        erreurs.value = {
            nomForm: false,
            email: false,
            
        };
    };

    let afficherFormulaire = true;

    const valider = () => {
        

        

        resetErreurs()

        let valide = true

        if(nomForm.value === "")
        {
            erreurs.value.nomForm = true
            valide = false
        }

        if(email.value === "")
        {
            erreurs.value.email = true
            valide = false
        }

        if (!valide) {
            erreurs.nomForm,
            erreurs.email
        } else {
      
            formvalide = true;

            afficherFormulaire = false;
        
        }

        
    }


    



    


</script>

<style scoped>
    
    img.img-header{
        max-height: 850px;
        width: 100%;
        object-fit: cover;
        margin: 0;
       
        
    }
    .accueil{
        background-color: rgb(86, 98, 117);
    }
    .presentation-details{
        display: flex;
        justify-content: center;
    }
    .presentation{
        display: flex;
        justify-content: center;
    }
    .presentation-text{
        margin: 40px 0 0 0;
       
    }
    .presentation-text h1{
        font-size: 30px;
    }
    .presentation-text p{
        font-size: 20px;
        line-height: 2.5rem;
    }
    img.img-presentation{
        max-height: 400px;
        width: 50%;
        object-fit: cover;
        margin: 20px;
    }
    .img-presentation-details{
        max-height: 400px;
        width: 50%;
        object-fit: cover;
        margin: 20px;
    }
    .carte{
        background-color: rgb(189, 110, 73);
    }

    img.personnage{
        border: 5px solid rgb(253, 253, 214);
    }
    .personnage-trouvé{
        background-color: rgb(189, 110, 73);
        text-align: center;
        margin: 0;
        padding: 20px;
    }
    .aucun-personnage{
        background-color: rgb(189, 110, 73);
        text-align: center;
        margin: 0;
        padding: 20px;
    }
    .container-header {
        position: relative;
        text-align: center;
        color: white;
        font-size:40px;
        margin: 0;
        padding: 0;
        
    }
    .bottom-right {
        position: absolute;
        bottom: 20px;
        right: 30px;
        margin: 0;
    }
    div.recherche{
        height: 55px;
        background-color: black;
        display: flex;
        justify-content: center;
    }
    input{
        margin: 10px;
        font-size: 15px;
        text-align: center;
        
    }
    .groupe p{
        margin: 0;
        color: red;
    }
    .groupe{
        background-color: black;
        display: flex;
        justify-content: center;
        
    }
    .inscription{
        margin: 0;
    }
    .bouton{
        background-color: black;
        display: flex;
        justify-content: center;
    }
    button{
        width: 200px;
        margin: 10px;
    }
    .form-valide{
        background-color: black;
        color: white;
        text-align: center;
        padding: 60px;
        margin: 0;
    }

    .btn-favori{
        display: block;
       
      
    } 

    .btn-favori a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }
</style>