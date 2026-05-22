import fs from 'fs';

async function fetchUnsplash(query) {
  const url = `https://unsplash.com/s/photos/${query}`;
  const res = await fetch(url);
  const html = await res.text();
  const matches = [...html.matchAll(/"id":"(photo-[^"]+)"/g)];
  return matches.map(m => m[1]).filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);
}

async function run() {
  const queries = ["samosa", "chai", "indian-sweets", "cookies", "cake"];
  const results = {};
  for (const q of queries) {
    results[q] = await fetchUnsplash(q);
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
