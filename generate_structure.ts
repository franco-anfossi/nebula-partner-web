import * as fs from "fs";
import * as path from "path";

interface Options {
  excludeDirs?: string[];
}

function generateStructure(
  rootDir: string,
  outputFile: string,
  options: Options = {},
) {
  const excludeDirs = options.excludeDirs || [];

  function printTree(dirPath: string, prefix = "", file: fs.WriteStream) {
    const contents = fs
      .readdirSync(dirPath)
      .filter((item) => !excludeDirs.includes(item));

    const folders = contents
      .filter((name) => fs.statSync(path.join(dirPath, name)).isDirectory())
      .sort();

    const files = contents
      .filter((name) => fs.statSync(path.join(dirPath, name)).isFile())
      .sort();

    const sortedContents = [...folders, ...files];
    const pointers = sortedContents.map((_, i) =>
      i === sortedContents.length - 1 ? "└── " : "├── ",
    );

    sortedContents.forEach((name, index) => {
      const fullPath = path.join(dirPath, name);
      const pointer = pointers[index];

      if (fs.statSync(fullPath).isDirectory()) {
        file.write(`${prefix}${pointer}${name}/\n`);
        const extension = pointer === "├── " ? "│   " : "    ";
        printTree(fullPath, prefix + extension, file);
      } else {
        file.write(`${prefix}${pointer}${name}\n`);
      }
    });
  }

  const repoName = path.basename(path.resolve(rootDir));
  const file = fs.createWriteStream(outputFile, { flags: "w" });

  file.write("```\n");
  file.write(`${repoName}/\n`);
  printTree(rootDir, "", file);
  file.write("```\n");
  file.end();
}

if (process.argv[1] === path.resolve(process.argv[1])) {
  generateStructure(".", "structure.md", {
    excludeDirs: [".git", ".next", "node_modules", "dist"],
  });
}
