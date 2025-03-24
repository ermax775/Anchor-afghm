import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

interface TeamMemberProps {
  id: number
  name: string
  role: string
  bio: string
  avatar: string
  social?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export function TeamMember({ name, role, bio, avatar, social }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 text-center">
        <Avatar className="h-24 w-24 mx-auto mb-4 border-2 border-primary">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      <CardContent>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </CardContent>
      {social && (
        <CardFooter className="flex justify-center gap-4 border-t p-4">
          {social.facebook && (
            <Link href={social.facebook} className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          )}
          {social.instagram && (
            <Link href={social.instagram} className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          )}
          {social.linkedin && (
            <Link href={social.linkedin} className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

