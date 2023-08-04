import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({params}) {
    const result = await deleteContact(params.contactId);
    return redirect("/")
} 