import { getStitches } from "@features/api/stitchApi";
import { useQuery } from "@tanstack/react-query";

export const useStitches = () => {
  return useQuery({
    queryKey: ["stitches"],
    queryFn: getStitches,
  });
};
