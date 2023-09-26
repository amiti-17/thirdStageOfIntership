import { sha256 } from "js-sha256";

export const getCryptPassword = (password) => sha256(password);