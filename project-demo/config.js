import path from "path";

const root = path.resolve(__dirname, "app");
const dist_dir = path.resolve(root, "dist");
const dist_js_filename = "bundle.js";
const dist_js = path.resolve(dist_dir, dist_js_filename);

export default {
    entry: path.resolve(root, "src/main.js"),
    dist_js_filename: dist_js_filename,
    dist_dir: dist_dir,
    dist_js: dist_js
};
