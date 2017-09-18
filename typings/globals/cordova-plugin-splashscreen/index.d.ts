// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/af481008cc26a1885ba8e337d80b010421646132/cordova-plugin-splashscreen/index.d.ts
interface Navigator {
    /** This plugin displays and hides a splash screen during application launch. */
    splashscreen: {
        /** Dismiss the splash screen. */
        hide(): void;
        /** Displays the splash screen. */
        show(): void;
    }
}