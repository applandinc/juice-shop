const name = process.argv[2];

process.stdout.write(
  JSON.stringify(
    JSON.parse(
      require("fs").readFileSync(name, 'utf8')
    ),
    null,
    2
  ),
  'utf8'
);