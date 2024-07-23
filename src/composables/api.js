import { ref } from "vue"

export default function getPersonnages(){
    const liste = ref([])
    const details = ref([])

    const rechercherParNom = (nom)=>{
        if(nom !== "") //on vérifie si le nom n'est pas vide
        {
            fetch("https://hp-api.onrender.com/api/characters?name=" + nom)
                .then(response=>{
                    return response.json()
                })

                
                .then(data=>{
                     // Filtrer les personnages dont le nom contient les lettres spécifiées
                     const filteredCharacters = data.filter(personnage =>
                        personnage.name.toLowerCase().includes(nom.toLowerCase())
                     );
                     liste.value = filteredCharacters.slice(0, 10);
                    
                });

                
        }
        else //si le nom est vide, on remet le tableau à 0
        {
            liste.value = []
        }
    }

    const rechercherTous = async () => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then(response =>{
            return response.json();
        })
        .then((data) => {
            liste.value = data.slice(0,10);
        })

    }

    const rechercherUn = async (id) => {
        fetch("https://hp-api.onrender.com/api/character/" +id)
        .then(response =>{
            return response.json();
        })
        .then((data) => {
            details.value = data;
        })

    }


    return {
        liste,
        details,
        rechercherParNom,
        rechercherTous,
        rechercherUn
    }

   
   
    
    
}