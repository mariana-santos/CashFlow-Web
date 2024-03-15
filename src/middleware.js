import { NextResponse } from 'next/server'

export function middleware(request) {
    if(!request.cookies.has('cashflow_jwt'))
         return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/emprestimos/:path*',
    '/tiposCredito/:path*',
  ]
}