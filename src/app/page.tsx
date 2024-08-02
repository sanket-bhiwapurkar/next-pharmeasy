"use client";

import { FaPhone } from "react-icons/fa6";
import ClickToScroll from "./components/clickToScroll";
import { Button, IconButton } from "./components/inputs/buttons";
import MetaSection from "./components/metaSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Home</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("action")}
      >
        PrimaryPrimaryPrimaryPrimaryPrimaryPrimary
      </Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="text" color="secondary">
        secondary
      </Button>
      <Button variant="outlined" color="secondary">
        secondary
      </Button>

      <Button variant="contained" color="dark">
        dark
      </Button>
      <Button variant="text" color="dark">
        dark
      </Button>
      <Button variant="outlined" color="dark">
        dark
      </Button>

      <Button variant="contained" color="danger">
        danger
      </Button>
      <Button variant="text" color="danger">
        danger
      </Button>
      <Button variant="outlined" color="danger">
        danger
      </Button>

      <Button variant="contained" color="disabled" disabled>
        disabled
      </Button>
      <Button variant="text" color="disabled" disabled>
        disabled
      </Button>
      <Button variant="outlined" color="disabled" disabled>
        disabled
      </Button>

      <Button variant="contained" color="info">
        info
      </Button>
      <Button variant="text" color="info">
        info
      </Button>
      <Button variant="outlined" color="info">
        info
      </Button>

      <Button variant="contained" color="warning" fab>
        warning
      </Button>
      <Button variant="text" color="warning">
        warning
      </Button>
      <Button variant="outlined" color="warning" fab>
        warning
      </Button>

      <IconButton>
        <FaPhone />
      </IconButton>

      <ClickToScroll />
      <MetaSection />
    </main>
  );
}
