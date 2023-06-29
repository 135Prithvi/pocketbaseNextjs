"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Client() {
  return (
    <Card className="max-w-full">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="lg"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-sm text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image
          shadow="lg"
          radius="xl"
          width="100%"
          alt={"f"}
          className="w-full object-cover h-[140px]"
          src={"https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"}
        />
        <div className="h-2"/>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
