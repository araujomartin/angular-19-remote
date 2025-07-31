# Angular 19 Microfrontend with Native Federation

This project is a microfrontend built with **Angular 19** and uses **Native Federation** for module federation. It is designed to be run with **Bun** as the package manager and runtime. The project also leverages **@angular/elements** to expose the main application as a web component.

## Features

- **Angular 19**: Latest Angular version for modern web development.
- **Native Federation**: Uses [`@angular-architects/native-federation`](https://www.npmjs.com/package/@angular-architects/native-federation) to expose modules for remote consumption.
- **@angular/elements**: Wraps the main app as a web component for easy integration.
- **Bun**: Fast JavaScript runtime and package manager.

## Remote Exposure

This microfrontend exposes its application as a remote module via Native Federation. It is intended to be imported and consumed by a shell application located in a separate repository:

[Shell Application Repository](https://github.com/araujomartin/angular-mfe-poc)

## Usage

### Install dependencies

```bash
bun install
```

### Run the application

```bash
bun run start
```

### Build the application

```bash
bun run build
```

## Consuming from Shell

The shell application (see link above) imports this microfrontend remotely using Native Federation. The exposed web component can be used in the shell or other host applications.

## Exposed Module

- `./web-component`: Exposes the Angular app as a web component (`<angular-19-mfe>`).

> **Note:**  
> In `web-component.ts`, before creating the Angular application, the code checks if `ngZone` is defined in the global scope. If present, it uses the parent application's `ngZone` instead of creating a new one. This prevents conflicts when the shell application already manages its own `ngZone`.
