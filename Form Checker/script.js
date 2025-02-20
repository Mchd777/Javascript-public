document.getElementById('inscriptionForm').addEventListener('submit', function (event) {
    event.preventDefault();

      // Récupération des valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const prenoms = document.getElementById('prenoms').value;
  const dateNaissance = document.getElementById('dateNaissance').value;
  const telephone = document.getElementById('telephone').value;
  const motivation = document.getElementById('motivation').value;

  // Validation au moins 18 ans
  const dateNaissanceObj = new Date(dateNaissance);
  const aujourdHui = new Date();
  const age = aujourdHui.getFullYear() - dateNaissanceObj.getFullYear();

    if (age < 18) {
        alert("Désolé, vous devez avoir au moins 18 ans pour vous inscrire.");
        return;
    }
    // numéro de téléphone (format Bénin : commence par 01 et 10 chiffres)
    const regexTelephone = /^01\d{8}$/;
    if (!regexTelephone.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres.");
        return;
    }
    // afficher les informations si tout est bon
    document.getElementById('confirmationNom').textContent = nom;
    document.getElementById('confirmationPrenoms').textContent = prenoms;
    document.getElementById('confirmationDateNaissance').textContent = dateNaissance;
    document.getElementById('confirmationTelephone').textContent = telephone;
    document.getElementById('confirmationMotivation').textContent = motivation;
    // Afficher la section de confirmation
    document.getElementById('confirmationSection').classList.remove('hidden');
});