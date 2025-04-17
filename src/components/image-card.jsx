import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import {Button} from "@/components/ui/button"
  
export default function ImageCard() {
  return (
    <Card className="flex basis-[200px]">
        <CardContent>
            <img src="https://dummyimage.com/200x200/000/fff" alt="image" />
        </CardContent>
        <CardFooter>
            <Button variant="destructive">Delete</Button>
        </CardFooter>
    </Card>
  )
}
