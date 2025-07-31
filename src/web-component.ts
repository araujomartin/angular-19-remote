import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { NgZone } from '@angular/core';

let isDefined = false;

export async function defineWebComponent() {
    if (isDefined) return;

    // When is imported via web component, inject the ngZone from the host/shell app (if it's needed)
    const ngZone = globalThis['ngZone' as keyof typeof globalThis];

    const app = await createApplication({
        providers: [
            ...appConfig.providers,
            ngZone ? { provide: NgZone, useValue: ngZone } : [],
        ],
    });

    const el = createCustomElement(AppComponent, {
        injector: app.injector,
    });

    // Define the web component tag
    customElements.define('angular-19-mfe', el);
    isDefined = true;
}