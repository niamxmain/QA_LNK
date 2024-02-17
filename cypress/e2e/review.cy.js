describe("Review Test Case", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Enter complete data in the form", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get(".text-format-content").contains(
      "Your response has been successfully recorded"
    );
  });

  it('Enter complete data in the form with type product "other"', () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("durable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get(".text-format-content").contains(
      "Your response has been successfully recorded"
    );
  });

  it("submit review without entering data", () => {
    cy.get("[data-automation-id=submitButton]").click();
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5."
      );
  });

  it("input data without fullname", () => {
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 1."
      );
  });

  it("input data without phone number", () => {
    cy.setFullName("Muhammad Niam");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 2."
      );
  });

  it("input data without product type", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 3."
      );
  });

  it("input data without rating", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 4."
      );
  });

  it("input data without date", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 5."
      );
  });

  it("input data without fullname and phone number", () => {
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]")
      .eq(0)
      .within(() => {
        cy.get("span").should("have.text", "This question is required.");
      });
    cy.get("[data-automation-id=validationError]")
      .eq(1)
      .within(() => {
        cy.get("span").should("have.text", "This question is required.");
      });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "2 question(s) need to be completed before submitting: Question 1,Question 2."
      );
  });

  it("enter fullname with special characters", () => {
    cy.setFullName("Niam@");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should(
        "have.text",
        "Fullname can't contain special character"
      );
    });
  });

  it("enter an unregistered phone number", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "Phone Number Unregistered");
    });
  });

  it("entered invalid phone number format", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("Invalid Phone Number");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "Phone number must type of Number");
    });
  });

  it("entered dates is not the same as today", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/20/2024");
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "Date does not match");
    });
  });

  it("entered fullname with more than 50 characters", () => {
    cy.setFullName("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "Maks. character 50 for fullname");
    });
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("2/17/2024");
    cy.setSubmitButton();
  });

  it("entered invalid date format", () => {
    cy.setFullName("Muhammad Niam");
    cy.setPhoneNumber("0895335506800");
    cy.setProductType("Affordable");
    cy.setRating(4);
    cy.setDates("22/07/2024");
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "Error: invalid date input, please input date in M/d/yyyy format");
    });
    cy.setSubmitButton();
    cy.get("[data-automation-id=validationError]").within(() => {
      cy.get("span").should("have.text", "This question is required.");
    });
    cy.get("[data-automation-id=submitError]")
      .within(() => {
        cy.get("span").eq(1);
      })
      .should(
        "contain.text",
        "1 question(s) need to be completed before submitting: Question 5."
      );
  });
});
