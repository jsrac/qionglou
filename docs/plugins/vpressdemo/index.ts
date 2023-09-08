import { fileURLToPath } from "url";
import { getHighlighter } from "shiki"; // @ts-ignore
import { dirname, resolve } from "path"; // @ts-ignore
import fs from "fs";

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let codeToHtml: any = null;
(async () => {
  let res = await getHighlighter({
    theme: "material-theme-palenight",
  });
  codeToHtml = res.codeToHtml;
})();

// demo component path
const demoComponentsPath = resolve(__dirname, "demo.vue");

/**
 * Get relative path
 */
const getRelativePath = (path1 = "", path2 = "") => {
  const path1Arr = path1.split(/\\|\//g);
  const path2Arr = path2.split(/\\|\//g);
  const path1ArrLen = path1Arr.length;
  let relativePath = "";
  for (let i = 0; i < path1ArrLen; i++) {
    if (path2Arr[i] != path1Arr[i]) {
      if (path1ArrLen - i > 1) {
        relativePath += new Array(path1ArrLen - i).join("../");
      } else {
        relativePath = "./";
      }
      relativePath += path2Arr.splice(i).join("/");
      break;
    }
  }
  return relativePath;
};

/**
 * Get content from demo label
 */
const getDemoLabel = (demo = "", attr?: any) => {
  let reg = attr
    ? new RegExp(`<demo[^>]+${attr}=['"]([^'"]+)['"]`)
    : /<demo[\s\S]*?>([\s\S]*?)(<\/demo>|\/>)$/;
  let match = demo.match(reg);
  if (match && match.length >= 1) {
    return match[1] || "";
  }
  return "";
};

export default (md: any) => {
  const render = md.render;

  md.render = (...args: any[]) => {
    let docPath = args[1].path;
    let result = render.call(md, ...args);
    const demoReg = /<demo([\s\S]*?)(<\/demo>|\/>)/;
    const demoReg_g = new RegExp(demoReg, "g");
    const demoLabels = result.match(demoReg_g);

    demoLabels?.forEach(async (demo: any) => {
      let codeStr = "";
      let htmlStr = "";
      let descStr = "";
      const slot = getDemoLabel(demo);
      const demoSrc = getDemoLabel(demo, "src"); // demo plugins
      const demoDesc = getDemoLabel(demo, "desc"); // demo desc
      const demoLang = getDemoLabel(demo, "lang") || "vue"; // demo lang
      const demoPath = resolve(docPath, "../", demoSrc);
      let demoRelativePath = "";
      const existSrc = demoSrc && fs.existsSync(demoPath);

      if (slot?.trim()) {
        codeStr = slot;
      } else if (existSrc) {
        codeStr = fs.readFileSync(demoPath).toString();
        demoRelativePath = getRelativePath(demoComponentsPath, demoPath);
      } else {
        codeStr = "failed to find plugins file";
      }

      htmlStr = codeToHtml(codeStr, { lang: demoLang });
      descStr = md.renderInline(demoDesc) || "";
      let demoStr = demo.replace(
        ">",
        ` codeStr="${encodeURIComponent(
          codeStr
        )}" htmlStr="${encodeURIComponent(
          htmlStr
        )}" description="${encodeURIComponent(
          descStr
        )}" codePath="${demoRelativePath}">`
      );

      result = result.replace(demo, demoStr);
    });

    return result;
  };
};
