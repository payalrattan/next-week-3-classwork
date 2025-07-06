
import { http } from "@/api/const/httpCommon";

export const getPeople = async () => {
    const result = await http.get("people/");
   console.log(result.data.results);
    return result.data.results;
};
