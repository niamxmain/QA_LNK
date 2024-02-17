// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setFullName', (fullName) => {
  // get and set fullname
  cy.get(":nth-child(1) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61").type(
    fullName
  );
})

Cypress.Commands.add('setPhoneNumber', (phoneNum) => {
  // get and set phone number
  cy.get(":nth-child(2) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61").type(
    phoneNum
  );
})

Cypress.Commands.add('setProductType', (productType) => {
  // get and set product type
  if (productType === "Affordable") {
    cy.get(":nth-child(1) > div > .--D-78 > .-a-79 > .-gW-80").click();
  } else if (productType === "Expensive") {
    cy.get(":nth-child(2) > div > .--D-78 > .-a-79 > .-gW-80").click();
  } else {
    // Lakukan tindakan jika productType bukan 'satu'
    cy.get(".-mh-68 > .-a-79 > .-gW-80").click();
    cy.get(".-na-85 > .-_W-61").type(productType);
  }
})

Cypress.Commands.add('setRating', (rating) => {
  // get and set rating
  switch (rating) {
    case 1:
      cy.get(".-fx-105 > span > span > svg")
        .eq(0)
        .then((el) => {
          cy.wrap(el).click();
        });
      break;
    case 2:
      cy.get(".-fx-105 > span > span > svg")
        .eq(1)
        .then((el) => {
          cy.wrap(el).click();
        });
      break;
    case 3:
      cy.get(".-fx-105 > span > span > svg")
        .eq(2)
        .then((el) => {
          cy.wrap(el).click();
        });
      break;
    case 4:
      cy.get(".-fx-105 > span > span > svg")
        .eq(3)
        .then((el) => {
          cy.wrap(el).click();
        });
      break;
    case 5:
      cy.get(".-fx-105 > span > span > svg")
        .eq(4)
        .then((el) => {
          cy.wrap(el).click();
        });
      break;
    default:
        break;
  }
})

Cypress.Commands.add('setDates', (dates) => {
  // get and set dates
  cy.get("#DatePicker0-label").click().type(dates);
})

Cypress.Commands.add('setSubmitButton', () => {
  // click submit button
  cy.get("[data-automation-id=submitButton]").click();
})

// Cypress.Commands.add(
//   "reviewFeatures",
//   (fullName, phoneNum, productType, rating, dates) => {
//     // get and set fullname
//     cy.get(":nth-child(1) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61").type(
//       fullName
//     );

//     // get and set phone number
//     cy.get(":nth-child(2) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61").type(
//       phoneNum
//     );

//     // get and set product type
//     if (productType === "Affordable") {
//       cy.get(":nth-child(1) > div > .--D-78 > .-a-79 > .-gW-80").click();
//     } else if (productType === "Expensive") {
//       cy.get(":nth-child(2) > div > .--D-78 > .-a-79 > .-gW-80").click();
//     } else {
//       // Lakukan tindakan jika productType bukan 'satu'
//       cy.get(".-mh-68 > .-a-79 > .-gW-80").click();
//       cy.get(".-na-85 > .-_W-61").type(productType);
//     }

//     // get and set rating
//     switch (rating) {
//       case 1:
//         cy.get(".-fx-105 > span > span > svg")
//           .eq(0)
//           .then((el) => {
//             cy.wrap(el).click();
//           });
//         break;
//       case 2:
//         cy.get(".-fx-105 > span > span > svg")
//           .eq(1)
//           .then((el) => {
//             cy.wrap(el).click();
//           });
//         break;
//       case 3:
//         cy.get(".-fx-105 > span > span > svg")
//           .eq(2)
//           .then((el) => {
//             cy.wrap(el).click();
//           });
//         break;
//       case 4:
//         cy.get(".-fx-105 > span > span > svg")
//           .eq(3)
//           .then((el) => {
//             cy.wrap(el).click();
//           });
//         break;
//       case 5:
//         cy.get(".-fx-105 > span > span > svg")
//           .eq(4)
//           .then((el) => {
//             cy.wrap(el).click();
//           });
//         break;
//       default:
//           break;
//     }

//     // get and set dates
//     cy.get("#DatePicker0-label").click().type(dates);

//     // click submit button
//     cy.get("[data-automation-id=submitButton]").click();
//   }
// );
