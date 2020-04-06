# aposto-app

Aposto is a 💸 free, 🌱 light, ✨ easy-to-use and 📖 open-source billing software dedicated to Swiss therapist. It allows generating invoices in compliance with new standard Tarif 590 in a few seconds.

🔥 Aposto is already online on [app.aposto.ch](https://app.aposto.ch/). Find a full introduction to its features on [aposto.ch](https://aposto.ch/).

🇫🇷 Note that Aposto is currently only available in French.

This repository contains the Aposto Web application. You can use it to 🧾 generate and 💌 send the PDF invoice by email to the patient and the therapist using [SendInBlue](https://fr.sendinblue.com/) mailing service.

The Web application is designed using [Svelte](https://svelte.dev/) responsive JavaScript framework.

_[Link to the API repository](https://github.com/etceterra/aposto-server/)_

## Dependencies

To run the Aposto Web application on your machine, you need:

* `node.js` _([download link](https://nodejs.org/en/))_. After the installation, check that `node` and `npm` are properly installed by running in the terminal of your choice `node -v` and `npm -v`. Each command should display the `node` and `npm` installed version.

And that's it! The project will install all the node.js module dependencies itself on the next step. 🤙

## Quick start

In the terminal of your choice, go through the following steps:

* Install the project: `npm install` _→ It installs all the needed node.js modules._<br>**Note:** You only have to run this command the first time.
* Start the project: `npm run dev` _→ It launches the Web application._

You're done! The Web Application is now accessible on http://localhost:5000/. 🚀

## Building the application

You can build the Web application by simply running `npm run build`.

You can run the newly built app with `npm run start`.
