import { useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function App() {
  const [dark, setDark] = useState(false)

  function toggleDark() {
    document.documentElement.classList.toggle("dark", !dark)
    setDark(!dark)
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Gloo Design System</h1>
          <p className="text-muted-foreground text-sm">
            shadcn/ui components with the Gloo brand theme
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={toggleDark}>
          {dark ? <Sun /> : <Moon />}
        </Button>
      </header>

      <Separator />

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Badges</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Card, Input &amp; Dialog</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              A sample card composing input, label and dialog.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@gloo.example" />
          </CardContent>
          <CardFooter className="gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Continue</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Themed dialog</DialogTitle>
                  <DialogDescription>
                    Popover surfaces pick up the Gloo palette too.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default App
