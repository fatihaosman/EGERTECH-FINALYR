This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## NAVBAR

# Why state?
 Because:
Clicking “Others” should change the UI
React only re-renders when state changes

**const [open, setOpen] = useState(false);**
 useState:Controls open/close: I want to rember whether the dropdown is open or closed open(flase) 

**onClick={() => setOpen((prev) => !prev)}**
“If it was closed, open it.
If it was open, close it.”

## USEREF
# “Did the user click outside this dropdown?”
**const dropdownRef = useRef<HTMLDivElement | null>(null);**
A persistent pointer to a DOM element.
Think of it as: “Hey React, remember this exact element on the page.”

**<div ref={dropdownRef}>** later Sin jsx:
this tells react:store a reference to this div in dropdownRef.current

**Why do we need this?**
Because we want to detect:
“Did the user click outside this dropdown?”
You cannot detect that with state alone.


## USEEFFECT
What useEffect really means: Run this code after the component exists in the browser.    BECAUSE: muse events, windows and document dont exist on the server.
thats why we use **use client**


## What we used(industry standard)
Tool	Purpose
useState	Is dropdown open or closed?
useRef	Where is the dropdown in the DOM?
useEffect	Listen to browser events