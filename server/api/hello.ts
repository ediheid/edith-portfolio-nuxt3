// import type { IncomingMessage, ServerResponse } from "http";
// import * as url from "url";

// export default defineEventHandler((event) => {
//   return {
//     api: "works",
//   };
// });

// export default async defineEventHandler(
//   (req: IncomingMessage, res: ServerResponse) => {
//     const queryObject = url.parse(req.url as string, true).query;
//     let data = { data: [{ data: "" }] };

//     const { search } = queryObject;

//     if (search) {
//       data = await $fetch("api url");
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
// res.write(JSON.stringify(data))
// res.end()

//     return {
//       api: "works",
//     };
//   }
// );
