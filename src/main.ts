import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import { hmrBootstrap } from 'hmr'

import { ApplicationInsights } from '@microsoft/applicationinsights-web'
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: environment.instrumentationKey, // Instrumentation Key
        endpointUrl: 'https://dc.applicationinsights.azure.cn/v2/track', //终结点
    },
})
appInsights.loadAppInsights()
appInsights.trackPageView()
appInsights.trackTrace({ message: 'some trace' })
appInsights.flush()
let email = localStorage.getItem('TY_USER_ID')
if (email) {
    appInsights.setAuthenticatedUserContext(email)
}

if (environment.production) {
    enableProdMode()
    window.console.log = function () {}
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule)

if (environment.hmr) {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap)
    } else {
        console.error('HMR is not enabled for webpack-dev-server!')
        console.log('Are you using the --hmr flag for ng serve?')
    }
} else {
    bootstrap().catch((err) => console.log(err))
}
