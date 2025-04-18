import { timeAgo } from "@/lib/utils";



import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import {Button} from "@/components/ui/button"
  
export default function ImageCard(props) {
  return (
    <Card className="flex basis-[200px]">
        <CardContent>
            <img src={props.image} alt="vim" />
            <p>{timeAgo(props.time)}</p>
        </CardContent>
        <CardFooter>
            <Button onClick={props.delete} variant="destructive">Delete</Button>
        </CardFooter>
    </Card>
  )
}
