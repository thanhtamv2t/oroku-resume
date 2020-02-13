import { db } from "../api/firebase";

export const sendContact = async (name, email, message) => {
  try {
    await db.collection("contact").add({ name, email, message });
    return { status: true };
  } catch (e) {
    return { status: false, message: e };
  }
};
