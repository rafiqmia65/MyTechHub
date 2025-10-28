"use client";

import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <Card className="">
      <h3 className="text-3xl font-semibold mt-8 text-primary text-center">
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary mb-2"
            >
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary mb-2"
          >
            Your Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Hi MytechHub team, I have a question about..."
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
