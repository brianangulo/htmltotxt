import { writeFile, readFileSync } from "fs";
/**
 * Basic parser extracts text from html files
 * @param {string} path The path to the html file to read from
 * @returns {string} With all of the HTML nodes removed
 */
export function parser(path) {
  const fullString = readFileSync(path).toString();
  const regex = /<.+?>/;
  return fullString.split(regex).join("");
}
/**
 * Generator of .txt files in same directory
 * @param {string} str A plain string to generate txt from
 */
export function generator(str) {
  const randomNum = Math.floor(Math.random() * 50);
  writeFile(`fromHtml${randomNum}.txt`, str, "utf8", (err) => console.log(err));
  return "file generated";
};

exports.printMsg = function () {
  console.log("This is a message from the demo package");
};