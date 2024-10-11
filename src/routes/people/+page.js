// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter'; // for parsing frontmatter from markdown

// export async function load() {
//   try {
//     const peopleDir = path.join('content', 'people');
//     const filenames = fs.readdirSync(peopleDir); // reads all .md files in the folder

//     const people = filenames.map((filename) => {
//       const filePath = path.join(peopleDir, filename); // get full file path
//       const fileContent = fs.readFileSync(filePath, 'utf8'); // read file contents
//       const { data } = matter(fileContent); // parse frontmatter

//       return {
//         ...data, // add frontmatter properties
//         slug: filename.replace('.md', '') // create a slug from the filename
//       };
//     });

//     console.log('People array:', people); // debug output in terminal

//     // return the people array to the Svelte page
//     return {
//       people // correctly pass the `people` data
//     };
//   } catch (error) {
//     console.error('Error loading people data:', error.message);
//     return {
//       people: [] // return an empty array on error
//     };
//   }
// }
