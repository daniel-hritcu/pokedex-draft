"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

// TODO: Add type selector
export default function Toolbar() {
  const [searchName, setSearchName] = useState("");

  return (
    <div className="flex space-x-4 items-center">
      <Input
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search by name"
        className="w-96"
      />
      <Button
        size={'sm'}
        disabled={!searchName}
      >
        <Link href={`/?name=${searchName}`}>Search</Link>
      </Button>
    </div>
  );
}
  