'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

interface IDeleteProps {
    children: ReactNode,
    blogId:string,
    deleteAction: (formData:FormData) => Promise<void>
    // onConfirm: () => void
}
const DeleteBlogConfirmation = ({children, blogId, deleteAction}:IDeleteProps) => {
    
    // const handleConfirm=()=>{
    //     onConfirm()
    // }
    return (
        <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure to cancel?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Delete</AlertDialogCancel>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={blogId} />
            <AlertDialogAction type="submit">Confirm</AlertDialogAction>
          </form>
          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    );
};

export default DeleteBlogConfirmation;