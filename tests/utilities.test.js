import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string
test("isValidDateString: test for invalid string", () => {
    expect(isValidDateString("thisisnotadate")).toBe(false);
});

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test("isValidDateString: wrong amount of \"date segments\"", () => {
    expect(isValidDateString("31/05")).toBe(false);
});

// Test for wrong number of digits in the day
test("isValidDateString: wrong number of digits in the day", () => {
    expect(isValidDateString("320/05/2025")).toBe(false);
});

// Test for wrong number of digits in the month
test("isValidDateString: wrong number of digits in the month", () => {
    expect(isValidDateString("310/13/2025")).toBe(false);
});

// Test for wrong number of digits in the year
test("isValidDateString: wrong number of digits in the year", () => {
    expect(isValidDateString("310/05/99999")).toBe(false);
});

// Test for day outside of month's number of days
test("isValidDateString: day outside of month\'s number of days", () => {
    expect(isValidDateString("32/05/2025")).toBe(false);
});

// Test for month greater than 12
test("isValidDateString: month greater than 12", () => {
    expect(isValidDateString("30/13/2025")).toBe(false);
});

// Test for day <= 0
test("isValidDateString: day less than 0", () => {
    expect(isValidDateString("00/12/2025")).toBe(false);
});