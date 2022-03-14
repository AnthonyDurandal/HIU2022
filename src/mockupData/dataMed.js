export const listeCentre = [
  {
    id: 1,
    nom: "CHU Befelatanana",
    long: 47.523204,
    lat: -18.920942,
  },
  {
    id: 2,
    nom: "CCO Andoharanofotsy",
    long: 47.533318,
    lat: -18.992845,
  },
  {
    id: 3,
    nom: "CHU Andohatapenaka",
    long: 47.499721,
    lat: -18.904319,
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
    id: 2,
    centre: 3,
  },
  {
    id: 1,
    centre: 3,
  },
];

export const listeVaccin = [
  {
    id: 1,
    nom: "Jansen",
    description:
      "Vaccin très efficace Jansen. Suite de le description des chaque vaccin amazy mba lava tsara le izy fa lany inspiration",
  },
  {
    id: 2,
    nom: "Covi-shield",
    description:
      "Vaccin très efficace Covi-shield. Suite de le description des chaque vaccin amazy mba lava tsara le izy fa lany inspiration",
  },
  {
    id: 3,
    nom: "AstraZeneca",
    description:
      "Vaccin très efficace AstraZeneca. Suite de le description des chaque vaccin amazy mba lava tsara le izy fa lany inspiration",
  },
];

function listeIdCentreParVaccin(idVaccin) {
  const listeId = [];
  console.log(idVaccin);
  for (let i = 0; i < relVaccinCentre.length; i++) {
    if (relVaccinCentre[i].id == idVaccin) {
      listeId.push(relVaccinCentre[i].centre);
    }
  }
  return listeId;
}

function getListeCentre(listeIdCentre) {
  const lCentre = [];
  for (let i = 0; i < listeCentre.length; i++) {
    for (let j = 0; j < listeIdCentre.length; j++) {
      if (listeCentre[i].id == listeIdCentre[j]) {
        lCentre.push(listeCentre[i]);
      }
    }
  }
  return lCentre;
}

export function listeCentreParVaccin(idVaccin) {
  const listeId = listeIdCentreParVaccin(idVaccin);
  console.log(listeId);
  const lCentre = getListeCentre(listeId);
  console.log(lCentre);
  return lCentre;
}
