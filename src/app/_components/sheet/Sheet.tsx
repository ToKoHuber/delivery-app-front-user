import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { EmptyOrder } from "./EmptyOrder";

export function SheetBasket() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#404040] p-8 flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle className="flex gap-3">
            <ShoppingCart />
            <p>Order detail</p>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {/* adding cards to sheets */}
        <Tabs defaultValue="Card" className="w-[400px]">
          <TabsList className=" grid w-full grid-cols-2 rounded-full">
            <TabsTrigger value="Card">Card</TabsTrigger>
            <TabsTrigger value="order">Order</TabsTrigger>
          </TabsList>
          <TabsContent value="Card">
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>
                  Make changes to your Card here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="order">
            <EmptyOrder />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
