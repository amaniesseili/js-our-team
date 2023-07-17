/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/


/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

const teamMember = [
    {
        nome: "wayne Barnet",
        ruolo: " Founder & CEO ",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: " Chief Editor ",
        foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: " Graphic Designer",
        foto: " barbara-ramos-graphic-designer.jpg",
    }
];

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/
// console.log(teamMember)

for( let i = 0 ; i<teamMember.length; i++){
    const member = teamMember[i];
    console.log(`Nome: ${member.nome}`);
    console.log(`Ruolo: ${member.ruolo}`);
    console.log(`Foto: ${member.foto}`);

}

/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/
const memberInfo = document.createElement("div");
const teamContainer = document.getElementById("team-container")

for(let i =0; i<teamMember.length; i++){
    const member = teamMember[i];

    
    
    memberInfo.innerHTML = `<div> Nome: ${member.nome}</div> 
    <p> ruolo: ${member.ruolo}</p>
    <p> foto: ${member.foto}</p>`;
}

teamContainer.append(memberInfo); //perche non sta funzionando anche se ho dichiarato member info ?