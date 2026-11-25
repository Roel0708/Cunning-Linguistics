function searchLanguage() {
    let input = document.getElementById("languageInput").value.toLowerCase().trim();

    let realLanguages = ["dutch", "english", "german", "french", "spanish", "italian", "portuguese", "polish", "hindi", "cantonese", "bengali", "persian", "russian", "swedish", "hebrew", "esperanto", "norwegian", "finnish", "ukranian", "latin", "greek", "turkish", "arabic", "farsi", "hungarian", "swiss", "austrian", "korean", "chinese", "mandarin", "mongolian", "vietnamese", "japanese"];
    let fictionalLanguages = ["huttese", "klingon", "elvish", "quenya", "sindarin", "dwarvish", "dothraki", "high valyrian", "orcish", "simlish", "aurebesh"];
    let programmingLanguages = ["javascript", "c++", "c#", "python", "java", "html", "typescript", "sql"];

    if (realLanguages.includes(input)) {
        window.location.href = "world-languages.html";
    }

    else if (fictionalLanguages.includes(input)) {
        window.location.href = "fictional-languages.html";
    }

    else if(programmingLanguages.includes(input)) {
        window.location.href = "programming-languages.html";
    }
    
    else {
        alert("Language not found. Please check your spelling and try again.");
    }
}