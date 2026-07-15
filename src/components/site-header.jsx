"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  BookOpen,
  Book,
  Trophy,
  MonitorPlay,
  Download,
  Sparkles,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { subjects, boards, resourceCategories, site } from "@/lib/site";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/button-link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RESOURCE_ICONS = { BookOpen, Book, Trophy, MonitorPlay, Download, Sparkles };
const boardName = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

// --- Compact hover dropdown (desktop) ---------------------------------------

function TopLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, children, panelClassName }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground group-focus-within:text-foreground"
      >
        {label}
        <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      {/* pt-2 acts as an invisible bridge so hover doesn't drop between trigger and panel */}
      <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div
          className={cn(
            "min-w-[236px] rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl shadow-black/5",
            panelClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function MenuRow({ href, children, className }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}

// A subject row that reveals its boards in a right-hand fly-out on hover.
function SubjectFlyoutRow({ base, subject }) {
  return (
    <div className="group/sub relative">
      <Link
        href={`/${base}/${subject.slug}`}
        className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-foreground group-focus-within/sub:bg-muted"
      >
        <span className="font-medium">{subject.name}</span>
        <ChevronRight className="size-4 opacity-50" />
      </Link>
      <div className="invisible absolute left-full top-0 z-50 pl-2 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
        <div className="min-w-[190px] rounded-2xl border border-border bg-popover p-1.5 shadow-xl shadow-black/5">
          <MenuRow href={`/${base}/${subject.slug}`} className="font-medium">
            All {subject.name}
          </MenuRow>
          <div className="my-1 h-px bg-border" />
          {subject.boards.map((b) => (
            <MenuRow key={b} href={`/${base}/${subject.slug}/${b}`}>
              {boardName(b)}
            </MenuRow>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubjectDropdown({ label, base }) {
  return (
    <Dropdown label={label}>
      <MenuRow
        href={`/${base}`}
        className="font-semibold text-primary hover:text-primary"
      >
        All {label}
      </MenuRow>
      <div className="my-1 h-px bg-border" />
      {subjects.map((s) => (
        <SubjectFlyoutRow key={s.slug} base={base} subject={s} />
      ))}
    </Dropdown>
  );
}

function ResourcesDropdown() {
  return (
    <Dropdown label="Resources" panelClassName="min-w-[272px]">
      {resourceCategories.map((r) => {
        const Icon = RESOURCE_ICONS[r.icon] ?? BookOpen;
        return (
          <MenuRow key={r.slug} href={`/resources/${r.slug}`}>
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-foreground/70">
              <Icon className="size-4" />
            </span>
            <span className="font-medium">{r.name}</span>
          </MenuRow>
        );
      })}
    </Dropdown>
  );
}

// --- Mobile drawer ----------------------------------------------------------

function MobileNav({ onNavigate }) {
  return (
    <div className="flex flex-col gap-1 px-2 pb-6">
      <Link
        href="/about"
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted"
      >
        About
      </Link>

      <Accordion className="w-full">
        <AccordionItem value="courses" className="border-b-0">
          <AccordionTrigger className="rounded-lg px-3 py-3 text-[15px] font-medium hover:no-underline aria-expanded:bg-muted">
            Courses
          </AccordionTrigger>
          <AccordionContent className="pb-1 pl-3 [&_a]:no-underline">
            <MobileSubjectList base="courses" onNavigate={onNavigate} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="past-papers" className="border-b-0">
          <AccordionTrigger className="rounded-lg px-3 py-3 text-[15px] font-medium hover:no-underline aria-expanded:bg-muted">
            Past Papers
          </AccordionTrigger>
          <AccordionContent className="pb-1 pl-3 [&_a]:no-underline">
            <MobileSubjectList base="past-papers" onNavigate={onNavigate} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources" className="border-b-0">
          <AccordionTrigger className="rounded-lg px-3 py-3 text-[15px] font-medium hover:no-underline aria-expanded:bg-muted">
            Resources
          </AccordionTrigger>
          <AccordionContent className="pb-1 pl-1 [&_a]:no-underline">
            <div className="flex flex-col">
              {resourceCategories.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {r.name}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link
        href="/pricing"
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted"
      >
        Pricing
      </Link>
      <Link
        href="/reviews"
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted"
      >
        Reviews
      </Link>
      <Link
        href="/contact"
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-muted"
      >
        Contact
      </Link>
    </div>
  );
}

function MobileSubjectList({ base, onNavigate }) {
  const allLabel = base === "courses" ? "All courses" : "All past papers";
  return (
    <div className="flex flex-col">
      <Link
        href={`/${base}`}
        onClick={onNavigate}
        className="rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
      >
        {allLabel}
      </Link>
      <Accordion className="w-full">
        {subjects.map((s) => (
          <AccordionItem key={s.slug} value={s.slug} className="border-b-0">
            <AccordionTrigger className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:no-underline aria-expanded:bg-muted">
              {s.name}
            </AccordionTrigger>
            <AccordionContent className="pb-1 pl-3">
              <Link
                href={`/${base}/${s.slug}`}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-muted"
              >
                All {s.name}
              </Link>
              {s.boards.map((b) => (
                <Link
                  key={b}
                  href={`/${base}/${s.slug}/${b}`}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {boardName(b)}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

// --- Header -----------------------------------------------------------------

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex h-20 items-center justify-between gap-3 lg:h-[82px]">
        <Logo priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          <TopLink href="/about">About</TopLink>
          <SubjectDropdown label="Courses" base="courses" />
          <SubjectDropdown label="Past Papers" base="past-papers" />
          <ResourcesDropdown />
          <TopLink href="/pricing">Pricing</TopLink>
          <TopLink href="/reviews">Reviews</TopLink>
          <TopLink href="/contact">Contact</TopLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <ButtonLink
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            href={site.login}
          >
            Log in
          </ButtonLink>
          <ButtonLink size="sm" className="hidden sm:inline-flex" href={site.register}>
            Register
          </ButtonLink>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "lg:hidden"
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b border-border px-4">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <MobileNav onNavigate={() => setOpen(false)} />
              <div className="sticky bottom-0 mt-auto flex flex-col gap-2 border-t border-border bg-background/95 p-4 backdrop-blur">
                <ButtonLink href={site.register} onClick={() => setOpen(false)}>
                  Register
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to us on WhatsApp
                </ButtonLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
