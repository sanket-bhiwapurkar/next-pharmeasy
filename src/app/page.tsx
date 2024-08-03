"use client";

import ClickToScroll from "./components/clickToScroll";
import MetaSection from "./components/metaSection";
import Accordian from "./components/surfaces/Accordian";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Home</h1>
      <Accordian size="large" variant="outlined" color="primary">
        <Accordian.Header>
          <p className="text-dark">Header of</p>
        </Accordian.Header>
        <Accordian.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            fuga? Placeat illo quo molestias blanditiis voluptatibus. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, non
            laborum porro tempore, vitae tenetur dolorem commodi fugiat ut
            itaque libero at in quidem assumenda expedita voluptates laboriosam
            magnam iure architecto et, laudantium consequatur! Quisquam
            voluptates aliquam nobis fugit commodi suscipit, repudiandae fuga
            recusandae distinctio ea magni possimus tenetur corrupti? Tempore
            rem aut accusantium ab alias quam iste excepturi repellat illo?
            Quisquam labore impedit ipsam aliquid. Sit maiores voluptates, sequi
            quod pariatur ad. Est magni optio nam nobis veritatis corporis
            expedita quis magnam sequi, asperiores molestias facilis quibusdam
            saepe beatae sunt nulla, ad, obcaecati voluptate ullam porro alias.
            Fuga, eius.
          </p>
        </Accordian.Body>
      </Accordian>
      <ClickToScroll />
      <MetaSection />
    </main>
  );
}
