import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, FileTextIcon, Link2Icon, SearchIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";
import Marquee from "./marquee";
import { IconFolderCode } from "@tabler/icons-react";
import { File, Folder, Tree } from "../ui/file_tree";
const files = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
];

const ELEMENTS = [
    {
      id: "1",
      isSelectable: true,
      name: "src",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "app",
          children: [
            {
              id: "3",
              isSelectable: true,
              name: "layout.tsx",
            },
            {
              id: "4",
              isSelectable: true,
              name: "page.tsx",
            },
          ],
        },
        {
          id: "5",
          isSelectable: true,
          name: "components",
          children: [
            {
              id: "6",
              isSelectable: true,
              name: "header.tsx",
            },
            {
              id: "7",
              isSelectable: true,
              name: "footer.tsx",
            },
          ],
        },
        {
          id: "8",
          isSelectable: true,
          name: "lib",
          children: [
            {
              id: "9",
              isSelectable: true,
              name: "utils.ts",
            },
          ],
        },
      ],
    },
  ];
export const CARDS = [
    {
        Icon: FileTextIcon,
        name: "Securing What Matters",
        description: "We protect your files with real-time backups and enterprise-grade security — automatically.",
        href: "#",
        cta: "Learn how it works",        
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: IconFolderCode,
        name: "Smarter Folder Organization",
        description: "Effortlessly manage and structure your folders with AI-powered automation — no more messy directories.",
        href: "#",
        cta: "Organize like a pro",               
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="grid grid-cols-1 md:grid-cols-2">
   <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <Tree
              className="overflow-hidden rounded-md bg-background p-2"
              initialSelectedId="7"
              initialExpandedItems={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
              ]}
              elements={ELEMENTS}
            >
              <Folder element="src" value="1">
                <Folder value="2" element="app">
                  <File value="3">
                    <p>layout.tsx</p>
                  </File>
                  <File value="4">
                    <p>page.tsx</p>
                  </File>
                </Folder>
                <Folder value="5" element="components">
                  <Folder value="6" element="ui">
                    <File value="7">
                      <p>button.tsx</p>
                    </File>
                  </Folder>
                  <File value="8">
                    <p>header.tsx</p>
                  </File>
                  <File value="9">
                    <p>footer.tsx</p>
                  </File>
                </Folder>
                <Folder value="10" element="lib">
                  <File value="11">
                    <p>utils.ts</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
          <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <Tree
              className="overflow-hidden rounded-md bg-background p-2"
              initialSelectedId="7"
              initialExpandedItems={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
              ]}
              elements={ELEMENTS}
            >
              <Folder element="src" value="1">
                <Folder value="2" element="app">
                  <File value="3">
                    <p>layout.tsx</p>
                  </File>
                  <File value="4">
                    <p>page.tsx</p>
                  </File>
                </Folder>
                <Folder value="5" element="components">
                  <Folder value="6" element="ui">
                    <File value="7">
                      <p>button.tsx</p>
                    </File>
                  </Folder>
                  <File value="8">
                    <p>header.tsx</p>
                  </File>
                  <File value="9">
                    <p>footer.tsx</p>
                  </File>
                </Folder>
                <Folder value="10" element="lib">
                  <File value="11">
                    <p>utils.ts</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
            </div>
        ),
    },
    {
        Icon: SearchIcon,
        name: "Search your links",
        description: "Quickly find the links you need with AI-powered search.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Command className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <Input placeholder="Type to search..." />
                <div className="mt-1 cursor-pointer">
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/hdf00c</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/sdv0n0</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/03gndo</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/09vmmw</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/s09vws</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">linkify.io/sd8fv5</div>
                </div>
            </Command>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "Connect your apps",
        description: "Integrate with your favorite apps and services.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Keep track of your links with our calendar view.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
