'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

interface IDeleteProps {
    children: ReactNode,
    projectId:string,
    deleteAction: (formData:FormData) => Promise<void>
}
const DeleteProjectConfirmed = ({children, projectId, deleteAction}:IDeleteProps) => {

    return (
        <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure to delete?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={projectId} />
            <AlertDialogAction type="submit">Confirm</AlertDialogAction>
          </form>          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    );
};

export default DeleteProjectConfirmed;