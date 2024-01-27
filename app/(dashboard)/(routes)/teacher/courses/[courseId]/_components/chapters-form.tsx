"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Chapter, Course } from "@prisma/client";
import { Input } from "@/components/ui/input";

interface ChaptersFormProps {
    initialData: Course & { chapters: Chapter[] };
    courseId: string;
};

const formSchema = z.object({
    title: z.string().min(1)
});

export const ChaptersForm = ({initialData, courseId} : ChaptersFormProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    });
    const { isSubmitting, isValid } = form.formState;
    const router = useRouter();
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/chapters`, values);
            toast.success("Chapter created");
            toggleCreating();
            router.refresh();
        } catch (error) {
            console.log("[DESCRIPTION FORM]", error);
            toast.error("Something went wrong!");
        }
    }
    const toggleCreating = () => {
        setIsCreating((prev) => !prev);
    }
    return ( 
        <div className="border bg-slate-100 rounded-md p-4 mt-6">
            <div className="flex items-center justify-between font-medium">
                Course chapters
                <Button onClick={toggleCreating} variant="ghost">
                    {
                        isCreating ? 
                        <>Cancel</> :
                        <>
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Add a chapter
                        </>
                    }
                </Button>
            </div>
            {
                isCreating ?
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder="e.g. 'Introduction to the course'"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isSubmitting || !isValid}>Create</Button>
                    </form>
                </Form> : (
                    <>
                        <div className={cn("text-sm mt-2", !initialData.chapters.length && "text-slate-500 italic")}>
                            {!initialData.chapters.length && "No Chapters"}
                            {/* TODO: Add a list of chapters */}
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Drag and drop to reorder the chapters</p>
                    </>
                )
            }
        </div>
     );
}