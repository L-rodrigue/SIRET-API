let siret = document.querySelector('#entreprise_siret');
let entreprise_name = document.querySelector('#entreprise_name')
let entreprise_adress = document.querySelector('#entreprise_adress')
let entreprise_country = document.querySelector('#entreprise_country')
let entreprise_code_postale = document.querySelector('#entreprise_code_postale')
let entreprise_siren = document.querySelector('#entreprise_siren')
let entreprise_nic = document.querySelector('#entreprise_nic')
let entreprise_date_creation = document.querySelector('#entreprise_date_creation')
let entreprise_tranche_effectifs = document.querySelector('#entreprise_tranche_effectifs')


siret.addEventListener('input', event => {

    if (event.srcElement.value.length == 14) {
        fetch(`https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/${event.srcElement.value}`).then(async res => {
            result = await res.json()
            
            entreprise_name.value = result.etablissement.unite_legale.denomination;
            entreprise_adress.value = result.etablissement.geo_l4;
            entreprise_country.value = result.etablissement.libelle_commune;
            entreprise_code_postale.value = result.etablissement.code_postal;
            entreprise_siren.value = result.etablissement.siren;
            entreprise_nic.value = result.etablissement.nic;
            entreprise_date_creation.value = result.etablissement.unite_legale.date_creation;
            entreprise_tranche_effectifs.value = result.etablissement.tranche_effectifs;
        })
    } else {
        
    }
});



