"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">Have a project in mind or just want to say hi? Let's connect.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Contact Form</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Email" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name="message" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only">Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your Message" rows={5} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="flex flex-col justify-center space-y-6">
                 <h3 className="text-2xl font-headline font-semibold">Other ways to connect</h3>
                 <p className="text-muted-foreground">
                    I'm also active on these platforms. Feel free to connect or follow my work.
                 </p>
                 <div className="space-y-4">
                    {socialLinks.map(link => (
                        <Link href={link.href} key={link.name} className="flex items-center gap-4 group p-3 rounded-lg hover:bg-background/80 transition-colors" target="_blank" rel="noopener noreferrer">
                            <div className="bg-primary/10 p-3 rounded-md">
                                <link.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold">{link.name}</p>
                                <p className="text-sm text-muted-foreground">{link.href.replace('mailto:', '')}</p>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
