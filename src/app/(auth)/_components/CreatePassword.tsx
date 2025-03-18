"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

// Define schema for password and confirmation
const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "At least one uppercase letter")
      .regex(/[a-z]/, "At least one lowercase letter")
      .regex(/\d/, "At least one number")
      .regex(/[@$!%*?&]/, "At least one special character (@$!%*?&)"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function CreatePass({
  goBack,
  email,
}: {
  goBack: void;
  email: string;
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const createProfile = async (values: z.infer<typeof formSchema>) => {
    const data = await fetch("http://localhost:4000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: values.password,
      }),
    });
    const jsonData = await data.json();

    console.log("data", jsonData);
    // getFoods();
  };

  const router = useRouter();
  const onSubmit = (values: { password: string; confirmPassword: string }) => {
    createProfile(values);
    console.log("Password:", values.password);
    alert("Password successfully set!");
    router.push("http://localhost:3000/logIn");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md"
      >
        {/* Password Field */}
        <ChevronLeft
          className="size-[36px] py-[2px] px-[4px] border-[1px] rounded-[6px] border-[#E4E4E7]"
          onClick={goBack}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="button"
          className=" text-gray-500"
          onClick={() => {
            setShowConfirmPassword((prev) => !prev);
            setShowPassword((prev) => !prev);
          }}
        >
          {showConfirmPassword && showPassword ? (
            <div className="flex gap-2 items-center">
              <EyeOff size={16} />
              <p> Hide password</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Eye size={16} />
              <p>Show Password</p>
            </div>
          )}
        </button>
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Let's go
        </Button>
      </form>
    </Form>
  );
}
