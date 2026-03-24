"use client";

import { useEffect } from "react";

export default function AdminRedirect() {
  useEffect(() => {
    window.location.href = "https://app.ortegaeats.com/admin";
  }, []);

  return null;
}
