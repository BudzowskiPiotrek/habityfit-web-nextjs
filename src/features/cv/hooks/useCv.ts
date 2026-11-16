"use client";

import { useCallback, useEffect, useState } from "react";
import { getCvContent } from "../api/cv.api";
import type { CvContent } from "../types/cv.types";

interface CvState {
  status: "loading" | "success" | "error";
  content: CvContent | null;
  error: string | null;
}

const initialState: CvState = {
  status: "loading",
  content: null,
  error: null,
};

export function useCv() {
  const [state, setState] = useState<CvState>(initialState);
  const [requestId, setRequestId] = useState(0);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const content = await getCvContent();
        if (!active) return;

        setState({
          status: "success",
          content,
          error: null,
        });
      } catch (error) {
        if (!active) return;

        setState({
          status: "error",
          content: null,
          error:
            error instanceof Error ? error.message : "No se pudo cargar el CV",
        });
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, [requestId]);

  const reload = useCallback(() => {
    setState(initialState);
    setRequestId((id) => id + 1);
  }, []);

  return {
    content: state.content,
    error: state.error,
    loading: state.status === "loading",
    reload,
  };
}
