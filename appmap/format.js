const name = process.argv[2];

const data = JSON.parse(require("fs").readFileSync(name, 'utf8'));

// data.events.sort((event1, event2) => event1.id - event2.id);

process.stdout.write(
  JSON.stringify(data, null, 2),
  'utf8'
);