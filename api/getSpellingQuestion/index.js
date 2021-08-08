import { api } from "helpers/api";
import { spellingQuestionResponse } from "./spellingQuestionResponse";

export const getSpellingQuestion = async () =>
  spellingQuestionResponse(
    await api.get(process.env.NEXT_PUBLIC_SPELLING_PATH)
  );
