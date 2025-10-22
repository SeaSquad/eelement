import { escapeHtmlText } from "./html-enc.js";
import { VoidTag } from "./void-tag.js";

type EelementAttrs = Record<string, string | boolean>;

export type Eelement =
  // Void elements
  | [VoidTag]
  | [VoidTag, EelementAttrs]
  // Regular elements
  | [Exclude<string, VoidTag>, EelementAttrs, ...(Eelement | string | null)[]]
  | [Exclude<string, VoidTag>, ...(Eelement | string | null)[]];

export function render(doc: Eelement) {
  return `<!DOCTYPE html>${renderElement(doc)}`;
}

export function renderFragment(elements: Eelement[]) {
  elements.map((el) => renderElement(el)).join("");
}

export function renderElement(doc: Eelement) {
  let result = `<${doc[0]}`;

  let index = 1;
  if (
    doc.length > 1 &&
    typeof doc[1] === "object" &&
    !Array.isArray(doc[1]) &&
    doc[1] !== null
  ) {
    const attributes = doc[1];
    for (const key in attributes) {
      if (attributes[key] === false) {
        continue;
      }
      if (attributes[key] === true) {
        result += ` ${key}`;
        continue;
      }
      result += ` ${key}="${attributes[key]}"`;
    }
    index++;
  }
  result += ">";

  if (VoidTag[doc[0] as VoidTag]) {
    return result;
  }

  for (; index < doc.length; index++) {
    const node = doc[index];
    if (node === null) {
      continue;
    }

    if (typeof node === "string") {
      if (doc[0] === "script" || doc[0] === "style") {
        result += node;
      } else {
        result += escapeHtmlText(node);
      }
    } else {
      result += renderElement(node as Eelement);
    }
  }

  result += `</${doc[0]}>`;

  return result;
}
