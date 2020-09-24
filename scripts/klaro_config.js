window.klaroConfig = {
    privacyPolicy: '/privacy.html',
    apps : [
        {
            name : 'piwik',
            default: true,
            title : 'Piwik',
            purposes : ['statistics'],
            callback : function(consent, app){
              // this is an example callback function...
            },
        },
    ],
}