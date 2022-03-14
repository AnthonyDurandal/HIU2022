export const listeCentre = [
  {
    id: 1,
    nom: "CHU Befelatanana",
  },
  {
    id: 2,
    nom: "CCO Andoharanofotsy",
  },
  {
    id: 3,
    nom: "CHU Andotapenaka",
  },
];

export const relVaccinCentre = [
  {
    id: 1,
    centre: 1,
  },
  {
    id: 2,

    centre: 1,
  },
  {
    id: 3,
    centre: 2,
  },
  {
    id: 4,

    centre: 3,
  },
  {
    id: 5,
    centre: 3,
  },
];

export const listeVaccin = [
  {
    id: 1,
    nom: "Jansen",
    centre: 1,
  },
  {
    id: 2,
    nom: "Covi-shield",
    centre: 1,
  },
  {
    id: 3,
    nom: "AstraZeneca",
    centre: 2,
  },
  {
    id: 4,
    nom: "Covi-shield",
    centre: 3,
  },
  {
    id: 5,
    nom: "AstraZeneca",
    centre: 3,
  },
];

function listeIdCentreParVaccin(idVaccin) {
  const listeId = relVaccinCentre.map((rel) => {
    if (rel.id == idVaccin) {
      return rel.centre;
    }
  });
  return listeId;
}

function getListeCentre(listeIdVaccin) {
    const lCentre = [];
    for(let i=0;i<listeIdVaccin.length;i++){
        for(let j=0;j<listeCentre.length;j++){
            if(listeIdVaccin[i] == listeCentre[j].id){
                lCentre.push(listeCentre[j]);
            }
        }
    }
    return lCentre;
}

export function listeCentreParVaccin(idVaccin) {
    const listeId = listeIdCentreParVaccin(idVaccin);
    return  getListeCentre(listeId);
}
