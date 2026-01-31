const Code = () => {
  return (
    <div className="mockup-code w-full">
      <pre data-prefix="$">
        <code>
          {
            // import { NextResponse } from 'next/server'
            // export default async function middleware(request) {
            //   const { pathname, search } = request.nextUrl
            //   // 1️⃣ Rewrite API calls to backend
            //   if (pathname.startsWith('/api')) {
            //     const url = request.nextUrl.clone()
            //     url.host = 'localhost'
            //     url.port = '9000'
            //     url.protocol = 'http'
            //     return NextResponse.rewrite(url)
            //   }
            //   const authCookie = request.cookies.get('connect.sid')
            //   const otpCookie = request.cookies.get('otp_verified')
            //   // 2️⃣ Public routes
            //   if (
            //     pathname === '/' ||
            //     pathname.startsWith('/login') ||
            //     pathname.startsWith('/legal')
            //   ) {
            //     return NextResponse.next()
            //   }
            //   let isAuthenticated = false
            //   // 3️⃣ Validate session if cookie exists
            //   if (authCookie) {
            //     try {
            //       const res = await fetch(
            //         `${process.env.PROD_URL}/api/auth/session`,
            //         {
            //           headers: {
            //             Cookie: `${authCookie.name}=${authCookie.value}`,
            //           },
            //           cache: 'no-store',
            //         }
            //       )
            //       if (res.ok) {
            //         const data = await res.json()
            //         if (data?.code === 'SESSION_VALID') {
            //           isAuthenticated = true
            //         }
            //       }
            //     } catch (error) {
            //       console.error('Session check failed', error)
            //     }
            //   }
            //   const isOtpVerified = otpCookie?.value === 'true'
            //   // 4️⃣ Block unauthenticated users
            //   if (!isAuthenticated) {
            //     const loginUrl = new URL('/', request.url)
            //     loginUrl.searchParams.set(
            //       'redirect',
            //       encodeURIComponent(pathname + search)
            //     )
            //     return NextResponse.redirect(loginUrl)
            //   }
            //   // 5️⃣ OTP not verified
            //   if (isAuthenticated && !isOtpVerified) {
            //     return NextResponse.redirect(new URL('/', request.url))
            //   }
            //   // 6️⃣ Logged-in user on login page
            //   if (isAuthenticated && pathname === '/') {
            //     return NextResponse.redirect(
            //       new URL('/dashboard', request.url)
            //     )
            //   }
            //   return NextResponse.next()
            // }
            // export const config = {
            //   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
            // }
          }
        </code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>
          {`import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
`}
        </code>
      </pre>
      <pre>
        <code>
          {`'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}
`}
        </code>
      </pre>
      <pre>
        <code>
          {/* import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include', // cookies go automatically
  }),

  tagTypes: ['Store'],

  endpoints: (builder) => ({

    // 1️⃣ GET ALL STORES
    getStores: builder.query({
      query: () => '/store',
      keepUnusedDataFor: 300,
      providesTags: ['Store'],
    }),

    // 2️⃣ GET STORE BY ID
    getStoreById: builder.query({
      query: (id) => `/store/${id}`,
      providesTags: (result, error, id) => [{ type: 'Store', id }],
    }),

    // 3️⃣ CREATE STORE
    createStore: builder.mutation({
      query: (body) => ({
        url: '/store',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Store'],
    }),

    // 4️⃣ UPDATE STORE
    updateStore: builder.mutation({
      query: ({ id, body }) => ({
        url: `/store/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Store', id },
      ],
    }),

    // 5️⃣ DELETE STORE
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `/store/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Store'],
    }),

  }),
})

export const {
  useGetStoresQuery,
  useGetStoreByIdQuery,
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
} = apiSlice */}
        </code>
      </pre>
      ;
    </div>
  );
};

export default Code;
