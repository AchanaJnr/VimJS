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