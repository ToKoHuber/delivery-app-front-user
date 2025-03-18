"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export function CreateEmail({ onClick, setEmail }: { onClick: () => void }) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email);
    setEmail(values.email);
    onClick();
  }
  // ...

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <ChevronLeft
          className="size-[36px] py-[2px] px-[4px] border-[1px] rounded-[6px] border-[#E4E4E7]"
          onClick={() => router.push("/")}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-6">
              <div>
                <FormLabel>Create your account</FormLabel>
                <FormDescription>
                  Sign up to explore your favorite dishes.
                </FormDescription>
              </div>

              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                  className="max-w-[414px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Let's go
        </Button>
      </form>
    </Form>
  );
}
