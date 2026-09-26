const ResumeContent = () => {
  return (
    <div className="font-serif animate-fade-in-up duration-500">
      <div className="bg-gray-300 dark:bg-transparent dark:border rounded-lg mt-10">
        <h1 className="font-serif flex justify-center text-3xl">
          Satyam Singh
        </h1>
        <div className="py-4">
          <div className="flex justify-center text-lg">
            Frontend Engineer | React.js | Next.js | TypeScript | JavaScript |
            Redux Toolkit | SSR
          </div>
          <p className="flex justify-center">
            Noida, Sector-135, India (201301)
          </p>
          <p className="flex justify-around">
            +91 8533924968 satyamsingh7417@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-2 mb-4">
        <div className="h-px mb-1 bg-black w-full" />
        <div className="h-2 bg-gray-600 w-full rounded-2xl" />
      </div>

      <div className="flex justify-start my-2 font-semibold">Profile</div>
      <div className="h-px bg-gray-700 w-full" />
      <div className="py-4 text-justify">
        Frontend Engineer with 4+ years of experience building scalable,
        high-performance web applications using <strong>React.js</strong>,{" "}
        <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
        <strong>Redux Toolkit</strong>. Strong track record in SSR
        implementation, authentication flows, REST API integration, and reusable
        component architecture, with hands-on exposure to{" "}
        <strong>Node.js/Express</strong>, <strong>MongoDB</strong>,{" "}
        <strong>Firebase Firestore</strong>, and containerized (Docker) and
        cloud (Vercel/Netlify) deployment workflows. Improved page-load
        performance by <strong>35%</strong> and perceived application speed by{" "}
        <strong>50%+</strong> across production and freelance projects.
      </div>

      <div className="flex justify-start my-2 font-semibold">Skills</div>
      <div className="h-px bg-black w-full" />
      <div className="flex justify-around py-4">
        <div>
          <ul className="flex gap-3 flex-wrap sm:justify-evenly list-col-grow list-disc capitalize rounded-full">
            <li>
              <strong>Frontend:</strong> React.js, Next.js, TypeScript,
              JavaScript (ES6+), Redux Toolkit, RTK Query
            </li>
            <li>
              <strong>Backend (Working Knowledge):</strong> Node.js, Express.js,
              REST API Design & Integration, JWT Authentication
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Firebase Firestore
            </li>
            <li>
              <strong>Styling & UI:</strong> Tailwind CSS, Material UI,
              Responsive Design
            </li>
            <li>
              <strong>Deployment & DevOps:</strong> Vercel, Netlify, Docker
              (containerized builds), Git, CI/CD
            </li>
            <li>
              <strong>Performance & SEO:</strong> SSR, SEO Optimization, Lazy
              Loading, Code Splitting
            </li>
            <li>
              <strong>Testing & Tooling:</strong> Cypress, Postman, Vite,
              Webpack
            </li>
            <li>
              <strong>Cross-Platform:</strong> React Native, Expo, Capacitor
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-start my-2 font-semibold">
        Work Experience
      </div>
      <div className="h-px bg-black w-full" />
      <div>
        <div className="font-[600] py-2 flex justify-between text-sm">
          <div>
            <p>Senior Frontend Engineer</p>
            <p>VLink India Pvt Ltd</p>
            <p>Gurugram, India</p>
          </div>
          <div>
            <p>Jan 2026 – Aug 2026</p>
          </div>
        </div>

        <ol className="pl-10 text-justify">
          <li>
            • Owned frontend architecture and end-to-end delivery for production
            applications using React.js, Next.js, and TypeScript, defining
            folder structure, component boundaries, and shared UI/hook libraries
            used across 3+ feature teams.
          </li>
          <li>
            • Migrated a legacy React.js (client-rendered) application to
            Next.js, restructuring pages into the file-based router and
            resolving hydration mismatches — cutting initial page load time by
            ~30% and eliminating recurring routing bugs.
          </li>
          <li>
            • Refactored global state from scattered local state into Redux
            Toolkit slices with RTK Query, reducing redundant API calls by ~40%
            and simplifying loading/error handling across screens.
          </li>
          <li>
            • Implemented authentication and route protection using JWT-based
            session handling, protected routes/middleware, and role-aware UI
            rendering, closing gaps that had previously allowed unauthorized
            route access.
          </li>
          <li>
            • Improved Core Web Vitals through code splitting, dynamic imports,
            image optimization, and memoization (React.memo,
            useMemo/useCallback), raising average Lighthouse performance score
            from the ~60s into the 85–90+ range on key pages.
          </li>
          <li>
            • Built and maintained reusable, typed UI components (forms, tables,
            modals, navigation) in TypeScript with Tailwind CSS, cutting
            duplicate styling code by roughly 25% and improving UI consistency
            across features.
          </li>
          <li className="pb-3">
            • Shipped production releases 1–2 times weekly via CI/CD, reviewing
            pull requests and writing Cypress test coverage for critical flows,
            keeping post-release defect reports to a minimal, easily-patched
            level.
          </li>
          <div className="h-px bg-gray-300 w-full" />
        </ol>
      </div>

      <div>
        <div className="font-[600] py-2 flex justify-between text-sm">
          <div>
            <p>Freelance Frontend Developer</p>
            <p>Self-Employed</p>
            <p>Remote</p>
          </div>
          <div>
            <p>Aug 2025 – Jan 2026</p>
          </div>
        </div>

        <ol className="pl-10 text-justify">
          <li>
            • Restructured a cluttered, AI-generated React project into a
            maintainable codebase and repaired end-to-end user flows, resolving
            the majority of reported bugs within the first two weeks.
          </li>
          <li>
            • Introduced Redux state management and Node.js/Express-based API
            endpoints to support cleaner client-server data flow, reducing
            redundant re-renders and inconsistent UI state.
          </li>
          <li>
            • Deployed builds via Vercel/Netlify and containerized services with
            Docker, cutting environment-setup time for new changes from hours to
            minutes.
          </li>
          <li className="pb-3">
            • Improved perceived application speed by more than 50% through
            frontend and data-fetching optimizations, including memoization and
            reduced bundle size.
          </li>
          <div className="h-px bg-gray-300 w-full" />
        </ol>
      </div>

      <div>
        <div className="font-[600] py-2 flex justify-between text-sm">
          <div>
            <p>Engineer – Software Development</p>
            <p>Codeblock Technologies Pvt. Ltd.</p>
            <p>Noida (Sector 135), India</p>
          </div>
          <div>
            <p>Nov 2022 – Aug 2025</p>
          </div>
        </div>

        <ol className="pl-10 text-justify">
          <li>
            • Built React.js and Next.js applications in TypeScript across
            multiple client projects, improving page-load performance by 35%
            across high-traffic flows through code splitting, lazy loading, and
            bundle-size optimization (Webpack/Vite).
          </li>
          <li>
            • Independently designed and built 30+ reusable, lightweight
            components (forms, cards, tables, modals, navigation, breadcrumbs)
            using Tailwind CSS and vanilla CSS, published as a shared internal
            component set that cut new-feature development time by roughly 20%.
          </li>
          <li>
            • Implemented SSR and static generation in Next.js and drove on-page
            SEO improvements (meta tags, structured data, semantic HTML,
            sitemap/robots configuration), improving crawlability and
            contributing to measurable gains in organic search visibility.
          </li>
          <li>
            • Optimized images and assets (compression, responsive srcsets,
            lazy-loaded media), reducing average page weight by roughly 30–40%
            and improving Largest Contentful Paint on content-heavy pages.
          </li>
          <li>
            • Wrote Cypress component and end-to-end tests for critical user
            flows and integrated them into CI/CD pipelines, cutting
            regression-related production bugs by an estimated 25%.
          </li>
          <li>
            • Integrated REST APIs and MongoDB/Firebase-backed data sources to
            power dynamic, data-driven UI features, handling loading, error, and
            empty states consistently across the app.
          </li>
          <li className="pb-3">
            • Used Git-based branching and PR workflows, participating in code
            reviews to maintain code quality and consistent TypeScript typing
            standards across the team.
          </li>
          <div className="h-px bg-gray-300 w-full" />
        </ol>
      </div>

      <div>
        <div className="font-[600] py-2 flex justify-between text-sm">
          <div>
            <p>Frontend Development Intern</p>
            <p>Leads4Needs</p>
            <p>India</p>
          </div>
          <div>
            <p>Jan 2022 – Jun 2022</p>
          </div>
        </div>

        <ol className="pl-10 text-justify">
          <li>
            • Built responsive breadcrumbs, dialogs, drawers, and forms using
            React.js and JavaScript.
          </li>
          <li className="pb-3">
            • Implemented smooth animations and interaction patterns while
            learning responsive frontend development practices.
          </li>
          <div className="h-px bg-gray-300 w-full" />
        </ol>
      </div>

      <div>
        <div className="font-[600] py-2 flex justify-between text-sm">
          <div>
            <p>Senior Process Associate</p>
            <p>Genpact</p>
            <p>Noida, India</p>
          </div>
          <div>
            <p>Feb 2018 – Aug 2021</p>
          </div>
        </div>

        <ol className="pl-10 text-justify">
          <li>
            • Processed 18–22 medical, legal, auto, and liability claims daily,
            consistently meeting or exceeding daily throughput targets with
            strong attention to detail and process discipline.
          </li>
          <li className="pb-3">
            • Reviewed case files and created accurate claims within
            20–30-minute handling targets, maintaining a low error/rework rate
            across a high-volume caseload.
          </li>
          <div className="h-px bg-gray-300 w-full" />
        </ol>
      </div>

      <div className="flex justify-start my-2 font-semibold">Projects</div>
      <div className="h-px bg-gray-300 w-full" />
      <div className="py-4">
        <div className="font-[600]">Yobiz — B2C Retail Platform</div>
        <ol className="pl-10 text-justify">
          <li>
            • Developed and maintained a scalable, responsive B2C retail
            application using React.js, TypeScript, Tailwind CSS, and Redux
            Toolkit, with REST API and Android integrations, Cypress E2E
            testing, and CI/CD automation.
          </li>
          <li>
            • Architected reusable, typed component patterns (product listings,
            filters, cart, checkout flows) to keep the codebase consistent and
            maintainable as the product surface grew.
          </li>
          <li>
            • Optimized rendering performance and mobile responsiveness across
            device sizes, reducing layout shifts and improving usability on
            high-traffic retail pages.
          </li>
        </ol>
      </div>

      <div className="py-4">
        <div className="font-[600]">Vitalic (LC / SPC / PIL)</div>
        <ol className="pl-10 text-justify">
          <li>
            • Modernized a legacy React application by migrating to Next.js with
            SSR, middleware-based authentication, and optimized routing; built
            interactive dashboards and real-time DOCX document workflows with
            dynamic data handling and MongoDB-backed persistence.
          </li>
          <li>
            • Implemented SSR and metadata handling in Next.js to improve
            search-engine indexing, crawlability, and initial page-load speed
            across key application routes.
          </li>
          <li>
            • Designed reusable dashboard widgets and data tables with
            client-side filtering, sorting, and pagination to handle large,
            dynamic datasets efficiently.
          </li>
        </ol>
      </div>

      <div className="py-4">
        <div className="font-[600]">Imagineclick / Yoembryo</div>
        <ol className="pl-10 text-justify">
          <li>
            • Developed responsive, data-driven interfaces featuring real-time
            search, messaging, dynamic content, and reusable components using
            React.js, TypeScript, and Material UI.
          </li>
          <li>
            • Built debounced, real-time search and filtering functionality
            backed by REST APIs to keep large result sets fast and responsive.
          </li>
          <li>
            • Structured component and routing architecture for maintainability,
            enabling faster feature delivery as the application scope expanded.
          </li>
        </ol>
      </div>

      <div className="flex justify-start my-2 font-semibold">Education</div>
      <div className="h-px bg-gray-300 w-full" />
      <div className="py-4">
        <div className="flex justify-between">
          <p>B.Sc (IT), HNBGU</p> <p>Jul 2014 – Jul 2017</p>
        </div>
        <div className="flex justify-between">
          <p>MERN Full-Stack Certification, DUCAT (Gurugram, Sector 14)</p>{" "}
          <p>Apr 2022 – Oct 2022</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
