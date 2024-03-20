$(document).ready(function() {
    i18next.init({
        lng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    "key": "test shit injected",
                    "selected-language": "English",
                    "menu-home": "Home",
                    "menu-portfolio": "Portfolio",
                    "menu-services": "Services",
                    "menu-about": "About Us",
                    "menu-contact": "Contact",
                }
            },
            ro: {
                translation: {
                    "key": "aici se injecteaza cacaturi",
                    "selected-language": "Romana",
                    "menu-home": "Acasa",
                    "menu-portfolio": "Portofoliu",
                    "menu-services": "Servicii",
                    "menu-about": "Despre noi",
                    "menu-contact": "Contact",
                }
            }
        }
    }, function(err, t) {
        // initialized and ready to go!
        jqueryI18next.init(i18next, $);
        $('body').localize();
        console.log('i18n initialized');
    });

    $('.dropdown-item').click(function() {
        var lang = $(this).data('lang');
        i18next.changeLanguage(lang, function(err, t) {
            if (err) return console.log('something went wrong loading', err);
            $('body').localize();
        });
    });
});