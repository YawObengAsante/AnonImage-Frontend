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
            <img src={props.image} alt="vim" className="h-[150px] object-cover w-full rounded-lg" />
            <p>{timeAgo(props.time)}</p>
        </CardContent>
        <CardFooter>
            <Button onClick={props.delete} variant="destructive" className="cursor-pointer">Delete</Button>
        </CardFooter>
    </Card>
  )
}
