import { url } from "./url.mjs";

const get = async (extension) => {
  try {
    const response = await fetch(`${url}${extension}?translation=kjv`);
    if (response.ok) {
      const data = await response.json();
      console.log({
        ref: data.reference,
        text: data.text,
      });
    } else {
      console.log({ response });
    }
  } catch (error) {
    console.log(error);
  }
};

get("/philippians+2:1-21");
