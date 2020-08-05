let getLanguageOfBrowser = () => {
    //This returns the first two characters of the browser language. This is because of the different locales. for example: en-US, en-GB are all en.
    return `${navigator.language.charAt(0)}${navigator.language.charAt(1)}`;
};

let changeUserLanguage = (value) => {
    let languageCode = value.split(' ').pop();
    localStorage.setItem("lingua", languageCode);
    location.reload(); //Refresh page to take effect
};

let AllStrings = "", selectedLingo = localStorage.getItem("lingua") || getLanguageOfBrowser();


let renderTranslations = () => {
    $(AllStrings).each(function (key, val) {
        $("." + val.code).not('td').text(val[`${selectedLingo}`]);
    });
};

const langLocStorName = 'langHCMCustomerAdminLiteStrings';

//if no languages found in storage, insert new one
if (!localStorage.getItem(langLocStorName)) {
    reloadLanguagesTranslations();
} else {
    AllStrings = JSON.parse(localStorage.getItem(langLocStorName));
}

function reloadLanguagesTranslations(){
    $.getJSON(`${window.location.href.indexOf("localhost") > -1 ? `${window.location.origin}/api/` : `${window.location.origin}/hcm-manager/api/`}Master/GetAllLanguageTrans`, function (response) {
        if (response.body) {

            response = response.body.map(x => { return { id: x.id, code: x.code, en: x.english, fr: x.french, es: x.spanish, gr: x.german, pr: x.portuguese } });

            localStorage.setItem(langLocStorName, JSON.stringify(response));
            AllStrings = JSON.parse(localStorage.getItem(langLocStorName));
            renderTranslations(); //run functions
        }
        
    });
}

//For getting the words using code and selected language
let getTransByCode = (szCode) => {
    if(szCode && szCode !== ''){
        for (let i = 0; i < AllStrings.length; i++) {
            if (AllStrings[i].code.trim().toLowerCase() === szCode.trim().toLowerCase())
                return AllStrings[i][selectedLingo].trim();
        }
    }
};

//For translating words from english to selected language
let getTransByString = (TheString) => {
    let returnString = "";
    //No need to loop through if it is in english...
    if (selectedLingo === 'en') return TheString;

    for (let i = 0; i < AllStrings.length; i++) {
        if (AllStrings[i].en.trim().toLowerCase() === TheString.trim().toLowerCase()) {
            if (selectedLingo === 'fr')
                returnString = AllStrings[i].fr.trim() || "";
            if (selectedLingo === 'es')
                returnString = AllStrings[i].es.trim() || "";
            if (selectedLingo === 'gr')
                returnString = AllStrings[i].gr.trim() || "";
            if (selectedLingo === 'pr')
                returnString = AllStrings[i].pr.trim() || "";
            break;
        }
    }

    return returnString || TheString;
};

renderTranslations(); //run functions

//translations
$(".selectedLanguageAnc").text(`${selectedLingo.toLowerCase()}`);
 
$('.languageList li').each(function (i, obj) {
    if ($(this).hasClass(selectedLingo.toLowerCase())) {
        $(this).addClass('active')
        $(this).find('h6').css({'color' : '#FFF'});
    }
}).click(function () {
    changeUserLanguage(this.className);
});
//End of translations