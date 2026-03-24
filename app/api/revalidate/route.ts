import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Helper function to set CORS headers
function setCORSHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*') // or specify your backend URL like 'http://localhost:8000'
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return response
}

export async function OPTIONS() {
    return setCORSHeaders(new NextResponse(null, { status: 204 }))
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}))

        // It is recommended to secure this route so only your backend can trigger it.
        // Set REVALIDATION_SECRET in your .env file on this frontend project.
        if (process.env.NEXT_PUBLIC_REVALIDATION_SECRET && body.secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
            return setCORSHeaders(NextResponse.json({ message: 'Invalid secret token' }, { status: 401 }))
        }

        if (body.page === "about") {
            revalidatePath("/about", "page")
        }
        // Revalidates the entire /machines route layout, which includes:
        // - /machines (if it exists)
        // - /machines/[category]
        // - /machines/[category]/[slug]
        else if (body.page === "blogs") {
            revalidatePath("/blogs", "page")
        }
        else if (body.page === "blog") {
            revalidatePath(`/blogs/${body.slug}`, "page")
        }
        else {
            revalidatePath('/machines', 'layout')
        }

        // Optionally revalidate the home page, in case categories or machine counts are displayed there
        revalidatePath('/', 'page')
        revalidatePath('/', 'layout')

        return setCORSHeaders(NextResponse.json({
            revalidated: true,
            message: 'Machine and category pages revalidated successfully',
            now: Date.now()
        }, { status: 200 }))

    } catch (error) {
        console.error('Error during revalidation:', error)
        return setCORSHeaders(NextResponse.json({ message: 'Internal Server Error during revalidation' }, { status: 500 }))
    }
}
