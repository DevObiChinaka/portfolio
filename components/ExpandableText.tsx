"use client";

import { useState } from "react";

type ExpandableTextProps = {
  text: string;
};

export default function ExpandableText({ text }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3">
      <p className={expanded ? "text-sm leading-7" : "line-clamp-3 text-sm leading-7"}>
        {text}
      </p>
      <button
        type="button"
        className="mono mt-1 w-fit cursor-pointer text-xs link underline-offset-4 hover:underline"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "less" : "more"}
      </button>
    </div>
  );
}
