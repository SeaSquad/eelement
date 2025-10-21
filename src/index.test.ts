import { type Eelement, render } from "./index";

const result = render([
  "html",
  [
    "head",
    { "data-something": true },
    ["title", "The Best Site Ever"],
    ["meta", { "data-monkeys": "123", charset: "UTF-8" }],
    ["script", 'alert("Hi there")'],
  ],
  [
    "body",
    ["h1", "Welcome!"],
    [
      "nav",
      [
        "ul",
        ["li", ["a", { href: "/home" }, "Home"]],
        ["li", ["a", { href: "/about" }, "About"]],
        ["li", ["a", { href: "/contact-us" }, "Contact Us"]],
        ["br", "a"],
      ],
    ],
    [
      "main",
      ["button", { "data-some-more": true }, "button one"],
      ["button", "button two"],
      ["button", "nother one"],
      SpecialButton(),
      ["textarea", "This contains some good stuff\n", "how are you"],
      [
        "div",
        ["pre", "this text\n", "is awesome <strong>heyo friends</strong> yo"],
      ],
      ["div", ""],
    ],
  ],
]);

function SpecialButton(): Eelement {
  return ["button", { class: "btn" }, "I am special"];
}

console.log(result);

//it("should render");
