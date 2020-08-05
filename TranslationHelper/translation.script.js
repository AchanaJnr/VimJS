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