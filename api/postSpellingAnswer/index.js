import { api } from "helpers/api";
import { spellingRequest } from "./spellingAnswerRequest";
import { spellingResponse } from "./spellingAnswerResponse";

export const postSpellingAnswer = async ({ id, letters }) => {
  return spellingResponse(
    await api.post(
      process.env.NEXT_PUBLIC_SPELLING_PATH,
      spellingRequest({ id, letters })
    )
  );
};
