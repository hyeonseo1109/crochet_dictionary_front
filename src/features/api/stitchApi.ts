import { ApiResponse, Stitch } from "@features/model";
import { API_BASE_URL } from "@shared/api";

export const getStitches = async (): Promise<ApiResponse<Stitch[]>> => {
  const response = await fetch(`${API_BASE_URL}/api/stitches`);

  const result: ApiResponse<Stitch[]> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message);
  }

  return result;
};
