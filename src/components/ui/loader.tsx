// components/Loader.tsx
import { MoonLoader } from "react-spinners"

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-32">
      <MoonLoader color="#3b82f6" size={50} />
    </div>
  )
}
