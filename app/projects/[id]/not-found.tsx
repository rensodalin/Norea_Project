import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">Project Not Found</h2>
        <Link href="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
