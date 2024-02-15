"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="text-black bg-white dark:text-white border-neutral-200"
      >
        Contact Now
      </Button>
    </div>
  );
}
