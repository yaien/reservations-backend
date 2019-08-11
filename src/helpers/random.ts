import crypto from "crypto";

export function hex(length: number) {
  return () => crypto.randomBytes(length).toString("hex");
}

export default {
  hex
};
